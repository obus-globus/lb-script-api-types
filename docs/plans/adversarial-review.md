# Adversarial review of the A11 / A13 / A15 / A17 fix plans

Reviewed 2026-07-18 against generator source (`TypeScriptGenerator.kt`, 2249 lines),
`tools/regen/`, and the shipped `typings/` (v0.39.1000). Every load-bearing claim was
either re-verified in the tree or attacked with a scratch `tsc --strict` (repo's own
TypeScript, scratch files in `/tmp/adv-rev/`). No regen, no gradle, no full typecheck
was run. Context for calibration: a prior "expected baseline impact" prediction (A15
wave 3) was empirically wrong (+84 TS2344 instead of shrink), so every impact number
below is treated as a hypothesis unless the plan supplies a pre-regen measurement.

One cross-plan factual error found first, because it reprices everything: the
ModuleCache is gated on **the generator jar's own content sha**
(`ModuleCache.kt:14`). *Any* generator change — including A15's comment-only edit at
`TypeScriptGenerator.kt:775` — busts the entire cache and makes the next regen a
**cold** run (A13 itself budgets "several hours"; warm was ~22 min). A11's step 3
("`./run-regen.sh` … ~6 min") is therefore wrong for its own change, and running the
plans as four independent regen cycles buys 3+ cold runs. See "Recommended execution
order".

---

## A11 — @JvmOverloads reduced-arity call forms (instance methods)

### Verdict: SOUND (minor revisions)

The plan's evidence base is the best of the four: every cited symptom reproduces
byte-for-byte in the shipped tree (`ScriptPrimitives.d.ts` full-arity-only
`int/byte/short/long`; `Color4b.d.ts:110-114` required `format`/`dest`; the statics
contrast — `ofHSB` emitting both arities with `paramarg0..2` names — confirmed at
`Color4b.d.ts:56-57`). The cited mechanism checks out in source: `functionsOf` sources
from `declaredMemberFunctions` (line 1201), `staticMethodsOf` from `klass.java.methods`
(997), no `isOptional` usage anywhere, `javaMethod` already imported (line 51). The
double gate (isOptional ∧ bytecode existence) is well-designed: I attacked it with
overload-set cases (ScriptPrimitives' own `int(int)`/`int(long)`/`int(String,radix)`
family) and the prefix-type + return-type guards correctly exclude the sibling 1-arg
overloads; the data-class `copy()` negative control is genuinely negative (only a
filtered `copy$default` bridge exists, no reduced-arity method → gate off); suspend
functions are excluded by the `parameterCount != valueParams.size` alignment guard
(continuation param).

**Holes found:**

1. **The "known edge" (open @JvmOverloads override → TS2416) is not actually an
   error — the plan hedges against a phantom.** Scratch-verified
   (`/tmp/adv-rev/t1.ts`, repo tsc, `--strict`): `class Base { f(a: number, b?:
   number): number }` with `class Derived extends Base { f(a: number, b: number):
   number }` typechecks **clean** — method-syntax members are checked bivariantly and
   the required-vs-optional param mismatch is accepted in both directions. So the
   §4 fallback plumbing ("drop the isOptional half of the gate for names where…") is
   solving a problem TS doesn't have. The only residual effect of an un-gated
   override is *cosmetic inconsistency* (base shows `b?`, override shows `b`).
   Simplify the plan: delete the fallback, note the cosmetic case.
2. **The @JvmOverloads survey covers the wrong universe.** §5's "~72 sites in
   `references/liquidbounce`" and the "no open @JvmOverloads in the current LB
   surface" claim were checked only against LB sources — but the emitted tree
   contains **okhttp3 + kotlinx (1,489 files), dev.*, de.*, kroppeb, team.***, i.e.
   Kotlin dependency jars with their own @JvmOverloads sites (OkHttp's public API is
   notoriously @JvmOverloads-heavy). The "tens of lines across a handful of files"
   diff estimate is therefore a hypothesis about a subset. Per hole 1 this is a
   churn-size risk, not a correctness risk — but the §5 numbers should be re-stated
   as LB-only, and the diff review should expect okhttp3/kotlinx `?` additions.
3. **The A12 pair-collapse justification is wrong as written** ("same function
   object → same droppable count"). The collapse pairs come from *different*
   KFunctions (a nullable interface default vs a non-null override — that is the
   collapse's entire purpose, see the comment at the collapse site, lines
   ~1438-1460). The conclusion still holds for a different reason: neither member of
   such a pair can carry defaults (`@JvmOverloads` is illegal on interface methods,
   and Kotlin forbids default values on overrides → `isOptional == false` on both
   sides → droppable = 0 for both). Fix the rationale so a future reader doesn't
   "extend" the wrong invariant.
4. **Regen cost is misstated** (~6 min): the generator change busts the ModuleCache
   → cold regen. Not a correctness issue; a sequencing one (below).

**Baseline-impact realism:** the "must not grow" claim for Part D is now actually
credible *because of* hole 1: `?` only widens call-compat and cannot mint TS2416 on
method syntax. The negative control (`copy(` byte-identical) is a real positive
control for the gate. No pre-regen experiment is proposed, but the unit-test fixtures
(annotated/plain/sandwich) cover the decision table; acceptable for a change this
confined — provided the diff review greps beyond LB packages (hole 2).

**Risk executing as written: LOW.** Required corrections: fix §5's universe claim,
delete the phantom-TS2416 fallback, fix the pair-collapse rationale, batch the regen
(see ordering). The constructor rider is same-mechanism and fine to include; the
statics cosmetic cleanup should stay deferred as the plan says.

---

## A13 — `JavaMap<K, V>`

### Verdict: NEEDS-REVISION

The investigation quality is high and nearly all mechanism claims verified against
source and tree: `mapFromKType` at 653-680 exactly as described (three forms, `< 2
args` fallback, enum-key comment); heritage Map-strip; `moduleText`/depth at 223-241;
`definitionsAsModules` at 2238; `Map.d.ts` is the A14 statics-only class with the
self-reference shadow hack and — important corroboration — it already imports
`Map$Entry`, proving the statics-only path flows through the normal import machinery
the plan relies on. Occurrence counts reproduce to within a few percent (`: Map<` in
1,920 files / 4,221 hits vs claimed 5,224 refs in 1,994 files — the delta is
positional variants; `[key: number]` 216 vs 218; `{ [key: string]: any }` 7,646 vs
8,264). "Zero files import a class with simple name `Map`" holds — even
`registry-full/index.d.ts` references it as inline
`typeof import("../types/java/util/Map").Map` (line 25036), no simple-name binding.
Generated `Map$Entry.d.ts` is indeed `readonly key/value` only. `JavaMap$Entry` does
**not** collide with `Map$Entry` (distinct names, distinct files), and my scratch
probe confirms the assignability direction the plan needs: `JavaMap$Entry[]` →
`Map$Entry[]` OK, reverse fails with TS2322/missing `getKey` — so `entrySet()` output
flows into `Map.ofEntries(...)`, and only the (rare) reverse junction needs a cast.

**Holes found:**

1. **`keySet(): K[]` / `values(): V[]` / `entrySet(): JavaMap$Entry[]` contradict the
   plan's own empirical anchor and are probably a runtime lie.** The plan's cited
   precedent — the F8 localStorage facade, "runtime-verified" — deliberately types
   these `any` with the comment "a live Java Collection view"
   (`fix-binding-types.py:140-144`). GraalJS array-maps `java.util.List` and Java
   arrays; a host `Set`/`Collection` gets **no** `.length` and no index access
   (for-of may work via the host-iterator protocol; `ks[0]`/`ks.length` will not).
   Typing them `K[]` in a plan whose stated purpose is *truthful* renderings re-imports
   the exact class of lie A13 exists to remove — and this is the one member set the
   in-repo precedent explicitly refused to type. **Required:** the §6-step-1 runtime
   probe must cover `keySet().length`, `keySet()[0]`, and `for...of keySet()` — and
   the shape must follow the probe (candidates: `K[]` only if the probe passes;
   otherwise a minimal `JavaCollection<T>`/`JavaSet<T>` sibling interface, or the F8
   `any`). Do not ship `K[]` on the current evidence.
2. **Dry-run fidelity gaps must be pre-registered, or post-regen divergence triage
   (step 6) will cry wolf.** Two systematic divergences between the textual
   simulation and the real generator output:
   - The 8,264 fallback sites rewrite to `JavaMap<string, any>` (via the
     index-signature rule) but the generator will emit `JavaMap<any, any>`. Textually
     the two populations (`arg-count<2` fallback vs a genuine `Map<String, Any>`)
     are indistinguishable. Direction of error is safe — `string` in K-position is
     strictly less permissive than `any`, so the dry-run over-counts errors — but the
     plan should say so, and the step-6 "investigate any divergence" instruction
     needs an explicit carve-out for this class.
   - TSDoc/KDoc comment text containing `Map<...>` will be rewritten (and can
     trigger a spurious `import type { JavaMap }` prepend on files whose only hit is
     in a comment). Harmless to the gate (comments don't typecheck; unused imports
     don't error in .d.ts and Part C only validates the specifier resolves), but
     another pre-registered divergence class.
3. **Commit-1 sequencing wastes a cold regen.** Step 2 regens just to add one
   constant file ("regen adds exactly one file, zero baseline movement") — and by
   the plan's own §6-step-5, any generator change is a cold multi-hour run. The
   backlog's "add the ambient JavaMap first" is satisfied by *commit* order; the
   dry-run already validates the hand-written `JavaMap.d.ts` in situ. Land commit 1
   and commit 2 with a **single** regen after commit 2. If an intermediate artifact
   is wanted, note that commit 1 alone is regen-free (typings unchanged until the
   flip).
4. Minor, note-only: `usesJavaMap = true` fires on every `mapFromKType` call,
   including speculative `formatKType` evaluations whose rendered string is later
   deduped/discarded → possible unused imports. Harmless (same reasoning as hole 2b)
   but worth one code comment.
5. Operational nit shared with A15: "run the existing gate against the rewritten
   copy" — `tools/typecheck.mjs` resolves the repo root from its own `__dirname`
   (line 47); there is no target-dir flag. The scratch copy must be a full repo
   skeleton (tools/ + typings/ + tsconfig), not just `typings/`. The plan's "copy
   the repo (or just typings/ + gate driver)" should drop the "or just".

**Baseline-impact realism:** this is the one plan whose bounding experiment genuinely
answers the wave-3 lesson. The dry-run rewrites the whole tree the way the generator
would and runs the *real* four-part gate over it — a cross-hierarchy cascade of the
A15 type would show up in the Part-D per-code diff before any JVM work happens. The
directional predictions (TS2416/17/30 shrink from heritage unification, TS2344
neutral, junction growth risk) are correctly labeled as predictions to be measured.
With holes 1-2 fixed, the experiment is a real positive control.

**Risk executing as written: MODERATE** (largest churn of the four; the `K[]` shape
is the one thing that could ship a new lie into 62k files). With the required
corrections: acceptable. The F1 fallback (flip only the JS-global `Map<K,V>` branch)
is a genuinely useful pressure-release valve and correctly characterized as a strict
subset.

---

## A15 — nashorn bean-property dual

### Verdict: SOUND (scoped recommendation; small corrections)

The empirical reconstruction of the wave-3 failure is verified in the tree:
`Entity.d.ts:564 isAttackable(): boolean` + `LivingEntity.d.ts:250 attackable():
boolean` (and the ArmorStand override), the disabled call site at
`TypeScriptGenerator.kt:776-785`, `nashornBeanPropertiesOf` at 1683. The variance
table matches my independent scratch results (property-vs-method TS2416; method
bivariance). The leaf argument for `Minecraft` is confirmed: **zero** `extends
Minecraft` hits in the tree, `getConnection(): ClientPacketListener | null` at
`Minecraft.d.ts:291`, no existing `Minecraft` augmentation to conflict with (only
ClientLevel/ScriptMode/ScriptModule/ScriptReflectionUtil exist). The
recommendation itself — kill the tree-wide dual, ship a curated allowlist through the
augmentation layer with a checker that fails the regen loudly on version-bump drift —
is the most defensible engineering judgment in the four plans: it converts the
predicate's worst property (silent truth-value churn across MC versions) into a gate.

**Holes / corrections:**

1. **The SAFE predicate is nominal-only; say so.** It quantifies over classes "whose
   superclass chain contains C". TS is structural: a leaf-class injection can still
   break (a) hand-written structural stand-ins (mocks/object literals assigned to
   C-typed positions) and (b) class↔merged-interface conflicts. For the *scoped*
   path both are caught by the gate's surface section (the plan says this), so the
   verdict stands — but if the checker is ever promoted to leaf-wide mass injection
   (§6's "data-backed decision"), the predicate alone is NOT the safety argument;
   the full-tree typecheck is. One sentence in §1 prevents a future reader from
   trusting the predicate beyond its warrant.
2. **"Expected impact: zero" is a prediction — but this plan uniquely earns it**,
   because §4's experiment typechecks the *entire modified tree* with the real gate
   before any regen. Asked the calibration question — "would this experiment have
   caught the wave-3 +84?" — the answer is yes: the +84 was internal to the tree and
   a full-tree Part-D run on the augmented copy reproduces it. This is the positive
   control the other impact claims lack. Keep the requirement "zero new surface
   entries AND zero transitive growth" as a hard gate, not a soft target.
3. Operational: same `typecheck.mjs` `__dirname` issue as A13 hole 5 — the §4
   copy must include the repo skeleton. Also: the full-tree tsc on the copy is a
   multi-GB single process on a no-swap VM; the plan says memory-capped/serial —
   enforce it.
4. **The generator comment edit (step 4) busts the ModuleCache by itself.** A
   comment-only change to `TypeScriptGenerator.kt` changes the jar sha → the step-5
   "full run-regen.sh once" is a *cold* run whose only typings-side diff is one
   augmentation file. Batch that comment change with whichever generator-touching
   plan lands adjacent (A11 or A17), or accept the cost knowingly.
5. The runtime spot-check (does GraalJS in LB's host-access config actually serve
   `mc.connection`?) is correctly placed *before* shipping — it is the only guard
   against typing a property the runtime doesn't serve, and it must include the one
   writable candidate (setter dispatch differs from getter dispatch).
6. Candidate hygiene: `ClientPacketListener`/`LocalPlayer`/`ClientLevel` are
   labeled "candidates to evaluate, not commitments" with the tooling as arbiter —
   correct; do not let them ride along on the Minecraft evidence.

**Risk executing as written: LOW** (scoped path). The §6 "don't ship tree-wide"
recommendation survives adversarial pressure: the strongest argument is not the +84
(fixable) but the stability economics — properties appearing/vanishing per MC bump is
strictly worse for script authors than a stable documented getter rule, and no
experiment can fix that; only the allowlist-gate design does.

---

## A17 — emission nits (N1-N4)

### Verdict: NEEDS-REVISION

All four symptoms verified in the shipped tree: N1 (`TagEntityEvent.d.ts` — method at
line 15, property gone, `PriorityField` import dangling at line 5); N2
(`ClientModule.d.ts:68 enabledEffect(): void`; zero `isSuspend` in the generator);
N3 (`MutableComponent.d.ts:33/35` interface statics; merge at 997-1006; A14 call site
passes `emptyList()` at line 305); N4 (all four dangling refs reproduce with
fixed-string grep — `ExecutionSequencer$1` at TaskNonReentrantExecutor:8,
`BoundMethodHandle$Specializer` at SpeciesData:8, `Maps$1`, and
`BestCandidateSampling$1` present in `registry-full`; `DefaultConstructorMarker` in
exactly 170 files as claimed). N3's fix is correct Java semantics and my grep found
zero `.literal(`/`nullToEmpty(` call sites in `__smoke`/`augmentations`/`examples`,
so the "deletions-only" impact shape is credible.

**Holes found (two are concrete falsifications):**

1. **N4 piece 1's `private constructor()` sentinel is empirically wrong and will
   mint TS2675s.** Scratch-verified: `class P { private constructor() {} } class Q
   extends P {}` → TS2675; `protected` → clean. And the tree contains exactly the
   triggering population: classes whose *every* ctor is a synthetic
   DefaultConstructorMarker ctor **and** which are extended — concretely
   `LazyJavaScope` (extended by `LazyJavaClassMemberScope.d.ts:35` and
   `LazyJavaStaticScope`) and `FunctionTypeKind` (extended by its four `$Function`
   nested classes), from my scan of the 170 marker files. The generator's own W-#14
   comment in `constructorsOf` (lines 1117-1131) warns about precisely this failure
   mode ("breaks every subclass with TS2675"). **Required correction: the sentinel
   must be `protected constructor()`** (blocks external `new`, allows extends), or
   reuse W-#14's uniformVisibility logic. Whether these files sit inside Part D's
   closure is irrelevant — don't emit known-invalid d.ts and hope skipLibCheck hides
   it; that's the exact blind spot N4 exists to close.
2. **N1's proposed collision predicate has two implementation bugs.**
   (a) `it !== property.javaGetter` — `Class.getMethods()` returns **fresh Method
   copies per call**, so reference identity never matches anything; the guard is
   dead code. Harmless in the common case only because the getter is named
   `getColor` while the property is `color`, but it silently misfires for
   `@get:JvmName`-renamed getters. Compare by name + parameter count instead.
   (b) `property.javaGetter!!` — `propertiesOf` wraps its whole body in broad
   catches (lines 1648-1663) that return `""`; a single NPE from a getter-less
   property (Introspector can synthesize write-only descriptors) silently deletes
   **every property of that class** from the typings. Use a safe call.
3. **N1's scope is unmeasured.** "Expect a handful of files" leans on "F7's dropped
   1000 fields is dominated by raw Java fields" (regen log: "F7 changed 695 files;
   dropped 1000 fields, 129 methods") — but the bean-property subset of those 1000
   is not measured anywhere, and the committed tree can't show it (the fields are
   already dropped). Since N1 adds members tree-wide wherever the collision fires,
   it is a miniature A15: a new `getX()` in a base class with a same-name
   incompatible member somewhere in the emitted subtree is a TS2416. Getter names
   make this far less likely than bean names, but the wave-3 lesson is that
   "unlikely" is not a measurement. Cheap bound: instrument the fix to log every
   (class, getter) it adds during the regen, and triage that list in the baseline
   review; or pre-count by running F7's collision detector over the pre-F7 `$OUT`
   of the next regen before promoting.
4. **N2's scale estimate is LB-blinkered.** "~100-170 decl lines" comes from LB's
   118 suspend fns / the script-facing manifest's 168 overloads — but the emitted
   tree includes **kotlinx.coroutines** (part of 1,201 kotlinx files), whose public
   surface is suspend-dense (`join`, `await`, `send`, `receive`, `lock`, `delay`
   across many classes), plus any other Kotlin dependency. The real flip count is
   plausibly several hundred to low thousands of lines. Mechanically identical and
   still safe (both sides of every override chain render from KFunctions and flip
   together; scratch-verified that `$completion` as a param name and
   `Continuation<void>` as a type argument are legal and that an object-literal
   `{ resumeWith }` caller typechecks) — but the baseline-review budget and the
   "moderate" label need the honest number. Also note `Unit` maps through the
   predefined mapping to `void`, so the sketch's `createType(...(returnType))` for
   Unit-returning fns yields `Continuation<void>` — fine, but assert it in the
   regression test.
5. N2 rider is fine: `.*[$]suspendImpl` fits `SYNTHETIC_MEMBER_REGEX`'s
   shape (2148-2151), and only 7 shipped files contain `$suspendImpl` — small,
   verifiable deletion.
6. N3: one unstated verification — the claim "runtime-broken today" for
   implementer-statics is Java-semantics-derived, not LB-runtime-observed. It is
   almost certainly right (GraalJS `Java.type` statics follow the class's own
   statics), but a one-line runtime probe in the pre-ship script costs nothing and
   this repo has been burned by "almost certainly" before.
7. N4 piece 2/3 are sound; the `check-output-sanity.py` extension **with the
   pre-fix positive control** (must flag exactly the 4 known refs on the current
   tree) is exactly the right methodology — the only plan section that ships its own
   positive control. Keep it.

**Baseline-impact realism:** N3/N4 are deletions/hygiene with bounded, enumerable
diffs — credible. N1/N2 are additive and unmeasured (holes 3-4) — treat their §
"Baseline impact" lines as hypotheses; the single-regen batching means diff-shape
triage (deletions vs `?` vs Continuation flips vs getter adds) is what keeps the four
sub-changes attributable. That works, but only if N1's added-getter log (hole 3)
exists.

**Risk executing as written: MODERATE** — specifically the TS2675 sentinel (would
ship invalid d.ts) and the N1 `!!` (could silently delete properties). With the two
corrections: LOW-MODERATE.

---

## Cross-cutting

- **Cold-regen economics are misstated or unstated in three of four plans.** Any
  `TypeScriptGenerator.kt` edit (even a comment) changes the jar sha and voids the
  whole ModuleCache (`ModuleCache.kt:14`). A11 claims ~6 min; A17 says "one regen at
  the end" without pricing it; A15's comment-only edit triggers one. Only A13 prices
  it correctly. Executing the plans independently costs 3-4 cold runs of several
  hours each on a shared no-swap VM.
- **Attribution vs batching tension:** batching generator changes into one regen
  saves hours but merges the baseline diffs. Mitigation: the diff *shapes* are
  disjoint (A11 = `?` insertions; A17-N3/N4 = deletions; A17-N2 = suspend flips +
  Continuation imports; A17-N1 = getter additions; A13 = the Map flip), so a
  shape-sorted diff review keeps attribution — provided A13 is NOT in the batch (its
  ~17k-line churn would drown everything, and it has its own dedicated dry-run
  predictor precisely so it can land alone).
- **A13's `JavaMap$Entry` does not reintroduce the A15 cascade.** The A15 failure
  needed an *emitted subtree* below the injected class; `JavaMap$Entry` is a
  hand-authored interface nothing extends or implements in the generated tree — leaf
  by construction, cascade-free. Verified reasoning, plus the assignability probe
  above.
- **A17-N1 is a small A15 and should inherit A15's discipline** (member injection
  justified per-class, cross-hierarchy effects unmeasured). It doesn't need the full
  SAFE predicate — getter-name collisions are rare — but it does need the added-member
  enumeration from A17 hole 3 before the baseline is accepted.
- **Interactions that check out:** A11's existence check ignores synthetic methods →
  consistent with A17-N4's synthetic-ctor filter; A11's constructor rider counts
  arities against `java.constructors` where the marker ctor differs in arity → no
  interference. A13 after A17-N2: `Continuation<JavaMap<...>>` type args route
  through `formatKType` → `mapFromKType` → the import flag fires; order-independent.
  One sequencing rule: **A13's dry-run must be re-run against the tree state it will
  actually land on** (i.e. after the A11/A17 regen), or its predicted-vs-actual
  comparison in step 6 is polluted by the other plans' diffs.
- **Shared operational fix:** `tools/typecheck.mjs` has no target-dir flag
  (`__dirname`-relative repo root) — both A13's and A15's scratch-copy experiments
  must copy the repo skeleton, or a tiny `--root` flag should be added first (it
  would pay for itself across both).
- **VM constraints bind everywhere:** cold regens, 63k-file tsc runs, and the A15
  experiment are each multi-GB; strictly serialized, memory-capped, per repo policy.

## Recommended execution order

1. **A15 scoped (minus its generator comment edit)** — post-patches/augmentation
   only, no cache bust, its offline experiment is the strongest pre-regen control of
   the four, and it needs no regen until promote time. Hold the generator comment
   edit for step 2's batch. (Runtime probe for `mc.connection` first.)
2. **A17 (with the two corrections: protected sentinel, N1 predicate/`!!` fixes,
   plus the N1 added-getter log) + A11 (as revised) + the A15 comment edit, one
   batched cold regen.** Rationale: all are generator-side, small-to-moderate,
   with disjoint diff shapes for attribution; batching converts three cold regens
   into one. Within the batch keep the plan-internal order A17 proposes (N3 deletion
   first) and A11's unit tests before the regen. Run the N4 sanity-scan positive
   control on the *current* tree before this regen, per the plan.
3. **A13 last, alone** — after its shape is revised per hole 1 (keySet/values/
   entrySet runtime probe drives the shape), its dry-run re-based on the post-step-2
   tree, and its two commits landed with a **single** cold regen. It is the largest
   churn and the only change with a dedicated textual predictor; landing it on a
   quiet baseline is exactly what the original deferral prescribed.

Do not interleave anything heavy with steps 2-3's regens or the full-tree typechecks
(no swap). Every baseline update remains reviewed-only, never blind — all four plans
already say this; hold them to it.
