// Stamp typings/package.json with a version that LINKS to the LiquidBounce build
// the types were generated from. Derives everything from references/liquidbounce
// (the LB source checkout at PINNED_SHA).
//
// Versioning scheme (see docs/versioning.md):
//
//   version          = <lb-major>.<lb-minor>.<iteration>
//                      major.minor track the LiquidBounce release line (LB
//                      0.38.x  ->  0.38.*); the PATCH is OUR own iteration
//                      counter, so we can ship type-only improvements between LB
//                      releases. `^0.38.0` resolves to every type build for LB
//                      0.38 and stops before 0.39.
//   liquidbounce { } = { version, minecraft, commit, ref } provenance — the EXACT
//                      LB build (incl. its own patch / git-describe) lives here,
//                      surfaced via `npm view <pkg> liquidbounce`.
//
// This script only keeps major.minor synced to the LB line and refreshes the
// provenance. The PATCH (iteration) is bumped by hand at release time
// (`cd typings && npm version patch`) — stamping/regen never touches it, except
// to reset it to 0 when LB advances to a new minor line.
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

// LB's mod_version is a git-describe core like `0.38.1` (= tag v0.38.0 + commits).
// The meaningful LB *line* is its major.minor (0.38); LB's own patch is noise we
// keep in the provenance block, not in our version.
const m = /^(\d+)\.(\d+)\./.exec(modVersion);
if (!m) {
    console.error(`LB mod_version "${modVersion}" has no MAJOR.MINOR prefix; adjust stamp-version.mjs.`);
    process.exit(1);
}
const lbLine = `${m[1]}.${m[2]}`; // e.g. "0.38"

const pkgPath = resolve(root, "typings/package.json");
const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));

// Keep our PATCH (iteration) if we're still on the same LB line; reset to 0 when
// LB advances a minor. The patch is otherwise owned by `npm version patch`.
let version;
const cur = /^(\d+)\.(\d+)\.(\d+)/.exec(pkg.version || "");
if (cur && `${cur[1]}.${cur[2]}` === lbLine) {
    version = `${lbLine}.${cur[3]}`;        // same LB line — preserve iteration
} else {
    version = `${lbLine}.0`;                // new LB line — reset iteration
}

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
