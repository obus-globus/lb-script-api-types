# LiquidBounce Script-API TypeScript types

TypeScript ambient/declaration types for the **LiquidBounce** (nextgen, MC 1.21+)
script API — the Java/Kotlin/Minecraft type surface a LiquidBounce GraalJS script
can reach at runtime. Used to type-check scripts (and script-generating tools)
against the real client API.

Package name: `@ccbluex/liquidbounce-script-api`
(the LiquidBounce script API; this repo is the obus copy, split out so it can be
versioned and consumed on its own).

## Layout
- `ambient/ambient.d.ts` — the ambient globals a script sees (`mc`, `Client`,
  `RotationUtil`, `Setting`, …). This is the entry point most consumers reference.
- `augmentations/` — hand-written augmentations layered on top of the generated
  types (e.g. `ClientLevel`, `ScriptModule`, `ScriptReflectionUtil`).
- `types/` — the generated `.d.ts` for the full transitive Java/Kotlin/Minecraft
  type closure (~57k files). Generated, not hand-edited.
- `__smoke/` — smoke tests that exercise the types (event narrowing, setting
  factories, GraalVM intrinsics, etc.).

## Provenance
The `types/` tree is **generated** from the LiquidBounce build by the regen
tooling that currently lives in the `liquidbounce-helper` project
(`tools/regen/…`, e.g. `fix-binding-types.py`). This repo holds the *output* so it
can be a standalone dependency; regenerate there and sync the result here when
LiquidBounce updates. `version` in `package.json` tracks the upstream LB build.

## Consuming it
As a local `file:` dependency (how `lb-nodeflow` uses it):

```jsonc
// package.json
"devDependencies": {
  "@liquidbounce-helper/script-api-types": "file:../lb-script-api-types"
}
```
```jsonc
// tsconfig.json — pull in the ambient globals
"compilerOptions": { "types": ["@liquidbounce-helper/script-api-types/ambient"] }
```
