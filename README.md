# LiquidBounce Script-API types + generator

<!-- lb-badges:start -->
[![npm](https://img.shields.io/npm/v/@wunk/lb-script-api-types?label=npm&color=cb3837)](https://www.npmjs.com/package/@wunk/lb-script-api-types)
[![Minecraft](https://img.shields.io/badge/Minecraft-26.2-2ea44f)](https://www.npmjs.com/package/@wunk/lb-script-api-types)
[![LiquidBounce](https://img.shields.io/badge/LiquidBounce-0.38.1-5865f2)](https://github.com/CCBlueX/LiquidBounce/commit/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71)
[![LB build](https://img.shields.io/badge/LB_build-v0.38.0--73--g553a3caf4-555)](https://github.com/CCBlueX/LiquidBounce/commit/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71)
<!-- lb-badges:end -->

The badges track the build these types were generated from; the LiquidBounce and
LB-build badges link to that exact LiquidBounce commit.

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
npm i -D @wunk/lb-script-api-types
```

## Usage

Pull in the ambient script globals through `tsconfig.json`:

```jsonc
{
  "compilerOptions": {
    "lib": ["es2023"],            // no DOM — see below
    "types": ["@wunk/lb-script-api-types/ambient"]
  }
}
```

Set `"lib"` to a DOM-less library (`es2022`/`es2023`): the GraalJS runtime has
no DOM, and if `lib.dom` is loaded its `localStorage: Storage` declaration
silently overrides the script API's `localStorage` (a Java
`ConcurrentHashMap<String, Any>` with `get`/`put`, not
`getItem`/`setItem`) and DOM globals show up in autocomplete that don't exist
at runtime.

Now the runtime globals are typed:

```ts
const target = mc.player;
RotationUtil.aimAt(/* ... */);
```

Class-value bindings (`Vec3i`, `BlockPos`, `Hand`, `MathHelper`,
`RotationAxis`, ...) are raw `java.lang.Class` values at runtime: construct
directly (`new Vec3i(1, 2, 3)`), but **statics — including enum constants —
live behind `.static`** (`Hand.static.MAIN_HAND`,
`RotationAxis.static.YP.rotationDegrees(90)`,
`MathHelper.static.clamp(...)`). Direct static access compiles against older
typings but is `undefined` at runtime; these types model the real reachable
surface (verified in a live client).

### Typed `Java.type` (opt-in registry)

By default `Java.type(...)` returns `any` (or takes an explicit generic).
Opt into the string-literal registry and it is fully typed from the class
name alone — autocomplete on the string, typed statics/constructors on the
result. Works in plain JS too (the editor language service picks it up from
jsconfig):

```jsonc
"types": [
  "@wunk/lb-script-api-types/ambient",
  "@wunk/lb-script-api-types/registry-lb"   // net.ccbluex.* (~2.6k classes, ~+1s tsc)
]
```

```ts
const SilentHotbar = Java.type("net.ccbluex.liquidbounce.utils.client.SilentHotbar");
SilentHotbar.INSTANCE.serversideSlot;   // typed — no generic, no import
```

`registry-full` covers every generated class (~49k) — great for editor use,
but it adds tens of seconds to batch `tsc` runs, so prefer `registry-lb` in
CI. Unknown class names fall back to the generic `any` overload either way.

Internals that have a generated type but are **not** runtime globals (e.g.
`SilentHotbar`) are reached via `Java.type`, which you can type with the
import:

```ts
import type { SilentHotbar } from "@wunk/lb-script-api-types/types/net/ccbluex/liquidbounce/utils/client/SilentHotbar";
const silentHotbar = Java.type<{ INSTANCE: SilentHotbar }>(
    "net.ccbluex.liquidbounce.utils.client.SilentHotbar").INSTANCE;
silentHotbar.selectSlotSilently(/* ... */);
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
import { AttackEntityEvent } from "@wunk/lb-script-api-types/types/net/ccbluex/liquidbounce/event/events/AttackEntityEvent";
```

The package ships one `.d.ts` per class (mirroring the JVM package layout), so
`tsc` only parses the types a script actually imports.

### As a local dependency

For a sibling checkout (the way `lb-nodeflow` consumes it), point a `file:`
dependency at the `typings/` subfolder:

```jsonc
// package.json
"devDependencies": {
  "@wunk/lb-script-api-types": "file:../lb-script-api-types/typings"
}
```

## Layout

```
typings/      The @wunk/lb-script-api-types package (the consumable output):
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

Prereqs: `xvfb-run`, `glxinfo` (mesa-utils), JDK 25, and JDK 21.

**Bumping to a newer LiquidBounce build** — the checklist:

1. Set `PINNED_SHA` in `tools/regen-types.sh` (the single source of truth;
   `fetch-references.sh` derives from it and fails loudly if it can't).
2. Refresh the committed source-enrichment manifests against the new source:
   `tools/kdoc-extractor/refresh-manifest.sh` (KDoc) and
   `refresh-signatures.sh` (parameter names). Skipping this degrades
   gracefully for most changes (conservative matching just skips what no
   longer fits) but a same-arity parameter rename upstream would keep a stale
   name until refreshed.
3. `./run-regen.sh` — the promote step verifies the output was generated from
   the checked-out SHA, then runs the augmentation drift gate (every `on()`
   overload cross-checked against LB's `ALL_EVENT_CLASSES`/`@Tag` source).
4. `npm run typecheck` — if the semantic ratchets shrank (they should never
   grow), tighten with `npm run typecheck:update-baseline` and commit.

If regen crashes, see
[docs/regen-troubleshooting.md](docs/regen-troubleshooting.md) (notably the
Kotlin-runtime-skew `KParameter$Kind CONTEXT` failure).

Env knobs: `REGEN_TIMEOUT` (default `60m`, caps the headless run) and
`SKIP_JAR_BUILD=1` (reuse the existing generator jar instead of rebuilding).

**Source-enrichment toggles.** Almost everything in the package comes from
runtime reflection of the LiquidBounce build; only two enrichments read the
LiquidBounce *source* (via the committed manifests): KDoc -> TSDoc docs and
real parameter names. Disable them for a pure-reflection build:

- `SKIP_SOURCE_ENRICHMENT=1` - master switch, turns off both.
- `SKIP_KDOC=1` - drop KDoc -> TSDoc injection only (post-patch *and* the
  in-generator inline path).
- `SKIP_PARAM_NAMES=1` - keep the `paramargN` placeholders (skip the rename).

The manifests stay committed; these only gate whether they are applied during
`run-regen.sh` / `post-patches.sh`.

### Container and CI

- **Docker**: `docker/regen.sh` runs the whole flow in a pinned-toolchain image
  with cached volumes (Gradle and Minecraft downloads persist across runs). See
  [docker/README.md](docker/README.md).
- **GitHub Actions**: `.github/workflows/regen-types.yml` runs the flow and opens a
  PR with the regenerated types. `.github/workflows/docker-image.yml` publishes the
  regen image to GHCR. The headless run is heavy, so a larger or self-hosted runner
  is recommended.

## Versioning

The version is `<lb-major>.<lb-minor>.<iteration>`: `major.minor` track the
LiquidBounce release line, and the `patch` is our own iteration counter (so we
can ship type-only improvements between LB releases). `0.38.2` means "our 3rd
type build for the LB 0.38 line".

```bash
npm i @wunk/lb-script-api-types@^0.38.0    # newest types for LB 0.38.x
npm i @wunk/lb-script-api-types@lb-0.38    # same, via the LB-line dist-tag
npm view @wunk/lb-script-api-types liquidbounce   # exact LB build / commit / MC
```

The exact LB build lives in the `package.json` `liquidbounce` block.
`scripts/stamp-version.mjs` keeps `major.minor` synced to the LB line on every
`run-regen.sh`; the iteration is bumped by hand (`cd typings && npm version
patch`) when you cut a release. Full flow in [docs/versioning.md](docs/versioning.md).

## Publishing to npm

`@wunk/lb-script-api-types` is types-only (no build step). License is
GPL-3.0-or-later, since the types derive from LiquidBounce. This is an independent
redistribution and is not affiliated with or endorsed by CCBlueX.

```bash
cd typings
npm pack --dry-run     # verify contents (about 10.6 MB packed)
npm publish            # uses publishConfig.access from package.json
```

- **Access**: `publishConfig.access` is `public` (free for scoped packages). The
  package is published under the **`@wunk`** npm org scope.
- **CI**: `.github/workflows/npm-publish.yml` publishes on a GitHub Release and
  skips if the version is already on npm. It needs an `NPM_TOKEN` repo or org
  secret (a granular token with publish rights for the `@wunk` scope).

## Notes

- The generator lives in its own repo (the `generator/` submodule) so it stays a
  clean Kotlin project. The KDoc feature was reconciled into it after it had
  diverged inside the old monorepo copy.
- `tools/kdoc-extractor/manifest.json` is a checked-in snapshot of the KDoc data;
  `refresh-manifest.sh` regenerates it (it needs the Kotlin compiler, fetched into
  a gitignored `kotlinc/`).
