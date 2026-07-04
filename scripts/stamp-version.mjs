// Stamp typings/package.json with a version that LINKS to the LiquidBounce build
// the types were generated from. Derives everything from references/liquidbounce
// (the LB source checkout at PINNED_SHA).
//
// Versioning scheme (see docs/versioning.md):
//
//   version          = <lb-major>.<lb-minor>.<lb-patch * 1000 + scriptBuild>
//                      major.minor track the LiquidBounce release line (LB
//                      0.38.x -> 0.38.*). The PATCH slot encodes TWO numbers with
//                      no extra dot (semver only allows three components):
//                        - LB's own patch in the high digits (* 1000), and
//                        - OUR script-api build in the low 3 digits.
//                      So `0.38.1005` reads as "LB 0.38.1, script build 5", and
//                      `0.38.2000` as "LB 0.38.2, script build 0". `^0.38.0`
//                      still resolves every type build for the 0.38 line and
//                      picks the highest (newest LB patch + newest build).
//   liquidbounce { } = { version, minecraft, commit, ref } provenance - the EXACT
//                      LB build (incl. its own git-describe) lives here too,
//                      surfaced via `npm view <pkg> liquidbounce`.
//
// The scriptBuild is DERIVED FROM THE NPM REGISTRY, not a local counter: we query
// the published versions for this exact LB major.minor.patch and use (highest
// build + 1). This is deterministic from the registry, so it can never desync or
// collide the way a hand-maintained counter can. When the LB commit is unchanged
// we keep whatever version this build already carries (idempotent re-stamps).
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

// Digits reserved for the script build in the PATCH slot. 3 digits => up to 1000
// script builds per single LB patch before it would overflow into the LB-patch
// digits (far more than we'll ever need - 0.38.x needed ~13 total).
const BUILD_MULT = 1000;

if (!existsSync(resolve(LB, "gradle.properties"))) {
    console.error(`references/liquidbounce not found - run ./fetch-references.sh first (looked in ${LB}).`);
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
const shortSha = sha.slice(0, 9);
let ref = shortSha;
try { ref = execFileSync("git", ["-C", LB, "describe", "--tags", "--always"], { encoding: "utf8" }).trim(); } catch { /* no tags */ }

// LB's mod_version is a git-describe core like `0.38.1` (= tag v0.38.0 + commits).
// Accept an optional `v` prefix and a 2-component (`0.38`) or 3-component version;
// a missing patch defaults to 0.
const m = /^v?(\d+)\.(\d+)(?:\.(\d+))?/.exec(modVersion);
if (!m) {
    console.error(`LB mod_version "${modVersion}" has no MAJOR.MINOR prefix; adjust stamp-version.mjs.`);
    process.exit(1);
}
const lbMajor = +m[1];
const lbMinor = +m[2];
const lbPatch = m[3] ? +m[3] : 0;
const lbLine = `${lbMajor}.${lbMinor}`; // e.g. "0.38"

const pkgPath = resolve(root, "typings/package.json");
const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));

// Query the registry for every published version, so we can pick the next free
// script build for this exact LB major.minor.patch. Returns null if the version
// list can't be read (offline / registry error) so the caller can fail closed;
// an empty array means the package exists with no versions / is brand new.
function publishedVersions(name) {
    try {
        const out = execFileSync("npm", ["view", name, "versions", "--json"], {
            encoding: "utf8", stdio: ["ignore", "pipe", "ignore"],
        }).trim();
        if (!out) return [];
        const parsed = JSON.parse(out);
        return Array.isArray(parsed) ? parsed : [parsed];
    } catch (e) {
        // A brand-new package 404s ("code E404" / "Not Found") - that's "no
        // versions", not a registry failure. Anything else is a real error.
        const msg = `${e.stdout || ""}${e.stderr || ""}${e.message || ""}`;
        if (/E404|404 Not Found|not found/i.test(msg)) return [];
        return null;
    }
}

// The build number for this LB patch = (highest published build for this exact
// major.minor.patch) + 1, or 0 if none published yet.
function nextScriptBuild(versions) {
    const builds = versions
        .map((v) => /^(\d+)\.(\d+)\.(\d+)/.exec(v))
        .filter(Boolean)
        .filter((mm) => +mm[1] === lbMajor && +mm[2] === lbMinor && Math.floor(+mm[3] / BUILD_MULT) === lbPatch)
        .map((mm) => +mm[3] % BUILD_MULT);
    return builds.length ? Math.max(...builds) + 1 : 0;
}

// Idempotent: if this exact LB commit is already stamped, keep its version - we
// don't reassign a version to a build that already has one (and never re-derive
// for a re-run of the same commit). Only a NEW commit gets a fresh version.
let version;
if (pkg.liquidbounce && pkg.liquidbounce.commit === sha && /^\d+\.\d+\.\d+/.test(pkg.version || "")) {
    version = pkg.version;
    console.log(`version:     ${version} (unchanged - same LB commit already stamped)`);
} else {
    const versions = publishedVersions(pkg.name);
    if (versions === null) {
        console.error(
            `could not read published versions for ${pkg.name} from the npm registry ` +
            `(needed to derive the next script build). Check network/registry access.`);
        process.exit(1);
    }
    const build = nextScriptBuild(versions);
    version = `${lbLine}.${lbPatch * BUILD_MULT + build}`;
    console.log(`version:     ${version}  (LB ${lbMajor}.${lbMinor}.${lbPatch}, script build ${build})`);
}

const next = {
    ...pkg,
    version,
    liquidbounce: { version: modVersion, minecraft: minecraft ?? null, commit: sha, ref },
};

console.log(`liquidbounce ${JSON.stringify(next.liquidbounce)}`);
if (check) process.exit(0);

if (pkg.version === version && JSON.stringify(pkg.liquidbounce) === JSON.stringify(next.liquidbounce)) {
    console.log("typings/package.json already up to date.");
} else {
    writeFileSync(pkgPath, JSON.stringify(next, null, 2) + "\n");
    console.log("stamped typings/package.json.");
}
