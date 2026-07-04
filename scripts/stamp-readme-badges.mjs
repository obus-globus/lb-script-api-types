// Stamp the build-provenance badge block into the READMEs from the AUTHORITATIVE
// source: typings/package.json's `liquidbounce` block (which stamp-version.mjs
// derives from the LB checkout during regen). Decoupled from the live
// references/ checkout, so it always matches the committed/published build and is
// safe to run any time. Rewrites the block between the
// `<!-- lb-badges:start -->` / `<!-- lb-badges:end -->` markers in every README.
//
// The LiquidBounce + "LB build" badges LINK to the exact LB commit the types were
// generated from (github.com/CCBlueX/LiquidBounce/commit/<sha>), so the badge
// always points at the LiquidBounce repo AT THE TIME OF THAT COMMIT.
//
// Run: node scripts/stamp-readme-badges.mjs   (invoked by run-regen.sh after
//      stamp-version.mjs). No-op if a README lacks the markers.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pkgPath = resolve(root, "typings/package.json");
const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
const lb = pkg.liquidbounce || {};
const NPM = pkg.name;
const LB_REPO = "https://github.com/CCBlueX/LiquidBounce";

// shields.io badge label/value text escaping: `-` -> `--`, `_` -> `__`, space -> `_`.
const esc = (s) => String(s ?? "").replace(/-/g, "--").replace(/_/g, "__").replace(/ /g, "_");

const commitUrl = lb.commit ? `${LB_REPO}/commit/${lb.commit}` : LB_REPO;
const npmUrl = `https://www.npmjs.com/package/${NPM}`;

const badges = [
    `[![npm](https://img.shields.io/npm/v/${NPM}?label=npm&color=cb3837)](${npmUrl})`,
    `[![Minecraft](https://img.shields.io/badge/Minecraft-${esc(lb.minecraft)}-2ea44f)](${npmUrl})`,
    `[![LiquidBounce](https://img.shields.io/badge/LiquidBounce-${esc(lb.version)}-5865f2)](${commitUrl})`,
    `[![LB build](https://img.shields.io/badge/LB_build-${esc(lb.ref)}-555)](${commitUrl})`,
].join("\n");

const START = "<!-- lb-badges:start -->";
const END = "<!-- lb-badges:end -->";
const block = `${START}\n${badges}\n${END}`;
const re = new RegExp(`${START}[\\s\\S]*?${END}`);

let changed = 0;
for (const rel of ["typings/README.md", "README.md"]) {
    const p = resolve(root, rel);
    if (!existsSync(p)) continue;
    const cur = readFileSync(p, "utf8");
    if (!re.test(cur)) { console.error(`stamp-readme-badges: no markers in ${rel} - skipped`); continue; }
    const next = cur.replace(re, block);
    if (next !== cur) { writeFileSync(p, next); changed++; console.error(`stamp-readme-badges: updated ${rel}`); }
}
console.error(`stamp-readme-badges: LB commit ${lb.commit?.slice(0, 9) ?? "?"} -> ${commitUrl}; ${changed} README(s) changed.`);
