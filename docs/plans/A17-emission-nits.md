# A17 (deferred part): remaining emission nits — fix plan

Status: **plan only** (nothing implemented). Scope: the four "Still open" items of
A17 in [docs/backlog.md](../backlog.md) — the wave-3 A17 work (static generics,
enum `valueOf`, SAM substitution) already shipped. All four nits re-verified
against the shipped `typings/` at **v0.39.1000** (LB 567a259) on 2026-07-17.

All fixes are **generator-layer** (`generator/src/main/kotlin/me/ntrrgc/tsGenerator/TypeScriptGenerator.kt`,
"TSG" below) except one regression-gate extension in `tools/regen/`. None touch
the post-patches' behavior; F7 (`fix-member-collisions.py`) stays as-is.

---

## N1 — `TagEntityEvent.color` field/method shadow

### Confirmed symptom (shipped)
`typings/types/net/ccbluex/liquidbounce/event/events/TagEntityEvent.d.ts`:
- has `color(col: Color4b, priority: Priority): void` (the method) — correct;
- the `color: PriorityField<Color4b | null>` property is **gone** (line 5 still
  imports `PriorityField`, now unused — harmless cosmetic leftover);
- `getColor()` — the only way a script can actually reach the `PriorityField` —
  is **untyped**.

Source: `references/liquidbounce/src/main/kotlin/net/ccbluex/liquidbounce/event/events/EntityEvents.kt`
lines 46 (`val color: PriorityField<Color4b?>`) and 68 (`fun color(col, priority)`).

### Root cause
Two-stage:
1. Generator emits BOTH members: `propertiesOf` (TSG:1565-1610, bean-property
   branch) emits `readonly color: PriorityField<...>`; `functionsOf` emits the
   method. TS forbids the duo.
2. F7 (`tools/regen/fix-member-collisions.py:143-146`) resolves it: readonly
   field + parameterized method → **drop the field, keep the method** — the right
   call (the method must stay callable), but the field's *getter form* is lost
   with it.

GraalJS reality (why the current shape is *almost* right): member `color` on the
host object resolves to the invocable method; the property value is reachable
only via the bean getter `getColor()`. So the honest surface is
`color(col, priority)` **+** `getColor(): PriorityField<Color4b | null>`.

### Fix (generator — NOT F7)
In `propertiesOf`'s bean-property branch (TSG:~1566): when the property's name
collides with a member-method name (`klass.java.methods.any { it.name == property.name && it !== property.javaGetter }`),
**additionally emit the getter form** `${property.javaGetter!!.name}(): T;`
(and the `javaSetter` form for mutable properties). The non-bean branch already
emits field+getter duals (TSG:1611-1640) — this closes the same gap for bean
properties, but only in the collision case to avoid tree-wide getter noise.

F7 then behaves exactly as today: drops the `color` field, keeps `color(...)`;
`getColor()` has no collision and survives. No F7 change; the currently-dangling
`PriorityField` import becomes used again.

Why not F7: the post-patch sees only `.d.ts` text and cannot know whether a
dropped field is a Kotlin property (getter exists at runtime) or a raw Java
field (no getter — emitting `getX()` would be a lie, e.g. JOML's `Vec3d.x`).
Only the generator has the reflection facts.

### Baseline impact
Small. Only bean-property/method same-name collisions gain a getter line. F7's
"dropped 1000 fields" is dominated by raw Java fields/record components with no
bean getter — untouched. Expect a handful of files (TagEntityEvent + few peers).

### Regression test sketch
Kotest (wave3RegressionTests style), Kotlin fixture:
```kotlin
class PropMethodShadow { val color: Int = 1; fun color(a: Int, b: Int) {} }
```
Assert generator output contains `getColor(): number` AND `color(a: number, b: number)`.
Optionally: run `fix-member-collisions.py` over the rendered fixture in a temp
dir (the F7 test harness pattern) and assert the survivors are exactly
`color(...)` + `getColor()`.

### Priority / effort
**Medium / S.** Script-facing: TagEntityEvent is a commonly-used script event
(target highlighting), and `event.getColor()` is live-code today with no typing.

---

## N2 — suspend functions emitted as plain `(): void`

### Confirmed symptom (shipped)
`typings/types/net/ccbluex/liquidbounce/features/module/ClientModule.d.ts:68`:
`enabledEffect(): void` — but `ClientModule.kt:149` is
`open suspend fun enabledEffect() {}`, i.e. JVM
`enabledEffect(Continuation<? super Unit>): Object`. A JS caller invoking
`module.enabledEffect()` gets a runtime "no applicable overload" error despite
the typings blessing the call.

### Scale
- 118 non-private `suspend fun`s in the LB source tree; the script-facing
  signature manifest carries **168 suspend-flagged overloads**
  (`tools/kdoc-extractor/signatures.json`).
- The surface is currently *inconsistent*: the Java-reflection static path
  already renders the JVM truth (e.g. mlkit's
  `translate$suspendImpl(..., paramarg4: Continuation<Object>): Object`), while
  every kotlin-reflect-rendered instance member lies.
- `tools/regen/apply-signatures.py:67-73,179-184,232-238` already knows about
  the Continuation-arity mismatch and skips such decls — it tolerates either
  rendering, so no post-patch interference.

### Root cause
`functionsOf`'s overload rendering (TSG:1381-1462) renders from the `KFunction`,
which *hides* the continuation parameter and reports `Unit` return. There is no
`isSuspend` check anywhere in the generator (grep: zero hits).

### Honest rendering — verdict
- **Not `Promise`**: GraalJS does not bridge Kotlin suspend to JS promises;
  typing a Promise would be a new lie.
- **Not omission**: the members exist and (with a Continuation) are callable;
  hiding them breaks discoverability and structural conformance symmetry.
- **Emit the JVM truth** (matches the already-shipped static rendering):
  append `$completion: Continuation<T>` (T = declared return type, `void` for
  Unit) and return `any` (the JVM method returns `Object` — result or
  COROUTINE_SUSPENDED). Technically callable from JS by passing a
  `{ context, resumeWith }` object. Add a one-line tsdoc `@remarks Kotlin
  suspend function — requires a Continuation` for discoverability.

### Fix (generator)
In the `.map { function -> ... }` at TSG:~1381: when `function.isSuspend`,
- `parameters += "$completion: " + formatKType(Continuation::class.createType(listOf(KTypeProjection.invariant(returnType)))).formatWithoutParenthesis()`
  (real classifier + real KType arg, so `createType` is safe — no SyntheticKType
  needed; `formatKType` registers the import via `dependentTypes` for free;
  `typings/types/kotlin/coroutines/Continuation.d.ts` already exists);
- `formattedReturnType = "any"`.
W19 dedup/nullable-pair-collapse operate on the rendered strings and are
unaffected (suspend params can't collide with a non-suspend sibling's).

**Rider:** add `.*[$]suspendImpl` to `SYNTHETIC_MEMBER_REGEX` (TSG:~2145) — the
`foo$suspendImpl` static bridges of open suspend fns are compiler bookkeeping
currently leaking into statics.

### Baseline impact
Moderate, mechanical: ~100-170 decl lines flip signature; those files gain a
`Continuation` import. `apply-signatures` stats shift some decls into
`skip-suspend` (expected, benign).

### Regression test sketch
```kotlin
open class SuspendFixture { open suspend fun s(x: Int): String = "" }
```
Assert output contains `s(x: number, $completion: Continuation<string>): any`
and does NOT contain `s(x: number): string`.

### Priority / effort
**Medium-high / M.** It's an active arity lie on a member scripts plausibly
call; the fix also unifies the two rendering paths.

---

## N3 — interface statics wrongly merged into implementing classes

### Confirmed symptom (shipped)
`typings/types/net/minecraft/network/chat/MutableComponent.d.ts:33,35`:
`static literal(...)`, `static nullToEmpty(...)` on the **class**, but these are
statics of the `Component` **interface**. Java interface statics are not
inherited: `Java.type('net.minecraft.network.chat.MutableComponent').literal(...)`
fails at runtime. Sample scale: `static nullToEmpty` appears in 6 files
(the interface + 5 implementers); every statics-bearing interface repeats this
across its implementers.

### Root cause
- `generateDefinition` TSG:766-768 passes `interfaceSupertypes` into
  `staticMethodsOf`.
- `staticMethodsOf` TSG:997-1006 flatMaps each interface's `java.methods`,
  filters `Modifier.isStatic`, and merges them into the class's statics.
- `klass.java.methods` alone never returns implemented-interface statics (Java
  reflection follows the language rule) — the explicit merge is the *sole*
  source of the bogus members. Note interface **fields** (constants) ARE
  inherited by implementers, so `staticFieldsOf` is correct and must stay.

### Fix (generator)
Delete the merge: remove the `interfaceSupertypes` parameter from
`staticMethodsOf` (the other call site, the A14 statics-only path at TSG:305,
already passes `emptyList()`), i.e. statics come from `klass.java.methods` only.

### Baseline impact
Moderate, pure deletions: every implementer of a statics-bearing interface
loses the duplicated statics (MC interfaces with `CODEC`/factory statics are the
bulk — likely hundreds of lines across a few hundred files). Consumer risk: any
example/`__smoke`/doc snippet calling a static through an implementer will fail
the Part-D typecheck gate — those call sites are runtime-broken today and should
be rewritten to call through the interface (that's the point of the fix).

### Regression test sketch
Java fixture (Wave3Fixtures.java style):
```java
interface WithStatic { static int make() { return 1; } }
class Impl implements WithStatic {}
```
Assert `Impl`'s output does NOT contain `static make`, `WithStatic`'s does.
Also a constants case: `interface WithConst { int X = 3; }` — implementer keeps
`static X` (guards the staticFieldsOf non-regression).

### Priority / effort
**Medium / S** (one-line-ish deletion; the cost is the baseline review).

---

## N4 — anonymous/synthetic-class dangling refs (4 sites)

### Confirmed symptoms (shipped)
All live (not comments), all TS2304-shaped, all masked because the canary
consumer tsconfig sets `skipLibCheck: true` (`tools/package-canary.sh:46`) and
typecheck Part D only covers the script-author surface:
- `.../ExecutionSequencer$TaskNonReentrantExecutor.d.ts:8` and
  `.../ExecutionSequencer$ThreadConfinedTaskQueue.d.ts:6` — ctor params typed
  `ExecutionSequencer$1`; **no import, no module**.
- `.../org/spongepowered/include/com/google/common/collect/Maps$EntryFunction.d.ts:12`
  — `constructor(arg2: Maps$1)`; same.
- `typings/types/java/lang/invoke/BoundMethodHandle$SpeciesData.d.ts:8` —
  `constructor(arg0: BoundMethodHandle$Specializer, arg1: string)`; same.
- `BestCandidateSampling$1` is **no longer dangling** — it now ships as its own
  bogus empty module (`class BestCandidateSampling$1 extends Object {}`),
  imported by `BestCandidateSampling$IntHolder.d.ts` and registered in
  `registry-full/index.d.ts:47954`. Wrong in a different way (an anon class got
  a public module).

### Root causes (empirically verified)
Three distinct mechanisms; verified with `javap`/reflection against
joml-1.10.8 and guava jars (scratch run, 2026-07-17):

1. **javac synthetic constructor access-tag classes.** `BestCandidateSampling$1`
   is the classic empty tag class javac mints for private-ctor access bridges:
   measured `isAnonymousClass()==false`, `isLocalClass()==false`,
   `isSynthetic()==true` (its EnclosingMethod attribute has a null method ref).
   It therefore slips BOTH anon guards — the import guard (TSG:348) and the
   `nonPrimitiveFromKType` supertype fallback (TSG:456-470) — and gets
   imported + emitted. The referencing constructors are themselves
   `ACC_SYNTHETIC` bridges (measured: `IntHolder(BestCandidateSampling$1)` has
   `isSynthetic()==true`; same pattern for the guava 3-arg
   `TaskNonReentrantExecutor` ctor and the `Maps$EntryFunction` enum ctor) —
   and `constructorsOf` (TSG:1108-1163) never filters synthetic ctors.
2. **Genuine anonymous classes whose fallback throws.** Guava's
   `ExecutionSequencer$1` is a real anonymous `AsyncCallable`. The shipped
   output (raw name, no import) requires `isAnonymousClass()==true` at the
   import guard (no import was added) yet raw-name rendering in
   `nonPrimitiveFromKType` — whose anon branch wraps BOTH the detection and the
   `kClass.supertypes` fallback in one `try { } catch (Throwable) { /* fall
   through to raw binary name */ }` (TSG:456-470). kotlin-reflect throwing on
   anon-class `.supertypes` lands exactly there. (Residual uncertainty on the
   precise throw-site; the implementer should confirm with a temporary log line
   during the regen — the fix below is correct under any throw-site inside that
   block.)
3. **Referenced-but-skipped classes.** `BoundMethodHandle$Specializer` is a
   named private JDK class; its `visitClass` failed
   (`logs/regen-20260716-1354-wave3c.log:688: "Skipping
   java.lang.invoke.BoundMethodHandle.Specializer: NoSuchElementException"`).
   `moduleText` (TSG:226-240) then silently drops the import for a module-less
   dependent (the comment admits "a dangling name is no worse than aborting")
   — but the already-rendered name stays in the definition. Same exposure for
   the other 2 "Skipping" victims (`ClassSpecializer`,
   `JCToolsBlockingQueueFactory.WaitStrategy`) wherever referenced.

### Fix (generator, 3 small pieces)
1. **`constructorsOf`: skip synthetic constructors** —
   `constructor.javaConstructor?.isSynthetic == true` → drop. Kills all four
   `$1` ctor refs at the source AND removes the `DefaultConstructorMarker`
   junk ctors currently shipped in **170 files** (`constructor(arg0:
   DefaultConstructorMarker)` — kotlinc default-args bridges, uncallable).
   @JvmOverloads reduced-arity ctors are NOT `ACC_SYNTHETIC` (established in
   the A11 plan) — unaffected. Edge: if filtering leaves zero renderable ctors
   for a class that HAD ctors, emit a `private constructor()` sentinel so TS
   doesn't imply a default public one.
2. **Harden the anon guards**: add `|| javaClass.isSynthetic` to both TSG:348
   and the TSG:456-470 check, and restructure `nonPrimitiveFromKType` so
   detection and fallback are separate try-scopes — if the class matched the
   guard but the supertype fallback fails, return `"any"`, NEVER the raw binary
   name. (This also stops the empty `BestCandidateSampling$1` module + its
   import + its `registry-full` line from being emitted.)
3. **`moduleText`: degrade missing-dep names honestly** — when a dependent has
   no module (currently: import silently skipped), emit a local
   `type BoundMethodHandle$Specializer = any;` alias line before the export
   instead. Legal TS, order-independent (moduleText is lazy), zero blast
   radius, and covers every current/future "Skipping" victim.

### Baseline impact
- Piece 1: ~174 files — 4 `$1` sites fixed + 170 `DefaultConstructorMarker`
  ctor deletions (all deletions, easy review).
- Piece 2: `BestCandidateSampling$1.d.ts` disappears; `IntHolder` import
  removed; one `registry-full` line dropped.
- Piece 3: 1-2 files gain an alias line.

### Regression test sketch
Fabricating javac-8 access-tag bytecode in modern test fixtures isn't practical
(nestmates). Gate it at the output level instead: extend
`tools/regen/check-output-sanity.py` (which today only checks **import-path**
danglers, line 59) with a **body-level unresolved-identifier scan**: any
`$`-containing type token in a member/ctor position must be the class itself,
an imported name, or a locally declared alias. **Positive control:** run it on
the current shipped tree first — it must flag exactly these 4 refs; after the
fix, zero. Unit-testable pieces: the synthetic-ctor filter via a prebuilt
`.class` resource, or skip; the `moduleText` alias via a fixture whose
dependent's reflection is forced to fail.

### Priority / effort
**Low-medium / M** (3 small pieces + the sanity-gate extension). Zero
script-facing impact — this is hygiene + closing the "skipLibCheck hides
TS2304" blind spot. Nothing here is worth *skipping*: all 4 refs are live code,
and piece 1's DefaultConstructorMarker cleanup is the biggest single honesty
win of the group.

---

## Suggested implementation order (one focused pass)

All in the generator submodule, one regen at the end:

1. **N3** (delete interface-statics merge) — isolated deletion, do first.
2. **N1** (collision-aware getter emission in `propertiesOf`).
3. **N2** (suspend rendering in `functionsOf` + `$suspendImpl` regex rider).
4. **N4** pieces 2+3 (guards + moduleText alias), then piece 1 (synthetic-ctor
   filter) last — it has the biggest, easiest-to-review churn.
5. Extend `check-output-sanity.py` with the body-level dangler scan (with the
   pre-fix positive control run).
6. One regen + baseline review; expected diff shape: deletions (N3, N4.1),
   ~100-170 signature flips + Continuation imports (N2), a handful of new
   getter lines (N1), one deleted module + registry line (N4.2).

Kotest regression tests for N1/N2/N3 go in a `wave5RegressionTests.kt`
(fixtures per the sketches above). Estimated total effort: ~1 day of
implementation + the regen/baseline-review cycle.
