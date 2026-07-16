# Versioning & releases

The package version is **`<lb-major>.<lb-minor>.<lb-patch*1000 + scriptBuild>`**:

```
@wunk/lb-script-api-types@0.38.1005
                                 ^^ ^^^
                                 |  |  our 6th script-api build (build 5) for LB 0.38.1
                                 |  LiquidBounce's own patch (0.38.1)
                                 LiquidBounce release line (LB 0.38.x)
```

semver only allows three numeric components (`MAJOR.MINOR.PATCH`), so the PATCH
slot packs **two** numbers with no extra dot:

- **`major.minor` track the LiquidBounce release line.** LB 0.38.x maps to our
  `0.38.*`, LB 0.39.x to `0.39.*`. So `^0.38.0` resolves to every type build we
  ship for LB 0.38 and stops before 0.39 (which may bring breaking API changes).
- **The PATCH slot = `lbPatch*1000 + scriptBuild`.**
  - `lbPatch` is LiquidBounce's own patch (the `.1` in LB 0.38.1), in the high digits.
  - `scriptBuild` is our type-only build counter, in the low 3 digits - it lets us
    ship generator fixes, more docs, or recovered names for the *same* LB build.

  Read it back by splitting off the last 3 digits: `0.38.1005` -> LB **0.38.1**,
  script build **5**; `0.38.2000` -> LB **0.38.2**, script build **0**.
- **`liquidbounce` block** carries the exact LB build (including LB's own patch /
  git-describe), Minecraft version, commit, and ref:
  ```jsonc
  "liquidbounce": {
    "version": "0.38.1",        // LB mod_version (git-describe)
    "minecraft": "26.2",
    "commit": "e73028e2d505b1129c66eaed525374f04a646764",
    "ref": "v0.38.0-83-ge73028e2d"
  }
  ```
  Surface it with `npm view @wunk/lb-script-api-types liquidbounce`.

> Ordering is preserved: `0.38.1000 < 0.38.1001 < 0.38.2000`, and any encoded
> build sorts above the old pure-iteration versions (`0.38.13 < 0.38.1000`), so
> npm's `latest` always advances to the newest LB patch + newest build.

## Pinning a LiquidBounce line

Pin a LiquidBounce line with a semver range:

```bash
npm i @wunk/lb-script-api-types@^0.38.0   # newest types for the LB 0.38 line
npm i @wunk/lb-script-api-types           # newest overall (latest)
```

`^0.38.0` resolves to the newest `0.38.x` (highest LB patch + highest build) and
stops before `0.39`, so it keeps you on your LiquidBounce line while still picking
up type-only builds. To pin a single LB patch, range on the encoded slot - e.g.
LB 0.38.1 only: `">=0.38.1000 <0.38.2000"`.

## How the version is computed

`scripts/stamp-version.mjs` (run at the end of every `run-regen.sh`) owns the
whole version and refreshes the `liquidbounce` provenance. There is **no manual
`npm version` bump** - the number is fully derived:

- `major.minor.lbPatch` come from LB's `mod_version` in the checked-out source.
- `scriptBuild` is **derived from the npm registry**: it queries the published
  versions for this exact LB `major.minor.patch` and uses `(highest build + 1)`,
  or `0` if none exist yet. Because it reads the registry rather than a local
  counter, it can never desync or collide - the next build is always free.
- **Idempotent:** if the currently-stamped `liquidbounce.commit` equals the LB
  checkout, the version is left unchanged (a re-stamp of the same build keeps its
  number). Only a *new* LB commit gets a freshly-derived version.

```bash
node scripts/stamp-version.mjs           # stamp (derive version, refresh provenance)
node scripts/stamp-version.mjs --check    # print, don't write
```

(Requires network access to the npm registry to read the published version list;
it fails closed if the registry is unreachable for a new commit.)

## Release flows

Publishing is authenticated by npm **OIDC trusted publishing** (no long-lived
token): a GitHub Release fires `.github/workflows/npm-publish.yml`, which
`npm publish`es the `typings/` package. Because the version is already final
after regen, releasing is just tag -> GitHub Release; no version bump step.

**A. Automatic (daily auto-regen).** On a clean regen (regen step + gate +
canary + sanity + generator tests all pass, MC version unchanged, and the
`AUTO_RELEASE` repo var enabled), `.github/workflows/check-regen.yml` reads the
stamped version, commits, tags `v<version>`, creates the Release, and dispatches
the publish - all unattended. Anything less than all-clean routes to a review
branch instead.

**B. Manual / human-reviewed.** When a regen routes to a review branch, merge it,
then cut the release for the already-stamped version with the one human command:
```bash
# (only if changing the target build: edit PINNED_SHA in tools/regen-types.sh,
#  then ./fetch-references.sh && ./run-regen.sh and merge the regen first)
npm run release:dry   # preflights: clean main, typecheck, canary, tag/npm guards
npm run release       # scripts/cut-release.sh: tag -> GitHub Release -> CI publish
```
`cut-release.sh` re-runs the gates and refuses duplicate tags/versions - do not
substitute raw `git tag` + `gh release create`, which skips all of that.

The publish workflow is **idempotent**: it skips if that exact version is already
on npm, so re-running a release is safe.

## Policy & edge cases

- **The version is derived, not chosen.** Every regen against a new LB commit
  produces the next free build automatically; you don't pick a number.
- **Same LB build, type-only improvement.** Regenerating the same LB commit keeps
  the version while it is still unpublished (idempotent re-stamps within one
  release cycle). Once that version is on the registry, the next stamp for the
  same commit **re-derives** the next free script build - this is exactly what
  the scriptBuild digits are for (shipping generator fixes for one LB build)
  and what prevents a branch from stranding on an already-taken number.
- **LB ships a real patch tag (e.g. v0.38.0 -> v0.38.1).** Both fold into our
  `0.38.*` line but land in distinct encoded ranges (`0.38.0xxx` vs `0.38.1xxx`);
  the exact build is always in the `liquidbounce` block.
- **Build overflow.** 3 digits allow up to 1000 script builds per single LB patch
  (0.38.x needed ~13 total). Beyond that it would carry into the LB-patch digits -
  not a real-world concern.
- **Pre-1.0 semver.** We stay on `0.x` while LB does; npm treats `^0.38.0` as
  "lock the minor", which is exactly the LB-line pinning we want. If LB reaches
  `1.0`, we follow (`1.0.0`).
- **`access`** is `public` (`publishConfig.access` in `typings/package.json`).
