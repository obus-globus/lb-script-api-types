# Versioning & releases

The package version **is the LiquidBounce version the types were generated for.**

```
@obus-globus/lb-script-api-types@0.38.1      ← types for LiquidBounce 0.38.1
```

- **`version`** = LiquidBounce's `mod_version` (from `references/liquidbounce/gradle.properties`)
  — a clean `MAJOR.MINOR.PATCH`, so one published npm version == one LB release
  (no build-metadata, so `npm view` / install / dedup behave normally).
- **`liquidbounce` block** in `package.json` carries the exact provenance:
  ```jsonc
  "liquidbounce": {
    "version": "0.38.1",
    "minecraft": "26.1.2",
    "commit": "fac52d9c85c85141cb327e00599cdf8e0a7afc66",
    "ref": "v0.38.0-1-gfac52d9c8"
  }
  ```
  Surface it with `npm view @obus-globus/lb-script-api-types liquidbounce`.

## How it's stamped (automatic)

`scripts/stamp-version.mjs` derives all of the above from the LB source checkout
and writes it into `typings/package.json`. It runs automatically at the end of a
promote in `run-regen.sh`, so a regenerated tree always carries the right version.

Manually:
```bash
node scripts/stamp-version.mjs           # stamp
node scripts/stamp-version.mjs --check   # print, don't write
```

## Release flow

1. Bump the LB pin (`PINNED_SHA` in `tools/regen-types.sh`) to the target LB build,
   `./fetch-references.sh`, then `./run-regen.sh` — this regenerates the types and
   **stamps the version to that LB build**.
2. Commit the regenerated `typings/` (incl. the bumped `package.json`).
3. Cut a **GitHub Release** → `.github/workflows/npm-publish.yml` publishes it (the
   workflow skips if that version is already on npm).

   Or locally: `cd typings && npm publish`.

## Policy & edge cases

- **One publish per LB release.** You normally regenerate *because* LB changed, so
  `mod_version` advances and the npm version is naturally unique.
- **LB didn't bump `mod_version` but the types need a fix** (rare — e.g. a
  generator/post-patch improvement against the same LB build): npm won't accept a
  re-publish of the same version. Either fold the fix into the next LB-version
  release, or temporarily hand-edit `version` to a patch beyond LB's (and note it
  in the `liquidbounce` block). The clean-version scheme deliberately trades
  same-version re-releases for unambiguous `npm` resolution.
- **`access`** is `restricted` (private) for now; flip `publishConfig.access` to
  `public` in `typings/package.json` to go public (a free npm account can only
  publish *public* scoped packages).
