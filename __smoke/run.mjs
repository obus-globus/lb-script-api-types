// Smoke runner — drives tsc programmatically, then filters diagnostics
// down to those originating in `event-narrowing.test.ts`. The wider
// `@liquidbounce-helper/script-api-types` package contains many .d.ts
// files with Java reserved-word parameter names (`var`, `function`,
// `null`) that produce TS1390/TS1442/TS1359 *syntax* errors when the
// whole tree is parsed — those aren't introduced by our augmentation
// fix and are out of scope for this gate. We only assert that:
//   1. Our smoke file itself produces zero unsuppressed diagnostics.
//   2. Both `@ts-expect-error` directives consume a real error (i.e.,
//      no TS2578 "Unused '@ts-expect-error' directive" surfaces). If
//      either pops, the augmentation cascade is silently producing
//      `any` again — that's the regression signal.
//
// Run: node packages/script-api-types/__smoke/run.mjs

import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const tsPkg = (() => {
    const candidates = [
        resolve(__dirname, "../../script-helper/node_modules/typescript"),
        resolve(__dirname, "../../../templates/script-project/node_modules/typescript"),
    ];
    for (const c of candidates) {
        try { return require(c); } catch { /* try next */ }
    }
    throw new Error("typescript not found in workspace");
})();
const ts = tsPkg;

const smokeFile = resolve(__dirname, "event-narrowing.test.ts");
const tsconfigPath = resolve(__dirname, "tsconfig.json");

const cfg = ts.readConfigFile(tsconfigPath, ts.sys.readFile);
if (cfg.error) {
    console.error(ts.flattenDiagnosticMessageText(cfg.error.messageText, "\n"));
    process.exit(2);
}
const parsed = ts.parseJsonConfigFileContent(cfg.config, ts.sys, dirname(tsconfigPath));

const program = ts.createProgram({
    rootNames: [smokeFile],
    options: parsed.options,
});

const all = ts.getPreEmitDiagnostics(program);
const ours = all.filter(
    (d) => d.file && resolve(d.file.fileName) === smokeFile,
);

let ok = true;
if (ours.length > 0) {
    console.error(`FAIL: smoke test produced ${ours.length} diagnostic(s):`);
    for (const d of ours) {
        const msg = ts.flattenDiagnosticMessageText(d.messageText, "\n");
        const pos = d.file && d.start != null
            ? d.file.getLineAndCharacterOfPosition(d.start)
            : { line: 0, character: 0 };
        console.error(
            `  ${d.file.fileName}:${pos.line + 1}:${pos.character + 1} TS${d.code}: ${msg}`,
        );
    }
    ok = false;
}

// Sanity: count out-of-tree diagnostics so we at least notice if the wider
// surface gets *worse* (a 10x explosion would suggest a regression even if
// it's "expected" syntactic noise).
const outOfTree = all.length - ours.length;
console.log(`smoke: ${ours.length} in-file diagnostic(s), ${outOfTree} out-of-tree (informational)`);

if (ok) {
    console.log(
        "OK: event-narrowing.test.ts compiles cleanly under strict mode " +
        "(positive assertions hold, both @ts-expect-error directives consumed real errors).",
    );
    process.exit(0);
} else {
    process.exit(1);
}
