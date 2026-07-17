# A11 (deferred part): @JvmOverloads reduced-arity call forms dropped on instance methods

Status: **plan only** (nothing implemented). Scope: the DEFERRED clause of A11 in
[docs/backlog.md](../backlog.md) — instance methods; statics were already handled by
the wave-3 A12 path. Constructors turn out to have the same bug (see Riders).

## 1. Confirmed symptoms (shipped v0.39.1000 typings)

- `typings/types/net/ccbluex/liquidbounce/script/bindings/api/ScriptPrimitives.d.ts`
  lines 23/48/53/59: only the full-arity forms exist —
  `int(string: string | null, radix: number)` etc. for `byte`/`short`/`int`/`long`.
  The documented 1-arg call `Primitives.int("5")` is a type error, though the
  1-arg method really exists in bytecode (`@JvmOverloads`, `ScriptPrimitives.kt:41-67`).
- `typings/types/net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts`
  lines 110-114: `toHexString(format: HexFormat)`, `toVector4f(dest: Vector4f)`,
  `toRgbVector3f(dest: Vector3f)` — all require the arg that `Color4b.kt:227-253`
  defaults. `color.toHexString()` is a type error.
- Contrast (statics work): `Color4b.d.ts:56-57` has BOTH `ofHSB` arities. The
  reduced 3-arg one renders with `paramarg0..2` names — proof it came through
  `staticMethodsOf`'s **Java-reflection fallback branch**, i.e. `Method.kotlinFunction`
  returned null for the reduced-arity synthetic (relevant below).
- `Color4b.d.ts:60`: only the 4-arg constructor — `new Color4b(r, g, b)` (a=255
  default, `@JvmOverloads constructor`, `Color4b.kt:36-37`) is also dropped. Same
  mechanism, not named by A11; covered as a rider.

## 2. Mechanism (why instance breaks, statics don't)

Generator: `generator/src/main/kotlin/me/ntrrgc/tsGenerator/TypeScriptGenerator.kt`.

- `functionsOf` (line ~1201) sources members from **`klass.declaredMemberFunctions`**
  (kotlin-reflect). kotlin-reflect models ONE `KFunction` per Kotlin declaration; the
  `@JvmOverloads`-generated reduced-arity JVM methods are compiler output with no
  Kotlin declaration behind them, so they never appear. The only trace of the default
  is `KParameter.isOptional == true` — which the generator currently ignores
  everywhere (no `isOptional` usage in the file), so `radix: Int = 10` renders as a
  required `radix: number`.
- `staticMethodsOf` (line ~997) sources from **`klass.java.methods`** (plain Java
  reflection). Every bytecode method is there, including the reduced-arity
  `@JvmOverloads` products — hence `ofHSB` gets both arities "for free". Those
  reduced-arity methods are NOT `ACC_SYNTHETIC` (they exist to be javac-callable), so
  neither `isSynthetic` nor `SYNTHETIC_MEMBER_REGEX` (line ~2148, which filters the
  genuinely-synthetic `name$default` bridges) drops them.
- `Method.kotlinFunction` does **not** resolve for the reduced-arity methods
  (empirical: the shipped 3-arg `ofHSB` line has `paramargN` fallback names). So the
  "resolve the Kotlin dual" trick from A12 cannot recover Kotlin param names/types for
  them — they only exist as raw Java methods.
- `typings/ambient/runtime-bindings.json` (`Primitives` entry): `members` is a
  name-only list (`"int"` appears once — arity-blind), and `statics` lists the
  `int$default`/`byte$default`... bridges. So the sidecar confirms defaults exist but
  cannot distinguish arities; it is no use for detection or verification here.
- `@JvmOverloads` retention is **BINARY** (verified via `javap -v` on
  `kotlin-stdlib-2.3.21.jar!kotlin/jvm/JvmOverloads.class` →
  `RetentionPolicy.CLASS`). Runtime reflection (`findAnnotation<JvmOverloads>()`,
  `getAnnotation`) **cannot see it**. Any annotation-based detection would need
  kotlinx-metadata-jvm or ASM class-file parsing.

## 3. Detection mechanism — options and choice

**(a) Annotation-based synthesis** — read `@JvmOverloads` + count trailing
`isOptional` params, synthesize the arities. Rejected: the annotation is invisible at
runtime (BINARY retention, above); pulling in kotlinx-metadata/ASM adds a dependency
and a second source of truth that can drift from the actual bytecode.

**(b) Re-source instance methods from `klass.java.methods`** (make `functionsOf` work
like `staticMethodsOf`). Rejected: `kotlinFunction` is null for exactly the methods we
care about, so they'd render with `paramargN` names and erased nullability, and the
change would bypass the entire Kotlin-typed instance pipeline (W19 re-emission, A3
interface injection, A12 pair-collapse, KDoc). Far too invasive.

**(c) Bytecode-existence check (RECOMMENDED).** Keep `declaredMemberFunctions` as the
source; for each `KFunction`, ask Java reflection whether the reduced-arity overloads
actually exist. The bytecode is the ground truth: a reduced-arity call form should be
typed callable **iff** the JVM method exists. Helper sketch:

```kotlin
/** A11: how many trailing parameters of [function] can be omitted at the JVM
 *  level, i.e. a @JvmOverloads reduced-arity overload exists in bytecode for
 *  every arity down to n - result. 0 disables the feature for this function. */
private fun jvmDroppableTrailingParams(klass: KClass<*>, function: KFunction<*>): Int {
    val valueParams = function.parameters.drop(1)          // matches the render loop
    if (valueParams.none { it.isOptional }) return 0        // fast path: no defaults
    val jm = try { function.javaMethod } catch (_: Throwable) { null } ?: return 0
    // Alignment guard: bail on receiver-shifted shapes (member extension fns etc.)
    if (jm.parameterCount != valueParams.size) return 0
    val fullTypes = jm.parameterTypes
    val methods = try { klass.java.methods } catch (_: Throwable) { return 0 }
    var k = 0
    for (i in valueParams.indices.reversed()) {
        if (!valueParams[i].isOptional) break                // only a trailing run
        val reducedArity = i
        val exists = methods.any { m ->
            m.name == jm.name
                && m.parameterCount == reducedArity
                && m.returnType == jm.returnType             // guard vs. hand-written
                && !m.isSynthetic                            //   prefix overloads that
                && m.parameterTypes.contentEquals(fullTypes.copyOfRange(0, reducedArity))
        }                                                    //   return something else
        if (!exists) break
        k++
    }
    return k
}
```

Why the **double gate** (`isOptional` AND bytecode existence) instead of either alone:

- `isOptional`-only would be WRONG: a Kotlin default **without** `@JvmOverloads`
  produces no reduced-arity JVM method (only the `$default` static bridge). GraalJS
  matches host methods by arity, so `fn()` on such a function throws at runtime.
  Blanket `param?:` marking would type-launder real runtime errors (e.g. every data
  class `copy()` — all-default params, no overloads — must stay full-arity).
- Bytecode-only would be sound (the reduced method exists → the call works) but would
  also fire on every hand-written telescoping overload pair across the whole
  pure-Java/MC surface, churning thousands of baseline lines for zero information
  (the shorter overload is already emitted as its own KFunction). The intersection
  confines the diff to genuine `@JvmOverloads` Kotlin functions.
- The `returnType ==` guard kills the one dangerous false positive of the existence
  check: a hand-written reduced-arity overload with a *different* return type (then
  `f(a)` must keep resolving to that overload's own emitted signature, not to
  `f(a, b?)` with the wrong return).
- `klass.java.methods` (public incl. inherited) rather than `declaredMethods`, so a
  subclass that inherits the base's reduced-arity synthetics answers the same as the
  base — keeps override/base renderings consistent.

## 4. Emission — optional params, not synthesized overloads (RECOMMENDED)

In `functionsOf`'s parameter join (line ~1403-1411), append `?` to the trailing
droppable run:

```kotlin
val droppable = jvmDroppableTrailingParams(klass, function)
val firstOptional = parameterTypes.size - droppable
val parameters = parameterTypes.withIndex().joinToString(", ") { (idx, pair) ->
    val (param, paramType) = pair
    val rendered = formatKType(paramType).formatWithoutParenthesis()
    val rest = /* existing vararg logic unchanged */
    val opt = if (idx >= firstOptional && rest.isEmpty()) "?" else ""
    "${rest}${param.name}${opt}: $rendered"
}
```

- `rest.isEmpty()` guard: a TS rest param cannot be optional (TS1047). Moot in
  practice (Kotlin varargs can't have defaults → never `isOptional`), but cheap.
- Trailing-run logic guarantees no "required after optional" (TS1016).
- Scratch-verified with the repo's tsc: an overload set
  `int(int: number); int(long: number); int(string: string|null, radix?: number)`
  typechecks and accepts `P.int("5")`, `P.int("ff", 16)`, `P.int(5)`.

**No double-emit / W19 / A4 interaction:** the change happens while building the
parameter *string*, upstream of `RenderedOverload` — it does not add lines.
- W19's `overloadSignature()` (line ~2123) keys on KFunction KTypes, untouched.
- The `emittedSignatures` exact-string dedup (line ~1463) still works; since the
  bytecode check answers identically for a declared and a W19-re-emitted inherited
  copy of the same function (both consult `klass.java.methods`), the two render
  identically and dedup as before — no `radix:`/`radix?:` sibling pair can arise
  from the same underlying function.
- A12 pair-collapse compares parameter strings for *equality*; a `?` change applies
  to both members of any nullable/non-null pair identically (same function object →
  same droppable count), so collapse behavior is unchanged.
- A4's `.distinct()` lives in `staticMethodsOf` — not touched.

**Why not synthesize k extra overload lines instead?** It is strictly worse here:
more emitted surface (~2x lines per affected function), must thread prefixes through
`RenderedOverload`/pair-collapse/KDoc-once bookkeeping, and — because the return type
is identical by construction — the overload split carries zero extra information over
`?`. TS declaration order between the arities also becomes a (harmless but real)
review concern. `?` is the idiomatic TS rendering of "trailing default".

**Is `?` a sound simplification?** Yes, given the gate. TS `radix?: number` promises
exactly the arity set {n-k .. n}; `@JvmOverloads` generates exactly one JVM method per
dropped trailing default, i.e. the same contiguous arity set, and the helper verifies
each arity individually (partial-suffix cases where only some arities exist get a
shorter `?` run). GraalJS resolves host calls by arity/type against the real method
list, so every typed call form dispatches. Residual TS-ism: `?` also admits an
explicit `undefined` argument (`P.int("5", undefined)`), which GraalJS would reject at
runtime — standard TS/JS-interop slack, same as every optional in the ambient surface.

**Known edge (accepted):** an `open @JvmOverloads` method overridden in a subclass —
the override's own KParameters report `isOptional == false` (defaults live on the
base declaration), so the subclass would render the param required while the base
renders it optional → potential TS2416. No such pattern exists in the current LB
surface (`@JvmOverloads` sites are on `object`/final members); if the baseline diff
ever shows a TS2416 from this, the fallback is to drop the `isOptional` half of the
gate *for names where the bytecode check passes on the override's declaring class* —
the bytecode gate alone is inheritance-consistent.

## 5. Expected baseline impact + verification

- ~72 `@JvmOverloads` sites in `references/liquidbounce` sources; minus statics /
  top-level extensions (already emitted per-arity via `staticMethodsOf`) and
  constructors (separate rider), the instance-method subset is small — expected diff
  is **tens of lines across a handful of `.d.ts` files**, each line gaining `?` on a
  trailing param. Known must-change lines: `ScriptPrimitives.d.ts` (`byte`/`short`/
  `int`/`long` → `radix?: number`), `Color4b.d.ts` (`toHexString(format?: HexFormat)`,
  `toVector4f(dest?: Vector4f)`, `toRgbVector3f(dest?: Vector3f)`).
- Non-`@JvmOverloads` defaulted functions (e.g. data-class `copy`) must be
  **byte-identical** — that's the negative control for the gate.
- Semantic baseline (typecheck gate Part D) must not grow; `?` widens call
  compatibility, so shrinkage is possible, growth means a gate bug.

## 6. Step-by-step implement / regen / verify

1. **Generator change** (`TypeScriptGenerator.kt`): add `jvmDroppableTrailingParams`
   (companion-object private, next to `overloadSignature`); wire into the
   `functionsOf` parameter join as in §4. `javaMethod` is already imported (line 51).
2. **Unit tests** (`generator/src/test/.../tests/`, wave3RegressionTests.kt style —
   new `a11JvmOverloadsTests.kt` + Kotlin fixtures in the same file):

   ```kotlin
   @Suppress("unused")
   class JvmOverloadsFixture {
       @JvmOverloads
       fun parse(s: String, radix: Int = 10, strict: Boolean = false): Int = 0
       fun plain(s: String, count: Int = 1): Int = 0        // default, NO annotation
       fun sandwich(a: Int, b: Int = 1, c: String): Int = 0 // default before required
   }

   "a @JvmOverloads instance method renders trailing defaulted params optional" {
       generate(JvmOverloadsFixture::class) shouldContain
           "parse(s: string, radix?: number, strict?: boolean): number"
   }
   "a defaulted param WITHOUT @JvmOverloads stays required (no JVM overload exists)" {
       generate(JvmOverloadsFixture::class) shouldContain
           "plain(s: string, count: number): number"
   }
   "a non-trailing default stays required" {
       generate(JvmOverloadsFixture::class) shouldContain
           "sandwich(a: number, b: number, c: string): number"
   }
   ```

   Run `generator` tests via its gradle build — **memory-capped, no parallel agents**
   (VM has no swap; see repo CLAUDE.md).
3. **Regen**: `./run-regen.sh` (headless LB run, ~6 min) and promote. Do this alone,
   nothing else heavy running.
4. **Verify**:
   - `grep -n 'radix?: number' typings/types/.../ScriptPrimitives.d.ts` → 4 hits;
     `grep -n 'format?: HexFormat\|dest?: Vector' .../Color4b.d.ts` → 3 hits.
   - `git diff --stat typings/` — confirm the diff is confined to `?`-additions in
     Kotlin-sourced files; spot-check that `copy(` signatures are unchanged.
   - `npm run typecheck` — Parts A-D green, semantic baseline not grown (shrink-only
     update if it shrank).
   - Add positive smoke assertions in `typings/__smoke` (hand-maintained, survives
     promotion): `Primitives.int("5")`, `Primitives.int("ff", 16)`,
     `color.toHexString()`, plus a `@ts-expect-error` for `Primitives.int()`.
5. **Backlog**: update the A11 entry (drop the deferred clause), note the rider status.

## Riders (same mechanism, explicitly out of A11-instance scope)

- **Constructors**: `constructorsOf` (line ~1108) uses `klass.constructors` — same
  single-KFunction blindness; `new Color4b(r, g, b)` is a shipped type error. Same
  helper against `klass.java.constructors` (`function.javaConstructor`), same `?`
  emission. Cheap to include in the same PR; keep as its own commit + test.
- **Statics cosmetic cleanup**: statics already emit both arities, but the reduced
  form renders with `paramarg0..N` names (kotlinFunction is null for it). Optional
  follow-up: when a static Java method is a same-return prefix of a sibling whose
  Kotlin dual marks the dropped params `isOptional`, skip it and mark the dual's
  trailing params `?` instead — collapses the `ofHSB` pair to one line with real
  names. Baseline-visible; do separately if at all.
