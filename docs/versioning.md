# Versioning & releases

The package version is **`<lb-major>.<lb-minor>.<iteration>`**:

```
@wunk/lb-script-api-types@0.38.2
                                 ^^^^  ^
                                 |     our 3rd iteration of types for the LB 0.38 line
                                 LiquidBounce release line (LB 0.38.x)
```

- **`major.minor` track the LiquidBounce release line.** LB 0.38.x maps to our
  `0.38.*`, LB 0.39.x to `0.39.*`. So `^0.38.0` resolves to every type build we
  ship for LB 0.38 and stops before 0.39 (which may bring breaking API changes).
- **`patch` is our own iteration counter.** It lets us ship type-only
  improvements (generator fixes, more docs, recovered names) *between* LB
  releases — the whole point, since LB's `mod_version` may sit still while the
  types keep improving.
- **`liquidbounce` block** carries the exact LB build (including LB's own patch /
  git-describe), Minecraft version, commit, and ref:
  ```jsonc
  "liquidbounce": {
    "version": "0.38.1",        // LB mod_version (git-describe; its patch lives HERE, not in ours)
    "minecraft": "26.1.2",
    "commit": "fac52d9c85c85141cb327e00599cdf8e0a7afc66",
    "ref": "v0.38.0-1-gfac52d9c8"
  }
  ```
  Surface it with `npm view @wunk/lb-script-api-types liquidbounce`.

> Note: our `0.38.1` (iteration 1) is **not** the same number as LB's `0.38.1`
> (`mod_version`). Ours is "the LB 0.38 line, our 2nd type build"; the exact LB
> build is always in the `liquidbounce` block. This mirrors how `@types/*`
> versions track an upstream (`@types/react@18.2.45` → React 18.2, types iter 45).

## Pinning a LiquidBounce line

Pin a LiquidBounce line with a semver range:

```bash
npm i @wunk/lb-script-api-types@^0.38.0   # newest types for the LB 0.38 line
npm i @wunk/lb-script-api-types           # newest overall (latest)
```

`^0.38.0` resolves to the newest `0.38.x` and stops before `0.39`, so it keeps you
on your LiquidBounce line while still picking up type-only iterations.

## How the version is maintained

`scripts/stamp-version.mjs` (run at the end of every `run-regen.sh`) keeps
`major.minor` synced to the LB line and refreshes the `liquidbounce` provenance.
It **does not** touch the patch, except to reset it to `0` when LB advances to a
new minor line:

- same LB line  -> version unchanged (the patch is yours to bump)
- new LB minor  -> reset to `<lb-major>.<lb-minor>.0`

```bash
node scripts/stamp-version.mjs           # stamp (keeps patch, refreshes provenance)
node scripts/stamp-version.mjs --check    # print, don't write
```

## Release flows

Publishing is authenticated by npm **OIDC trusted publishing** (no long-lived
token): a GitHub Release fires `.github/workflows/npm-publish.yml`, which
`npm publish`es the `typings/` package. The daily auto-regen does the same
automatically on a clean regen. Either way the release/tag drive the changelog.

**A. Type-only improvement (LB unchanged).** Bump the iteration by hand and cut a
release:
```bash
cd typings && npm version patch          # 0.38.1 -> 0.38.2, creates a git tag
git push --follow-tags
# create a GitHub Release for the tag -> npm-publish.yml publishes
```

**B. New LiquidBounce build.** Bump the pin and regenerate; the stamp resets the
version when LB's minor advanced and always refreshes provenance:
```bash
# edit PINNED_SHA in tools/regen-types.sh to the target LB build
./fetch-references.sh && ./run-regen.sh   # regenerates types + stamps the version
cd typings && npm version patch           # only if same LB line and you want a new iter
git commit -am "regen for LB <x>" && git push --follow-tags
# GitHub Release -> npm-publish.yml publishes
```

The publish workflow is **idempotent**: it skips if that exact version is already
on npm, so re-running a release is safe.

## Policy & edge cases

- **One npm version per release you choose to cut** — not one per regen. Regen
  refreshes provenance and keeps `major.minor` correct; *you* decide when a set of
  type improvements is worth a `npm version patch`.
- **LB ships a real patch tag (e.g. v0.38.0 -> v0.38.1)** — both fold into our
  `0.38.*` line; the distinction lives in the `liquidbounce` block. If you want a
  hard boundary, just cut a new iteration (`npm version patch`) on the LB patch.
- **Pre-1.0 semver.** We stay on `0.x` while LB does; npm treats `^0.38.0` as
  "lock the minor", which is exactly the LB-line pinning we want. If LB reaches
  `1.0`, we follow (`1.0.0`).
- **`access`** is `public` (`publishConfig.access` in `typings/package.json`).
