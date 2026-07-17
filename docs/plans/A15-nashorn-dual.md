# A15 fix plan — the Java bean-property dual (`mc.connection` next to `getConnection()`)

Status: **plan only** (nothing here is implemented). Written 2026-07-17 against
generator `035ebe4` / typings `ccce88ed2`.

## 0. What actually broke (empirical characterization)

The wave-3 implementation (`nashornBeanPropertiesOf`, generator
`TypeScriptGenerator.kt:1683`, disabled at the call site `:775-785` by
generator commit `1b78f8f`) injected, for every **Java** class, a bean
property for each declared public zero-arg getter. Its guards check the class
itself and everything **up** the hierarchy (`klass.java.methods` = own +
inherited methods, base-class properties, A3 interface properties). They can
never see **down** the hierarchy — and that is exactly where the damage is.

The canonical failure, reconstructed from the current typings:

- `Entity` declares `isAttackable(): boolean`
  (`typings/types/net/minecraft/world/entity/Entity.d.ts:564`) → injection
  adds `readonly attackable: boolean;` to `Entity`.
- `LivingEntity` — a *subclass* — declares a real, unrelated Mojang-mapped
  method `attackable(): boolean` (`LivingEntity.d.ts:250`; also overridden in
  `decoration/ArmorStand.d.ts:148`).
- TS class heritage requires every derived member to be assignable to the
  same-named base member. `() => boolean` is not assignable to `boolean`.

Verified with a scratch `tsc --strict` (TS from the repo's node_modules) that
this exact shape produces the observed error mix:

- `TS2416` ("Property 'attackable' in type 'LivingEntity' is not assignable
  to the same property in base type 'Entity'") + `TS2425` at the subclass
  declaration, and
- `TS2344` at **every** `<T extends Entity>` instantiation whose type
  argument sits in the LivingEntity subtree ("Type 'LivingEntity' does not
  satisfy the constraint 'Entity'"). `Entity` is a generic bound all over MC,
  so one bad injection fans out — hence +84 in the full regen.

The same scratch experiment nailed the variance rules we must design around
(all under `--strict`, which matches `typings/tsconfig.json`):

| base member              | derived member            | result   |
|--------------------------|---------------------------|----------|
| `readonly x: boolean`    | method `x(): boolean`     | TS2416 + TS2425 (+TS2344 at bounds) |
| `readonly p: Base`       | `readonly p: Sub`         | OK (covariant) |
| `p: Base` (mutable)      | `p: Sub` (mutable)        | OK (TS allows covariant property overrides, even mutable) |
| `readonly x: T`          | `x: T` (mutable)          | OK (readonly is not checked in override/bound compat) |
| `x: T` (mutable)         | `readonly x: T`           | OK |
| `readonly n: T \| null`  | `readonly n: T`           | OK (narrowing) |
| `readonly n: T`          | `readonly n: T \| null`   | **TS2416** (widening) |

Consequences:

1. **readonly-vs-mutable is a non-issue.** The setter-based writability logic
   in `nashornBeanPropertiesOf` can stay as-is; flips in either direction
   across the hierarchy don't error.
2. **Covariant getter returns are a non-issue** — *if* both classes inject
   (or the subclass doesn't re-declare at all, plain inheritance is fine).
3. The only two killers are: (a) a **same-name incompatible member anywhere
   in the emitted subtree** (usually a method, e.g. `attackable()`; also a
   field/Kotlin property of a different type), and (b) a subclass override of
   the getter whose rendered return **adds `| null`** relative to the base
   rendering (Java `@Nullable` annotations surface on some overrides).

## 1. The SAFE-to-inject predicate

For a candidate class `C` and bean name `b` derived from getter `g`
(existing per-class guards assumed passed — they handle everything *upward*):

> **SAFE(C, b)** ⇔ for every class `S` in the **emitted set** whose
> superclass chain contains `C`:
>   1. `S`'s final rendered surface (own members + everything it inherits
>      from classes/interfaces *between* `S` and `C`, and from `S`'s own
>      interfaces) contains **no member named `b`** — method, field, or
>      property — other than the injected duals themselves; and
>   2. if `S` re-declares `g` (an override), the rendered return type of the
>      dual `S` would emit is **assignable** to the one `C` emits.
>      Conservative, cheap version: the rendered type strings are
>      **identical**, or differ only by the *base* being `X | null` and the
>      override `X` (narrowing — legal). Any other difference ⇒ unsafe.

Two corollaries that shape the implementation:

- **Leaf classes are trivially safe.** If `C` has no emitted subclass, the
  quantifier is vacuous. Adding a member to a class never breaks its
  assignability *to* its own bases or bounds (extra members are fine for
  `<T extends Base>`). Scale check on the current tree: **62,920** modules,
  **54,930** class modules, and only ~**3,426** distinct class names ever
  appear on the right of `extends` — i.e. >90 % of emitted classes are
  leaves, including `Minecraft` itself (nothing in the tree extends it, and
  it has ~67 zero-arg getter lines, `getConnection(): ClientPacketListener |
  null` at `Minecraft.d.ts:291` among them).
- **The predicate is only decidable with the whole emitted set in hand.**
  "Subtree" means *emitted* subtree: a subclass that never renders can't
  break anything; conversely Kotlin LB classes extending Java MC classes DO
  render and must be included (a Kotlin subclass property named `b` is a
  collision the Java-reflect guards would never enumerate).

### Where can the cross-class knowledge come from?

The generator is genuinely single-pass: `visitClass`
(`TypeScriptGenerator.kt:2163`) renders the module *eagerly* in the
`TypeScriptModule` constructor and only then discovers dependencies to
enqueue. The full class set exists only after the walk. Worse, the module
cache (`moduleCache.tryReuse`, `:2204`) can serve **text-only**
`CachedModule`s without fresh reflection, so a reflection-based phase 2 must
re-materialize `KClass` handles for cached classes.

Two viable homes:

**(a) In-generator two-phase (Kotlin).** Accumulate `visitedClasses:
MutableSet<KClass<*>>` during the walk (`visitClass` receives the `KClass`
even on the cache path). After the walk: build a parent→children map by
walking each visited class's superclass chain restricted to the visited set;
compute SAFE per candidate; textually inject `    readonly b: T;` lines into
the stored module text (insertion anywhere inside the class braces is valid
d.ts). Constraint: the cache must keep storing **pre-injection** text and
phase 2 must run every time, otherwise a subtree change between runs poisons
a cached base class. Feasible but touches walk/cache invariants and needs
reflection-side re-derivation of "final rendered surface" (fragile: the
rendered surface is also shaped by `fix-member-collisions.py`, `| null`
heuristics, `commentIfInvalid`, …).

**(b) Post-emission pass (Python) in `tools/regen/post-patches.sh`, after
`fix-member-collisions.py`.** The emitted tree *is* the whole-hierarchy
database, already in final form: one class per file, 4-space-indented
one-line members (the exact format `fix-member-collisions.py` already regex
parses), `extends`/`implements` heritage resolvable through each file's
import specifiers (mind `as X_2` aliases), and rendered types with
nullability already decided. SAFE reduces to string operations on the final
surface — no risk of the analysis disagreeing with what was actually
emitted. Crucially, it can be developed and validated **offline against the
committed `typings/` tree with no regen at all** (see §4).

**Recommendation: (b).** The generator's `nashornBeanPropertiesOf` stays
disabled (eventually deleted; its doc comment already captures the Nashorn
semantics — move that to the new pass). Yes, `post-patches.sh:1360` says
collision-fixing should eventually fold *into* the generator — but A15 is
precisely the pass that *needs* whole-tree final-form knowledge, which the
single-pass generator structurally lacks. If the generator ever grows a real
two-phase architecture, migrate then.

## 2. Variance handling (readonly / covariance / nullability)

Follows directly from §0's table:

- Emit `readonly` when no public 1-arg `setX` exists, mutable otherwise —
  unchanged from the reverted code; no cross-hierarchy constraint needed.
- When a subclass overrides the getter, inject the dual **in the subclass
  too** (with the subclass's rendered type). Covariant narrowing, including
  `X | null` → `X`, is then legal. If the override *widens* (adds `| null`
  or changes the type), predicate clause 2 already marked the whole chain
  unsafe → no injection anywhere in that hierarchy for that name.
- Never inject only in the middle of a chain: injection for name `b` is
  computed per *root-most* declaring class and applied uniformly to it and
  every overriding subclass, or not at all.

## 3. Scope: drastically down, then measure

Full-tree injection is technically achievable with §1's predicate but is the
wrong first move:

- **Volume:** ~48,500 zero-arg getter-shaped members tree-wide → tens of
  thousands of new lines, package-size and tsc-memory growth, for classes
  scripts overwhelmingly never touch.
- **Stability (the underrated cost):** SAFE depends on the whole subtree, so
  a routine MC/LB version bump that adds one subclass method can silently
  flip a base class to unsafe — and a property script authors already adopted
  *vanishes* from the typings. The method form never has this problem. A
  mass dual trades a one-time ergonomics win for permanent regen churn.

**Scoped first step: a curated allowlist of script-facing classes,**
shipped through the existing augmentation layer (the `ClientLevel` precedent:
`declare module '…/ClientLevel' { interface ClientLevel { … } }` —
class+interface declaration merging; hand-authored content written
idempotently by `post-patches.sh` (W-#18 block, `:1199`) so it survives the
`rsync --delete` promote in `run-regen.sh:105`).

Initial allowlist (all currently leaves in the emitted set — re-verify at
implementation time):

- `net.minecraft.client.Minecraft` — the `mc` binding; `connection`,
  `options`-adjacent getters etc. This alone covers the motivating
  `mc.connection` case with `readonly connection: ClientPacketListener |
  null` mirroring `Minecraft.d.ts:291` exactly.
- Candidates to evaluate, not commitments: `ClientPacketListener`,
  `LocalPlayer`, `ClientLevel` (non-leaf-ness and `Player`-hierarchy names
  must be checked by the tooling first — LocalPlayer/ClientLevel sit in deep
  hierarchies, so they only pass if their injected names are subtree-clean
  *below* them; as near-leaves they likely are).

`net.ccbluex.*` is **not** a useful scope: LB is Kotlin, Kotlin classes are
correctly property-rendered already, and A15 explicitly excludes them (the
reverse dual is documented-only by design).

Even at allowlist scale, build the **checker** from §1 (not the mass
injector): a small `tools/regen/inject-bean-properties.py` that (i) reads an
overlay JSON `{class → [bean names]}`, (ii) computes SAFE for each entry
against the emitted tree, (iii) writes/refreshes the augmentation file(s) and
barrel imports, and (iv) **fails the regen loudly** if an allowlisted entry
went unsafe after a version bump — that converts the stability hazard into a
visible gate instead of silent breakage.

## 4. Expected baseline impact + verification strategy (no blind regen)

Baseline context: the semantic gate (`tools/typecheck.mjs`, Part D) ratchets
transitive debt per TS code — currently `TS2344: 137`, `TS2416: 353`
(`typings/__smoke/semantic-baseline.json`) — and the debt may only shrink.
The wave-3 attempt's +84 is exactly what the ratchet rejects.

**Expected impact of the scoped plan: zero.** New augmentation members are
checked in the gate's *surface* section (skipLibCheck:false over
`augmentations/`), so a mistake shows up as a named surface entry, not a
transitive count. Allowlisted leaf classes cannot mint TS2344/TS2416 by
construction; the only realistic failure modes are TS2300/TS2717 (name
already present) and TS2430-style interface-vs-class merge conflicts — all
surfaced by the gate.

**Scoped experiment (describe-only here; cheap to run, no regen, no gradle):**

1. `cp -al typings /tmp/a15-exp/typings` (hardlink copy; break links for
   files to be modified) plus `tsconfig.json`/`__smoke`.
2. Apply the candidate augmentation (or, for the full-tree variant, run the
   prospective `inject-bean-properties.py`) against the copy.
3. Run `node tools/typecheck.mjs` pointed at the copy (single run,
   memory-capped per VM policy — this typechecks 63 k files; do not run it in
   parallel with anything else).
4. Diff Part-D output vs the committed baseline: **require zero new surface
   entries and zero growth in any transitive TS-code count.** For the
   full-tree variant additionally record wall-time/RSS and package-size
   delta — those numbers, not intuition, decide whether mass injection is
   ever promoted.

Because the injector operates on emitted text, this loop iterates in minutes
against the *committed* tree — the 6-30 min headless regen is only needed at
ship time to prove promote-pipeline integration.

Additionally, one **runtime spot-check** before shipping: a live LB script
executing `mc.connection` (and one writable candidate) to confirm
GraalJS's bean access actually resolves it in this host-access
configuration — we should not type a property the runtime doesn't serve.

## 5. Implementation → regen → verify sequence (for the scoped plan)

1. Write `tools/regen/inject-bean-properties.py` (overlay-driven checker +
   augmentation writer, §3) + overlay JSON with `Minecraft` entries; wire
   into `post-patches.sh` after `fix-member-collisions.py`; barrel-import the
   new augmentation in `augmentations/index.d.ts` (same idempotent pattern as
   W-#18 / T-#7).
2. Run the §4 offline experiment against a copy of committed `typings/`;
   iterate until clean.
3. Runtime spot-check (§4) via a live script.
4. Update the generator call-site comment (`TypeScriptGenerator.kt:775`) to
   point at this plan + the post-pass; keep `nashornBeanPropertiesOf`
   `@Suppress("unused")` for now (delete once the post-pass ships and the
   backlog entry is closed); keep the locked "dual NOT emitted"
   wave3RegressionTest as-is — it now guards against accidental re-enable.
5. Full `./run-regen.sh` once (sequenced, memory-aware), then the standard
   gates: `typecheck.mjs`, `regen-types-check.sh` self-baseline diff (the
   new augmentation file is an *expected* diff → promote), package canary.
6. Docs: README + typings/README property-first section gains "curated Java
   duals" paragraph; backlog A15 updated to `[~] scoped-shipped`.
7. Commit generator comment change (submodule) and repo change separately,
   push per repo conventions.

## 6. Recommendation: is A15 worth doing at all?

**The tree-wide Java bean-property dual: don't ship it — the documented
method-form convention is the right permanent answer for the mass surface.**
Not because it's impossible (§1's predicate is sound and computable in a
post-pass), but because its steady-state economics are bad: ~48 k injected
lines for surface scripts rarely touch, a safety predicate whose truth value
churns with every MC version (properties silently appearing/disappearing
between releases is *worse* for script authors than a stable, documented
"call the getter" rule), and a second cross-class analysis pass to maintain
forever. The runtime accepts both forms; typing exactly one canonical form
per language (Kotlin → property, Java → method) is coherent and already
documented.

**The scoped allowlist: yes, ship it.** It is cheap (an overlay + a checker
reusing the augmentation machinery that already exists for exactly this kind
of ergonomics repair), it captures nearly all the real-world value of A15
(`mc.<getter>` is *the* idiom scripts reach for; `mc` is a leaf class so it
is provably cascade-free), it converts the version-bump hazard into a loud
regen-gate failure, and it leaves a measured, reversible path: if the
allowlist ever grows past ~a dozen classes and the offline experiment stays
clean, promoting the same checker to leaf-wide injection is a data-backed
decision rather than a hopeful one.

Bottom line: close A15 as "property-first convention stands; curated
augmentation duals for allowlisted leaf classes (starting with `Minecraft`)",
and never re-enable `nashornBeanPropertiesOf` in its per-class form.
