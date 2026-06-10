// typecheck.mjs — the CI typecheck gate for @wunk/lb-script-api-types.
//
// Four independent checks, all run; the process fails if any fails.
//
//   Part A — surface smoke tests.
//     Compiles every typings/__smoke/*.test.ts and asserts ZERO diagnostics
//     originate in the test file. Because the tests use `@ts-expect-error`,
//     a *missing* error surfaces as TS2578 ("unused @ts-expect-error") IN the
//     file — so "zero in-file diagnostics" simultaneously verifies the
//     positive type assertions hold AND every negative assertion still errors.
//     This is the high-value check: it exercises the real script-author
//     surface (typed on() overloads, ScriptSetting factories, DSL receivers,
//     GraalVM intrinsics, registerScript, registerMode) end to end.
//
//   Part B — whole-package syntactic ratchet.
//     Parses EVERY shipped .d.ts (types/ + ambient/ + augmentations/) and
//     collects *syntactic* diagnostics (parse errors — no type checking).
//     Frozen in __smoke/syntax-baseline.json (currently EMPTY — the
//     sanitize-invalid-dts post-patch keeps the tree parse-clean); the gate
//     fails on NEW parse errors anywhere in the package.
//
//   Part C — relative-import resolution. Zero tolerance.
//     Every `from './…'` specifier in the package must resolve to a real
//     file. A broken relative import is invisible under consumers'
//     skipLibCheck and silently degrades the imported type to `any` (this is
//     how the TitleEvent payloads and localStorage shipped untyped).
//
//   Part D — semantic surface check (skipLibCheck:false).
//     Type-checks the script-author surface (ambient, augmentations, script
//     bindings, event payloads) with full semantics. Errors IN those files
//     are ratcheted as exact entries; errors in transitively-loaded generated
//     files (the kotlin.*-leak long tail) are ratcheted as per-TS-code counts
//     in __smoke/semantic-baseline.json — the debt can only shrink.
//
// Run:  npm run typecheck                  (from repo root)
//       npm run typecheck:update-baseline  (re-freeze the B + D baselines)

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
// --tighten: like a normal check (growth still FAILS), but when debt shrank,
// rewrite the baselines to the smaller current set. Safe to run
// unconditionally after a regen — unlike --update-baseline, it can never
// freeze a regression in.
const TIGHTEN = process.argv.includes("--tighten");

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
    if (parsed.errors && parsed.errors.length) {
        console.error(`  FAIL — ${parsed.errors.length} tsconfig error(s) (gate cannot trust the result):`);
        for (const d of parsed.errors) console.error(`      ${fmt(d)}`);
        return { ok: false, ran: 0 };
    }

    const tests = readdirSync(SMOKE_DIR)
        .filter((f) => f.endsWith(".test.ts"))
        .sort()
        .map((f) => path.join(SMOKE_DIR, f));

    // A green no-op gate would be worse than a red one: if the tests ever stop
    // matching, fail loudly rather than report "0 clean".
    if (tests.length === 0) {
        console.error(`  FAIL — no *.test.ts found in ${path.relative(REPO, SMOKE_DIR)}`);
        return { ok: false, ran: 0 };
    }

    // One program over all test files — they're independent modules, so a
    // diagnostic is attributed to whichever test file it lives in.
    const program = ts.createProgram({ rootNames: tests, options: parsed.options });
    const all = ts.getPreEmitDiagnostics(program);

    let ok = true;

    // Fileless diagnostics (bad tsconfig option/lib, etc.) aren't attributable
    // to a test file but mean the program never type-checked correctly — they'd
    // otherwise be silently dropped and the gate would pass green.
    const fileless = all.filter((d) => !d.file);
    if (fileless.length) {
        ok = false;
        console.error(`  FAIL — ${fileless.length} project-level diagnostic(s) (gate cannot trust the result):`);
        for (const d of fileless) console.error(`      ${fmt(d)}`);
    }

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
// Parts B + C — whole-package syntactic ratchet + import-resolution scan.
// One pass: every shipped .d.ts (types/ + ambient/ + augmentations/) is read
// once, parsed for syntax errors (B) and its relative import specifiers
// resolved against the filesystem (C). Part B is baselined (ratchet); Part C
// is zero-tolerance — a broken relative import silently degrades the imported
// type to `any` for every skipLibCheck consumer, which is how the TitleEvent
// payloads and localStorage shipped untyped.
// ---------------------------------------------------------------------------
// Both static `from "..."` and dynamic-import TYPE specifiers
// (`typeof import("...")` — the Java.type registries are built from these).
const IMPORT_SPEC = /(?:from\s+|import\()\s*['"]([^'"]+)['"]/g;

function partBC() {
    const roots = [TYPES_ROOT, path.join(TYPINGS, "ambient"), path.join(TYPINGS, "augmentations"),
        path.join(TYPINGS, "registry-lb"), path.join(TYPINGS, "registry-full")]
        .filter((d) => existsSync(d));
    const files = roots.flatMap((d) => walk(d, (p) => p.endsWith(".d.ts")));

    const current = new Set();   // syntax errors, "rel:line:TScode"
    const brokenImports = [];    // { file, spec }
    for (const file of files) {
        const text = readFileSync(file, "utf8");

        // C: resolve every relative specifier.
        for (const m of text.matchAll(IMPORT_SPEC)) {
            const spec = m[1];
            if (!spec.startsWith(".")) continue;
            const base = path.resolve(path.dirname(file), spec);
            const hit = [base, `${base}.d.ts`, `${base}.ts`, path.join(base, "index.d.ts")]
                .some((p) => existsSync(p) && statSync(p).isFile());
            if (!hit) brokenImports.push({ file: path.relative(TYPINGS, file), spec });
        }

        // B: parse-only diagnostics (no module resolution, no type checking).
        const sf = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, false, ts.ScriptKind.TS);
        for (const d of sf.parseDiagnostics) {
            const lc = sf.getLineAndCharacterOfPosition(d.start);
            const rel = path.relative(TYPINGS, file).split(path.sep).join("/");
            current.add(`${rel}:${lc.line + 1}:TS${d.code}`);
        }
    }

    const sorted = [...current].sort();
    let ok = true;

    if (UPDATE_BASELINE) {
        writeFileSync(BASELINE, JSON.stringify(sorted, null, 2) + "\n");
        console.error(`  baseline updated: ${sorted.length} known parse error(s) -> ${path.relative(REPO, BASELINE)}`);
    } else {
        const baseline = existsSync(BASELINE)
            ? new Set(JSON.parse(readFileSync(BASELINE, "utf8")))
            : new Set();
        const novel = sorted.filter((e) => !baseline.has(e));
        const fixed = [...baseline].filter((e) => !current.has(e));
        if (novel.length) {
            ok = false;
            console.error(`  FAIL — ${novel.length} NEW parse error(s) in the package (${files.length} files):`);
            for (const e of novel.slice(0, 40)) console.error(`      ${e}`);
            console.error(`  (if intentional, re-freeze with: npm run typecheck:update-baseline)`);
        } else {
            console.error(`  ok   syntax: ${files.length} files, ${current.size} known parse error(s), 0 new`);
        }
        if (fixed.length) {
            if (TIGHTEN && !novel.length) {
                writeFileSync(BASELINE, JSON.stringify(sorted, null, 2) + "\n");
                console.error(`  tightened — ${fixed.length} fixed entr(ies) removed from the syntax baseline`);
            } else {
                console.error(`  note — ${fixed.length} baselined error(s) no longer present; ` +
                    `tighten with: npm run typecheck:update-baseline`);
            }
        }
    }

    if (brokenImports.length) {
        ok = false;
        console.error(`  FAIL — ${brokenImports.length} unresolvable relative import(s):`);
        for (const b of brokenImports.slice(0, 40)) console.error(`      ${b.file} -> ${b.spec}`);
    } else {
        console.error(`  ok   imports: all relative specifiers resolve`);
    }
    return { ok };
}

// ---------------------------------------------------------------------------
// Part D — semantic check (skipLibCheck:false) of the script-author surface.
// Roots: ambient + augmentations + script bindings + event payloads. Errors
// located IN those surface files are ratcheted as exact entries (target:
// empty); errors in transitively-loaded files (the long tail of generated MC/
// third-party types — kotlin.* leaks etc.) are ratcheted as per-TS-code
// counts so the debt can only shrink. Both live in semantic-baseline.json.
// ---------------------------------------------------------------------------
const SEMANTIC_BASELINE = path.join(SMOKE_DIR, "semantic-baseline.json");
const SURFACE_DIRS = [
    path.join(TYPINGS, "ambient"),
    path.join(TYPINGS, "augmentations"),
    path.join(LB_ROOT, "script"),
    path.join(LB_ROOT, "event", "events"),
];

function partD() {
    const rootNames = SURFACE_DIRS.filter((d) => existsSync(d))
        .flatMap((d) => walk(d, (p) => p.endsWith(".d.ts")));
    if (rootNames.length === 0) {
        console.error("  (skip — no surface files found)");
        return { ok: true };
    }
    const program = ts.createProgram({
        rootNames,
        options: {
            noEmit: true,
            skipLibCheck: false,
            strict: true,
            target: ts.ScriptTarget.ES2020,
            lib: ["lib.es2023.d.ts"],
            forceConsistentCasingInFileNames: true,
        },
    });
    const all = ts.getPreEmitDiagnostics(program)
        .filter((d) => d.category === ts.DiagnosticCategory.Error);

    const surface = [];                 // exact entries in surface files
    const transitive = new Map();       // TS code -> count elsewhere
    const isSurface = (f) => SURFACE_DIRS.some((d) => f.startsWith(d + path.sep));
    for (const d of all) {
        if (!d.file) { surface.push(`(project):TS${d.code}: ${ts.flattenDiagnosticMessageText(d.messageText, " ")}`); continue; }
        const file = path.resolve(d.file.fileName);
        if (isSurface(file)) {
            const lc = d.file.getLineAndCharacterOfPosition(d.start);
            const rel = path.relative(TYPINGS, file).split(path.sep).join("/");
            surface.push(`${rel}:${lc.line + 1}:TS${d.code}`);
        } else {
            const key = `TS${d.code}`;
            transitive.set(key, (transitive.get(key) || 0) + 1);
        }
    }
    surface.sort();
    const transObj = Object.fromEntries([...transitive.entries()].sort());

    if (UPDATE_BASELINE) {
        writeFileSync(SEMANTIC_BASELINE,
            JSON.stringify({ surface, transitive: transObj }, null, 2) + "\n");
        console.error(`  baseline updated: ${surface.length} surface entr(ies), ` +
            `${Object.keys(transObj).length} transitive code(s) -> ${path.relative(REPO, SEMANTIC_BASELINE)}`);
        return { ok: true };
    }

    const baseline = existsSync(SEMANTIC_BASELINE)
        ? JSON.parse(readFileSync(SEMANTIC_BASELINE, "utf8"))
        : { surface: [], transitive: {} };
    const baseSurface = new Set(baseline.surface || []);
    let ok = true;

    const novel = surface.filter((e) => !baseSurface.has(e));
    if (novel.length) {
        ok = false;
        console.error(`  FAIL — ${novel.length} NEW semantic error(s) in surface files:`);
        for (const e of novel.slice(0, 40)) console.error(`      ${e}`);
    } else {
        console.error(`  ok   surface: ${surface.length} known error(s), 0 new (roots: ${rootNames.length} files)`);
    }

    const regressions = [];
    for (const [code, n] of Object.entries(transObj)) {
        const allowed = (baseline.transitive || {})[code] || 0;
        if (n > allowed) regressions.push(`${code}: ${n} > baseline ${allowed}`);
    }
    if (regressions.length) {
        ok = false;
        console.error(`  FAIL — transitive semantic debt grew:`);
        for (const r of regressions) console.error(`      ${r}`);
        console.error(`  (if intentional, re-freeze with: npm run typecheck:update-baseline)`);
    } else {
        const total = Object.values(transObj).reduce((a, b) => a + b, 0);
        const allowedTotal = Object.values(baseline.transitive || {}).reduce((a, b) => a + b, 0);
        console.error(`  ok   transitive: ${total} error(s) within baseline (${allowedTotal} allowed)`);
        if (total < allowedTotal) {
            console.error(`  note — debt shrank; tighten with: npm run typecheck:update-baseline`);
        }
    }

    // Shrink-only rewrite: only when NOTHING grew in this part.
    if (TIGHTEN && ok) {
        const next = JSON.stringify({ surface, transitive: transObj }, null, 2) + "\n";
        const prev = existsSync(SEMANTIC_BASELINE) ? readFileSync(SEMANTIC_BASELINE, "utf8") : "";
        if (next !== prev) {
            writeFileSync(SEMANTIC_BASELINE, next);
            console.error(`  tightened — semantic baseline rewritten to the smaller current set`);
        }
    }
    return { ok };
}

// ---------------------------------------------------------------------------
console.error("== Part A: surface smoke tests ==");
const a = partA();
console.error("\n== Parts B+C: whole-package syntax ratchet + import resolution ==");
const bc = partBC();
console.error("\n== Part D: semantic surface check (skipLibCheck:false) ==");
const d = partD();

console.error("");
if (a.ok && bc.ok && d.ok) {
    console.error(`PASS — ${a.ran} smoke test(s) clean, syntax/imports/semantics green.`);
    process.exit(0);
}
console.error("FAIL — typecheck gate did not pass (see above).");
process.exit(1);
