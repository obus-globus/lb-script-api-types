// typecheck.mjs — the CI typecheck gate for @obus-globus/lb-script-api-types.
//
// Two independent checks, both run; the process fails if either fails.
//
//   Part A — surface smoke tests.
//     Compiles every typings/__smoke/*.test.ts and asserts ZERO diagnostics
//     originate in the test file. Because the tests use `@ts-expect-error`,
//     a *missing* error surfaces as TS2578 ("unused @ts-expect-error") IN the
//     file — so "zero in-file diagnostics" simultaneously verifies the
//     positive type assertions hold AND every negative assertion still errors.
//     This is the high-value check: it exercises the real script-author
//     surface (typed on() overloads, ScriptSetting factories, DSL receivers,
//     GraalVM intrinsics, registerScript) end to end.
//
//   Part B — LiquidBounce-namespace syntactic ratchet.
//     Parses every types/net/ccbluex/liquidbounce/**.d.ts and collects
//     *syntactic* diagnostics (parse errors — fast, no type-checking). The
//     current known set is frozen in __smoke/syntax-baseline.json; the gate
//     fails only on NEW parse errors. This catches the class of generator bug
//     where ts-generator emits invalid TS for a declaration (e.g. the
//     inline-class-mangled suspend handlers) without blocking on the
//     already-known ones. `package-info.d.ts` is excluded — it is a Java
//     package descriptor ts-generator can't represent and no script imports.
//
// Run:  npm run typecheck                  (from repo root)
//       npm run typecheck:update-baseline  (re-freeze Part B baseline)

import { createRequire } from "node:module";
import { readdirSync, statSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, "..");
const require = createRequire(import.meta.url);

let ts;
try {
    ts = require(path.join(REPO, "node_modules", "typescript"));
} catch {
    console.error(
        "FAIL: typescript not installed. Run `npm install` at the repo root first.",
    );
    process.exit(2);
}

const TYPINGS = path.join(REPO, "typings");
const SMOKE_DIR = path.join(TYPINGS, "__smoke");
const TYPES_ROOT = path.join(TYPINGS, "types");
const LB_ROOT = path.join(TYPES_ROOT, "net", "ccbluex", "liquidbounce");
const BASELINE = path.join(SMOKE_DIR, "syntax-baseline.json");

const UPDATE_BASELINE = process.argv.includes("--update-baseline");

function fmt(d) {
    const msg = ts.flattenDiagnosticMessageText(d.messageText, "\n");
    if (d.file && d.start != null) {
        const lc = d.file.getLineAndCharacterOfPosition(d.start);
        return `${d.file.fileName}:${lc.line + 1}:${lc.character + 1} TS${d.code}: ${msg}`;
    }
    return `TS${d.code}: ${msg}`;
}

function walk(dir, pred, acc = []) {
    for (const e of readdirSync(dir)) {
        const p = path.join(dir, e);
        const s = statSync(p);
        if (s.isDirectory()) walk(p, pred, acc);
        else if (pred(p)) acc.push(p);
    }
    return acc;
}

// ---------------------------------------------------------------------------
// Part A — surface smoke tests
// ---------------------------------------------------------------------------
function partA() {
    const tsconfigPath = path.join(SMOKE_DIR, "tsconfig.json");
    const cfg = ts.readConfigFile(tsconfigPath, ts.sys.readFile);
    if (cfg.error) {
        console.error(ts.flattenDiagnosticMessageText(cfg.error.messageText, "\n"));
        return { ok: false, ran: 0 };
    }
    const parsed = ts.parseJsonConfigFileContent(cfg.config, ts.sys, SMOKE_DIR);

    const tests = readdirSync(SMOKE_DIR)
        .filter((f) => f.endsWith(".test.ts"))
        .sort()
        .map((f) => path.join(SMOKE_DIR, f));

    // One program over all test files — they're independent modules, so a
    // diagnostic is attributed to whichever test file it lives in.
    const program = ts.createProgram({ rootNames: tests, options: parsed.options });
    const all = ts.getPreEmitDiagnostics(program);

    let ok = true;
    for (const test of tests) {
        const mine = all.filter((d) => d.file && path.resolve(d.file.fileName) === test);
        const rel = path.relative(REPO, test);
        if (mine.length) {
            ok = false;
            console.error(`  FAIL ${rel} — ${mine.length} diagnostic(s):`);
            for (const d of mine) console.error(`      ${fmt(d)}`);
        } else {
            console.error(`  ok   ${rel}`);
        }
    }
    return { ok, ran: tests.length };
}

// ---------------------------------------------------------------------------
// Part B — LB-namespace syntactic ratchet
// ---------------------------------------------------------------------------
function partB() {
    if (!existsSync(LB_ROOT)) {
        console.error(`  (skip — ${path.relative(REPO, LB_ROOT)} not present)`);
        return { ok: true };
    }
    const files = walk(
        LB_ROOT,
        (p) => p.endsWith(".d.ts") && path.basename(p) !== "package-info.d.ts",
    );
    const program = ts.createProgram({
        rootNames: files,
        options: { noEmit: true, skipLibCheck: true },
    });

    const current = new Set();
    for (const sf of program.getSourceFiles()) {
        if (!sf.fileName.startsWith(LB_ROOT)) continue;
        for (const d of program.getSyntacticDiagnostics(sf)) {
            const lc = d.file.getLineAndCharacterOfPosition(d.start);
            const rel = path.relative(TYPES_ROOT, d.file.fileName).split(path.sep).join("/");
            current.add(`${rel}:${lc.line + 1}:TS${d.code}`);
        }
    }
    const sorted = [...current].sort();

    if (UPDATE_BASELINE) {
        writeFileSync(BASELINE, JSON.stringify(sorted, null, 2) + "\n");
        console.error(`  baseline updated: ${sorted.length} known parse error(s) -> ${path.relative(REPO, BASELINE)}`);
        return { ok: true };
    }

    const baseline = existsSync(BASELINE)
        ? new Set(JSON.parse(readFileSync(BASELINE, "utf8")))
        : new Set();

    const novel = sorted.filter((e) => !baseline.has(e));
    const fixed = [...baseline].filter((e) => !current.has(e));

    if (novel.length) {
        console.error(`  FAIL — ${novel.length} NEW parse error(s) in the LB namespace:`);
        for (const e of novel) console.error(`      ${e}`);
        console.error(`  (if intentional, re-freeze with: npm run typecheck:update-baseline)`);
    } else {
        console.error(`  ok   ${current.size} known parse error(s), 0 new`);
    }
    if (fixed.length) {
        console.error(`  note — ${fixed.length} baselined error(s) no longer present; ` +
            `tighten with: npm run typecheck:update-baseline`);
    }
    return { ok: novel.length === 0 };
}

// ---------------------------------------------------------------------------
console.error("== Part A: surface smoke tests ==");
const a = partA();
console.error("\n== Part B: LB-namespace syntactic ratchet ==");
const b = partB();

console.error("");
if (a.ok && b.ok) {
    console.error(`PASS — ${a.ran} smoke test(s) clean, no new parse errors.`);
    process.exit(0);
}
console.error("FAIL — typecheck gate did not pass (see above).");
process.exit(1);
