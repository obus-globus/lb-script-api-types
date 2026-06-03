# LiquidBounce Script-API types + generator

TypeScript types for the **LiquidBounce** (nextgen, MC 1.21+) GraalJS **script
API**: the Java/Kotlin/Minecraft surface a LiquidBounce script can reach at
runtime (`mc`, `Client`, `RotationUtil`, `Setting`, every `@Tag` event, and so on).
This repo holds both the published types (`typings/`) and the pipeline that
generates them. It was split out of the `liquidbounce-helper` monorepo so the
types and their generator can be versioned and consumed on their own.

It is a refined fork of CCBlueX's published types, adding typed per-event `on()`
overloads, KDoc-to-TSDoc hover docs, binding fixes, ambient globals, and more.
[docs/improvements.md](docs/improvements.md) has the full list of what this adds
over the official `@ccbluex/liquidbounce-script-api`; [docs/backlog.md](docs/backlog.md)
lists what is still open.

## Install

```bash
npm i -D @obus-globus/lb-script-api-types
```

## Usage

Pull in the ambient script globals through `tsconfig.json`:

```jsonc
{
  "compilerOptions": {
    "types": ["@obus-globus/lb-script-api-types/ambient"]
  }
}
```

Now the runtime globals are typed:

```ts
const target = mc.player;
RotationUtil.aimAt(/* ... */);
```

Event handlers are typed per event. `ScriptModule.on()` has one overload for each
LiquidBounce event, so the event name autocompletes and the payload is typed:

```ts
module.on("attack", (e) => {
  e.entity;          // typed as the AttackEntityEvent payload
});
```

Import individual classes or events by their JVM path:

```ts
import { AttackEntityEvent } from "@obus-globus/lb-script-api-types/types/net/ccbluex/liquidbounce/event/events/AttackEntityEvent";
```

The package ships one `.d.ts` per class (mirroring the JVM package layout), so
`tsc` only parses the types a script actually imports.

### As a local dependency

For a sibling checkout (the way `lb-nodeflow` consumes it), point a `file:`
dependency at the `typings/` subfolder:

```jsonc
// package.json
"devDependencies": {
  "@obus-globus/lb-script-api-types": "file:../lb-script-api-types/typings"
}
```

## Layout

```
typings/      The @obus-globus/lb-script-api-types package (the consumable output):
              ambient/ (the script globals), augmentations/ (hand-written overlays),
              types/ (~57k generated .d.ts), __smoke/ (type smoke tests),
              package.json, tsconfig.json.

generator/    git submodule (obus-globus/lb-ts-generator): the Kotlin/Gradle
              generator that walks Kotlin reflection at runtime to emit one .d.ts
              per class, with KDoc injection. Build JDK: 21.
              `git submodule update --init generator`.

tools/        The regen pipeline:
                regen-types.sh    entry point. builds the generator jar, launches
                                  LB headless, runs ts-defgen.js into
                                  tools/regen-output/, then post-processes.
                regen/            fix-binding-types.py, apply-kdoc.py, drift checks,
                                  ts-defgen.js, post-patches.sh.
                kdoc-extractor/   ts-extract.py + refresh-manifest.sh: parse LB
                                  Kotlin into manifest.json (the KDoc data).

references/   (gitignored) heavy inputs fetched on demand: the LiquidBounce source
              checkout. See fetch-references.sh.
```

## Regenerating the types

The `types/` tree is generated, not hand-edited. The whole flow is one command:

```bash
./run-regen.sh                # inputs, regen (apply-kdoc + fix-binding), promote
./run-regen.sh --no-promote   # stop at tools/regen-output/ to review the diff
```

`run-regen.sh` runs end to end:

1. **inputs**: `fetch-references.sh` (the LB source; reuses a sibling
   `liquidbounce-helper` checkout via symlink if present, else clones) and inits
   the `generator/` submodule.
2. **regen**: `tools/regen-types.sh` builds the generator jar (JDK 21), launches
   LiquidBounce headless (`xvfb-run` + Mesa llvmpipe, JDK 25) so `ts-defgen.js` can
   introspect the live class graph into `tools/regen-output/`, then
   `post-patches.sh` applies `apply-kdoc.py` (TSDoc) and `fix-binding-types.py`
   (the F4/F5 binding fixes). This takes about 50 to 60 minutes on softpipe.
3. **promote**: copies the result into `typings/` and stamps the version (see
   Versioning), keeping the hand-maintained `package.json`, `__smoke/`, and
   `tsconfig.json`.

Prereqs: `xvfb-run`, `glxinfo` (mesa-utils), JDK 25, and JDK 21. Bump `PINNED_SHA`
in `tools/regen-types.sh` to move to a newer LB build. If regen crashes, see
[docs/regen-troubleshooting.md](docs/regen-troubleshooting.md) (notably the
Kotlin-runtime-skew `KParameter$Kind CONTEXT` failure).

Env knobs: `REGEN_TIMEOUT` (default `60m`, caps the headless run) and
`SKIP_JAR_BUILD=1` (reuse the existing generator jar instead of rebuilding).

### Container and CI

- **Docker**: `docker/regen.sh` runs the whole flow in a pinned-toolchain image
  with cached volumes (Gradle and Minecraft downloads persist across runs). See
  [docker/README.md](docker/README.md).
- **GitHub Actions**: `.github/workflows/regen-types.yml` runs the flow and opens a
  PR with the regenerated types. `.github/workflows/docker-image.yml` publishes the
  regen image to GHCR. The headless run is heavy, so a larger or self-hosted runner
  is recommended.

## Versioning

The npm version is the LiquidBounce version the types were generated for. For
example `0.38.1` means types for LiquidBounce 0.38.1. The exact LB commit and
Minecraft version live in the `package.json` `liquidbounce` block:

```bash
npm view @obus-globus/lb-script-api-types liquidbounce
```

`scripts/stamp-version.mjs` derives this from the LB checkout and runs
automatically during `run-regen.sh`. Details in [docs/versioning.md](docs/versioning.md).

## Publishing to npm

`@obus-globus/lb-script-api-types` is types-only (no build step). License is
GPL-3.0-or-later, since the types derive from LiquidBounce. This is an independent
redistribution and is not affiliated with or endorsed by CCBlueX.

```bash
cd typings
npm pack --dry-run     # verify contents (about 10.6 MB packed)
npm publish            # uses publishConfig.access from package.json
```

- **Access**: `publishConfig.access` is `restricted` (private). Scoped private
  packages need a paid npm plan; to go public, change it to `public` (or
  `npm publish --access public`).
- **CI**: `.github/workflows/npm-publish.yml` publishes on a GitHub Release and
  skips if the version is already on npm. It needs an `NPM_TOKEN` repo or org
  secret with publish rights for the `@obus-globus` scope.

## Notes

- The generator lives in its own repo (the `generator/` submodule) so it stays a
  clean Kotlin project. The KDoc feature was reconciled into it after it had
  diverged inside the old monorepo copy.
- `tools/kdoc-extractor/manifest.json` is a checked-in snapshot of the KDoc data;
  `refresh-manifest.sh` regenerates it (it needs the Kotlin compiler, fetched into
  a gitignored `kotlinc/`).
