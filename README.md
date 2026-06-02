# LiquidBounce Script-API types + generator

TypeScript ambient/declaration types for the **LiquidBounce** (nextgen, MC 1.21+)
script API — the Java/Kotlin/Minecraft type surface a LiquidBounce GraalJS script
can reach at runtime — **and the pipeline that generates them**. Split out of the
`liquidbounce-helper` monorepo so the types (and their generator) can be versioned
and consumed on their own.

## Layout

```
typings/      The @ccbluex/liquidbounce-script-api package — the consumable output.
              ambient/ (the script globals: mc, Client, RotationUtil, Setting, …),
              augmentations/ (hand-written overlays), types/ (~57k generated .d.ts),
              __smoke/ (type smoke tests), package.json, tsconfig.json.

generator/    git submodule → obus-globus/lb-ts-generator. The Kotlin/Gradle
              generator (fork of ntrrgc/commandblock2 ts-generator) that walks
              Kotlin reflection at runtime → one .d.ts per class, with KDoc
              injection. Build JDK: 21. `git submodule update --init generator`.

tools/        The regen pipeline (glue):
                regen-types.sh        — entry point: builds the generator shadow
                                        jar, launches LB headless, runs ts-defgen.js
                                        → tools/regen-output/, then post-processes.
                regen/                — fix-binding-types.py (the binding fixes),
                                        apply-kdoc.py, events-doc-report.py,
                                        drift checks, ts-defgen.js, post-patches.
                kdoc-extractor/       — ts-extract.py + refresh-manifest.sh: parse
                                        LB Kotlin → manifest.json (PSI/KDoc data the
                                        generator's KDocSource consumes).
                generate-java-types.sh, decompile-minecraft.sh, update-refs.sh, …

references/   (gitignored) heavy inputs fetched on demand — the LiquidBounce
              source checkout. See fetch-references.sh.
```

## Consuming the types
As a local `file:` dependency (how `lb-nodeflow` uses it):

```jsonc
// package.json
"devDependencies": {
  "@liquidbounce-helper/script-api-types": "file:../lb-script-api-types/typings"
}
```
```jsonc
// tsconfig.json — pull in the ambient globals
"compilerOptions": { "types": ["@liquidbounce-helper/script-api-types/ambient"] }
```

## Regenerating the types
The `types/` tree is generated — not hand-edited. The **whole flow is one command**:

```bash
./run-regen.sh                  # inputs → regen (+ apply-kdoc + fix-binding) → promote
./run-regen.sh --no-promote     # stop at tools/regen-output/ (review the diff first)
```

`run-regen.sh` does, end to end:
1. **inputs** — `fetch-references.sh` (LB source; reuses a sibling
   `liquidbounce-helper` checkout via symlink if present, else clones) + inits the
   `generator/` submodule.
2. **regen** — `tools/regen-types.sh`: builds the generator shadow jar (JDK 21),
   launches LiquidBounce headless (`xvfb-run` + Mesa llvmpipe, JDK 25) so
   `ts-defgen.js` introspects the live class graph → `tools/regen-output/`, then
   `post-patches.sh` applies `apply-kdoc.py` (TSDoc) + `fix-binding-types.py`
   (F4/F5 binding fixes). **~50–60 min** on softpipe.
3. **promote** — copies the post-processed tree into `typings/`, keeping the
   hand-curated `package.json` + `__smoke/` + `tsconfig.json`.

Prereqs: `xvfb-run`, `glxinfo` (mesa-utils), JDK 25 + JDK 21. Bump `PINNED_SHA` in
`tools/regen-types.sh` (and `version` in `typings/package.json`) when moving to a
newer LB.

## Provenance / notes
- The generator lives in its own repo (`generator/` submodule) so it stays a clean
  Kotlin project; the KDoc feature was reconciled into it (it had diverged inside
  the old monorepo copy).
- `tools/kdoc-extractor/manifest.json` is a checked-in convenience snapshot of the
  KDoc data; `refresh-manifest.sh` regenerates it (needs the Kotlin compiler, which
  is fetched into a gitignored `kotlinc/`).
- `--verify` in `regen-types.sh` references a baseline that used to live in the
  monorepo (`packages/script-helper`); adjust that path for standalone verification.

Package name: `@ccbluex/liquidbounce-script-api` (the LiquidBounce script API;
`version` tracks the upstream LB build).
