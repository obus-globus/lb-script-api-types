# Regen troubleshooting

## `NoSuchFieldError: kotlin.reflect.KParameter$Kind ... CONTEXT` (ts-defgen crashes instantly)

**Symptom.** The headless run launches, LiquidBounce initialises, then `ts-defgen.js`
fails the instant it starts reflecting:

```
LiquidBounce ▸ Error generating TypeScript definitions:
  Class kotlin.reflect.KParameter$Kind does not have member field
  'kotlin.reflect.KParameter$Kind CONTEXT'
[ScriptAPI] Failed to load script 'ts-defgen.js'.
```

No `.d.ts` are produced, and the client then sits idle until the `REGEN_TIMEOUT`
fires (so the *visible* failure looks like a timeout / exit 124, but the real
crash is at second ~1).

**Cause.** A **double Kotlin runtime**. The `ts-generator` shadow jar bundled its
own `kotlin-stdlib` + `kotlin-reflect` (pinned `2.0.0`, via `implementation`).
LiquidBounce ships a **newer** Kotlin through `fabric-language-kotlin`
(currently **2.3.10**), and LB's own code is compiled against it - referencing
reflect API added after 2.0, e.g. `KParameter.Kind.CONTEXT` (Kotlin 2.2+, for
context parameters). Loaded as a Fabric mod under the Knot classloader, the
generator's bundled `2.0.0` `KParameter$Kind` (which has no `CONTEXT`) wins, and
the first reflective call into LB's Kotlin does `getstatic ...CONTEXT` against it ->
`NoSuchFieldError`.

This is **not** specific to this repo's split or the KDoc reconciliation - the
original `liquidbounce-helper` generator jar fails identically; it only worked
when LB's runtime Kotlin still matched the bundled `2.0.0`. LB has since moved to
2.3.10.

**Fix** (in the `generator/` submodule - `obus-globus/lb-ts-generator`): do **not**
bundle Kotlin; use LB's runtime Kotlin, exactly like Guava/Gson are already
handled.

- `build.gradle`: `kotlin-stdlib` + `kotlin-reflect` -> `compileOnly`
  (+ `testImplementation` so the out-of-LB unit tests still have them).
- `gradle.properties`: `kotlin.stdlib.default.dependency=false` so the Kotlin
  Gradle plugin doesn't re-add a bundled stdlib.

After the fix the shadow jar ships **no** Kotlin (~4.9 MB -> 84 KB, `0`
`kotlin/reflect/` classes) and runs on LB's Kotlin 2.3.10 - `ts-defgen` clears the
crash and introspects normally.

**If LB bumps Kotlin again** this stays correct (the generator always uses LB's
runtime Kotlin). Only if the generator's *source* started using newer Kotlin
language/stdlib features would you need to bump its compile `kotlin_version`
(kept at 2.0.0 so the Gradle 8.10 toolchain can build it under JDK 21).

## `kdoc manifest load failed: NoSuchMethodException: KDocSource.fromJson(String)`

Non-fatal - the generator logs it and **continues without inline TSDoc**. The
real KDoc/TSDoc injection happens in post-processing (`tools/regen/apply-kdoc.py`,
run by `post-patches.sh`) against the generated `.d.ts`, so the committed types
still get their documentation. The in-generator `KDocSource` path is a secondary
fallback and doesn't affect output correctness.
