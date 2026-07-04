// Smoke test - verifies T-Doc Phase A (hand-curated) AND Phase C (manifest-
// driven) TSDoc tooltips have attached to script-facing methods. The
// manifest-driven entries are picked from FQNs that we know were in the
// kdoc-extractor output AND in the script-api-types surface, so the
// pipeline failing for any reason (missing manifest, broken apply-kdoc,
// markup syntax change in regen output) trips this gate.
//
// Two layers of assertions:
//   1. Hand-picked Phase A + Phase C tooltips MUST be present (the
//      `REQUIRED_DOCS` table).
//   2. Aggregate coverage MUST be >= MIN_MODULE_DOC_PCT % across all
//      `net/ccbluex/liquidbounce/features/module/modules/*` class files
//      - catches silent loss of upstream KDocs after a regen.
//   3. Every Source: footer in the package MUST point at the LB sha
//      currently checked out under references/liquidbounce - catches
//      stale permalinks after an LB bump.

import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { execSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const ts = (() => {
    const candidates = [
        resolve(__dirname, "../../script-helper/node_modules/typescript"),
        resolve(__dirname, "../../../templates/script-project/node_modules/typescript"),
    ];
    for (const c of candidates) {
        try { return require(c); } catch { /* try next */ }
    }
    throw new Error("typescript not found in workspace");
})();

// Each: (file path relative to package root, member name, expected substring
// the docstring must contain).
//
// Phase A entries (hand-curated): registerScript, registerModule, on,
// curve, boolean. These trump any manifest-driven entry for the same FQN.
// Phase C entries (manifest-driven): a sampling of high-value classes that
// must continue to receive their upstream KDoc after every regen.
const REQUIRED_DOCS = [
    // ---- Phase A (hand-curated) ----
    [
        "ambient/ambient.d.ts",
        "registerScript",
        "Registers a new script with LiquidBounce",
    ],
    [
        "types/net/ccbluex/liquidbounce/script/PolyglotScript.d.ts",
        "registerModule",
        "Registers a new module backed by this script",
    ],
    [
        "types/net/ccbluex/liquidbounce/script/PolyglotScript.d.ts",
        "on",
        "Binds a handler to one of this script's lifecycle events",
    ],
    [
        "types/net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts",
        "curve",
        "Declares a {@link CurveValue} setting",
    ],
    [
        "types/net/ccbluex/liquidbounce/script/bindings/features/ScriptSetting.d.ts",
        "boolean",
        "Creates a boolean setting",
    ],
    // ---- Phase C (manifest-driven, must survive every regen) ----
    [
        "types/net/ccbluex/liquidbounce/script/bindings/features/ScriptSetting.d.ts",
        "ScriptSetting",
        "Object used by the script API to provide an idiomatic way of creating module values",
    ],
];

const packageRoot = resolve(__dirname, "..");

let failures = 0;
for (const [relPath, member, expectedSubstr] of REQUIRED_DOCS) {
    const absPath = resolve(packageRoot, relPath);
    const raw = readFileSync(absPath, "utf8");
    if (!raw.includes(expectedSubstr)) {
        console.error(`FAIL ${relPath}: TSDoc substring missing - "${expectedSubstr}"`);
        failures++;
        continue;
    }
    // Sanity: the substring must appear inside a /** ... */ comment.
    const re = new RegExp(`/\\*\\*[\\s\\S]*?${expectedSubstr.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[\\s\\S]*?\\*/`);
    if (!re.test(raw)) {
        console.error(`FAIL ${relPath}: "${expectedSubstr}" found but not inside /** */ block`);
        failures++;
        continue;
    }
    console.log(`OK   ${relPath}#${member}`);
}

if (failures > 0) {
    console.error(`\nFAIL: ${failures}/${REQUIRED_DOCS.length} required TSDoc blocks missing`);
    process.exit(1);
}

console.log(`\nOK: ${REQUIRED_DOCS.length}/${REQUIRED_DOCS.length} required TSDoc blocks present`);

// ---------------------------------------------------------------
// Aggregate coverage check - every `class` / `interface` declaration in
// the modules tree must have a /** ... */ block immediately above it.
// We're lenient about exact threshold because not every Kotlin class has
// a KDoc upstream, but a sudden drop is suspicious.
// ---------------------------------------------------------------
// We set the threshold a bit below today's actual coverage so the gate
// catches large regressions (e.g. apply-kdoc silently doing nothing,
// manifest pointing at wrong package) without flapping on small upstream
// churn. Bump it whenever real coverage rises substantially.
const MIN_MODULE_DOC_PCT = 28;

function walkDir(dir) {
    const out = [];
    for (const ent of readdirSync(dir)) {
        const full = resolve(dir, ent);
        const st = statSync(full);
        if (st.isDirectory()) out.push(...walkDir(full));
        else if (ent.endsWith(".d.ts")) out.push(full);
    }
    return out;
}

const modulesRoot = resolve(packageRoot, "types/net/ccbluex/liquidbounce/features/module/modules");
const classDeclRe = /^export\s+(?:abstract\s+|declare\s+)?(?:class|interface)\s+\S/m;
const docAboveRe = /\*\/\s*\n(?:[^\n]*\n)?export\s+(?:abstract\s+|declare\s+)?(?:class|interface)\s+\S/m;
const moduleFiles = walkDir(modulesRoot);
let classFiles = 0;
let docced = 0;
for (const f of moduleFiles) {
    const raw = readFileSync(f, "utf8");
    if (!classDeclRe.test(raw)) continue;
    classFiles++;
    // Look for a /** ... */ block that ends within ~5 lines of the
    // `export class` declaration line.
    const lines = raw.split("\n");
    const idx = lines.findIndex((l) => /^export\s+(?:abstract\s+|declare\s+)?(?:class|interface)\s+/.test(l));
    if (idx < 0) continue;
    let hasDoc = false;
    for (let i = idx - 1; i >= Math.max(0, idx - 5); i--) {
        if (/\*\/\s*$/.test(lines[i])) { hasDoc = true; break; }
        if (lines[i].trim() === "") continue;
        // any non-blank non-doc line means no attached doc
        break;
    }
    if (hasDoc) docced++;
}
const pct = classFiles === 0 ? 100 : (docced * 100) / classFiles;
console.log(`\nmodule class coverage: ${docced}/${classFiles} = ${pct.toFixed(1)}%`);
if (pct < MIN_MODULE_DOC_PCT) {
    console.error(
        `FAIL: module class coverage ${pct.toFixed(1)}% is below the minimum of ${MIN_MODULE_DOC_PCT}%. ` +
        `Either upstream lost KDocs, or the apply-kdoc Phase C pipeline broke.`,
    );
    process.exit(1);
}

// ---------------------------------------------------------------
// Source-link freshness - every {@link https://github.com/.../blob/<sha>/...}
// must point at the currently checked-out LB sha (or be sha-less, if
// references/liquidbounce isn't a git checkout).
// ---------------------------------------------------------------
const lbDir = resolve(packageRoot, "../../references/liquidbounce");
let expectedSha = null;
if (existsSync(resolve(lbDir, ".git"))) {
    try {
        expectedSha = execSync(`git -C "${lbDir}" rev-parse HEAD`, { stdio: ["ignore", "pipe", "ignore"] })
            .toString().trim();
    } catch { /* ignore */ }
}
if (expectedSha) {
    const allFiles = walkDir(resolve(packageRoot, "types"));
    const re = /github\.com\/CCBlueX\/LiquidBounce\/blob\/([0-9a-f]{40})\//g;
    const staleByFile = new Map();
    for (const f of allFiles) {
        const raw = readFileSync(f, "utf8");
        let m;
        const stale = new Set();
        while ((m = re.exec(raw)) !== null) {
            if (m[1] !== expectedSha) stale.add(m[1]);
        }
        if (stale.size) staleByFile.set(f, stale);
    }
    if (staleByFile.size) {
        console.error(`\nFAIL: stale Source: permalinks in ${staleByFile.size} files (expected sha ${expectedSha.slice(0, 12)}):`);
        let shown = 0;
        for (const [f, shas] of staleByFile) {
            console.error(`  ${f.replace(packageRoot, ".")} -> ${[...shas].map((s) => s.slice(0, 12)).join(", ")}`);
            if (++shown >= 5) { console.error(`  ... ${staleByFile.size - shown} more`); break; }
        }
        console.error(`\nRun: python3 tools/regen/apply-kdoc.py packages/script-api-types tools/kdoc-extractor/manifest.json`);
        process.exit(1);
    }
    console.log(`OK: all Source: permalinks pinned to ${expectedSha.slice(0, 12)}`);
} else {
    console.log("(skipped permalink freshness check - references/liquidbounce is not a git checkout)");
}
