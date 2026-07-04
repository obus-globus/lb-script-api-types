// Smoke runner for script-setting-factories.test.ts - verifies T-6 declarations
// (Java.type, Polyglot.import/export, print, load, Graal, ...) compile and
// reject mis-uses.
//
// Run: node packages/script-api-types/__smoke/run-script-setting-factories.mjs

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

const smokeFile = resolve(__dirname, "script-setting-factories.test.ts");
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
            : null;
        console.error(
            `  ${d.file.fileName}:${pos ? pos.line + 1 : "?"}:${pos ? pos.character + 1 : "?"} TS${d.code}: ${msg}`,
        );
    }
    ok = false;
}

const outOfTree = all.length - ours.length;
console.log(`smoke: ${ours.length} in-file diagnostic(s), ${outOfTree} out-of-tree (informational)`);

if (!ok) process.exit(1);
console.log(
    "OK: script-setting-factories.test.ts - ScriptSetting factories typed correctly",
);
