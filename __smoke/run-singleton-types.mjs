// Smoke runner for singleton-types.test.ts — mirrors run-setting-types.mjs
// but targets the Phase 5.3.2 singleton Collection type smoke test.
//
// Run: node packages/script-api-types/__smoke/run-singleton-types.mjs

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

const smokeFile = resolve(__dirname, "singleton-types.test.ts");
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

const outOfTree = all.length - ours.length;
console.log(`smoke: ${ours.length} in-file diagnostic(s), ${outOfTree} out-of-tree (informational)`);

if (ok) {
    console.log(
        "OK: singleton-types.test.ts compiles cleanly — moduleManager/commandManager " +
        "are properly typed, not (Object | null)[]. @ts-expect-error consumed real errors.",
    );
    process.exit(0);
} else {
    process.exit(1);
}
