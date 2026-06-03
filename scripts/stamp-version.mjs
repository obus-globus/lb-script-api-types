// Stamp typings/package.json with a version that LINKS to the LiquidBounce build
// the types were generated from. Derives everything from references/liquidbounce
// (the LB source checkout at PINNED_SHA):
//
//   version            = <lb mod_version>   (e.g. 0.38.1) — the npm version IS the
//                        LiquidBounce version, so one published version == one LB
//                        release (clean for `npm view`/resolution; no build-meta).
//   liquidbounce { }   = { version, minecraft, commit, ref } provenance block —
//                        the exact LB commit + MC version live here (npm-safe
//                        custom metadata), surfaced via `npm view <pkg> liquidbounce`.
//
// Usage: node scripts/stamp-version.mjs            (stamp from the checkout)
//        node scripts/stamp-version.mjs --check     (print, don't write)
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const LB = resolve(root, "references/liquidbounce");
const check = process.argv.includes("--check");

if (!existsSync(resolve(LB, "gradle.properties"))) {
    console.error(`references/liquidbounce not found — run ./fetch-references.sh first (looked in ${LB}).`);
    process.exit(1);
}

const prop = (file, key) => {
    const m = readFileSync(resolve(LB, file), "utf8").match(new RegExp(`^\\s*${key}\\s*=\\s*"?([^"\\n]+)"?`, "m"));
    return m ? m[1].trim() : null;
};

const modVersion = prop("gradle.properties", "mod_version");
const minecraft = prop("gradle/libs.versions.toml", "minecraft");
if (!modVersion) { console.error("could not read mod_version from LB gradle.properties"); process.exit(1); }

const sha = execFileSync("git", ["-C", LB, "rev-parse", "HEAD"], { encoding: "utf8" }).trim();
const sha7 = sha.slice(0, 9);
let ref = sha7;
try { ref = execFileSync("git", ["-C", LB, "describe", "--tags", "--always"], { encoding: "utf8" }).trim(); } catch { /* no tags */ }

// The npm version is exactly LB's mod_version (one publish per LB release — see
// docs/versioning.md). mod_version must be a clean semver core.
if (!/^\d+\.\d+\.\d+$/.test(modVersion)) {
    console.error(`LB mod_version "${modVersion}" is not a clean MAJOR.MINOR.PATCH; adjust the scheme in stamp-version.mjs.`);
    process.exit(1);
}
const version = modVersion;

const pkgPath = resolve(root, "typings/package.json");
const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
const next = {
    ...pkg,
    version,
    liquidbounce: { version: modVersion, minecraft: minecraft ?? null, commit: sha, ref },
};

console.log(`version:     ${version}`);
console.log(`liquidbounce ${JSON.stringify(next.liquidbounce)}`);
if (check) process.exit(0);

if (pkg.version === version && JSON.stringify(pkg.liquidbounce) === JSON.stringify(next.liquidbounce)) {
    console.log("typings/package.json already up to date.");
} else {
    writeFileSync(pkgPath, JSON.stringify(next, null, 2) + "\n");
    console.log("stamped typings/package.json.");
}
