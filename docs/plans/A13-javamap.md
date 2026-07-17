# A13 fix plan — `JavaMap<K, V>`: truthful Java `Map` renderings

Status: **plan only** (read-only investigation 2026-07-17; nothing implemented).
Backlog: [`docs/backlog.md`](../backlog.md) A13, deferred from wave 3 with the
instruction: *add the ambient `JavaMap<K,V>` first, then switch `mapFromKType`
+ the fastutil fallback in one commit with a dedicated baseline review.* This
plan follows that ordering and adds the missing piece the deferral asked for:
a way to **bound and verify the baseline impact before the regen**.

## 0. Problem recap and current-tree measurements

`mapFromKType` (`generator/src/main/kotlin/me/ntrrgc/tsGenerator/TypeScriptGenerator.kt:653-680`)
is the **single funnel** for every Java/Kotlin `Map` reference rendering
(instance members, statics via A12's KType path, heritage clauses, functional
interface arrows all reach it through `formatKType`; heritage additionally
strips `Map` supertypes at lines 690-699). It emits three forms; counts below
are from the committed `typings/types/` tree (62,920 files), 2026-07-17:

```
form                                     occurrences   notes
{ [key: string]: V }  (typed)            3,496         string-keyed maps (11,760 total minus fallback)
{ [key: number]: V }                       218         number-keyed maps
{ [key: string]: any } (arg-count<2)     8,264         fastutil primitive maps, raw Maps, Map subtypes
Map<K, V>             (JS-global, no     5,224         object/enum-keyed maps, across 1,994 files
                       import)
total renderings to change              ~17,200        across 7,441 distinct files
```

At runtime (GraalJS, full host access + nashorn-compat — see
`typings/README.md:63`) these values are **host `java.util.Map` objects**:
`.get(k)`, `.put(k,v)`, `.containsKey(k)`, `.size()` work; bracket indexing
and the JS-`Map` surface (`.set`, `.get`-with-JS-semantics, `.size` as a
property) do not. Empirical anchor already in-repo: the F8 `localStorage`
facade (`tools/regen/fix-binding-types.py:120-160`) hand-types the same kind
of object (a `ConcurrentHashMap`) with exactly the method surface, and
`examples/typing-verify/src/main.ts:37-39` exercises `put/get/size()` as a
runtime-verified consumer. So the current types lie both ways: index
signatures invite bracket access that returns garbage, and `Map<K,V>` names a
real TS lib type whose entire API is wrong.

## 1. Target shape

One hand-authored declaration file (content below **validated with a scoped
`tsc --strict --skipLibCheck false` probe** in `/tmp/a13-probe`: compiles
clean; `get/put/forEach/keySet/entrySet`, nested maps and optional chaining
typecheck; bracket indexing, `.set(...)`, and `.size`-as-property all fail as
intended):

```ts
import type { Object } from './java/lang/Object.d.ts'

/**
 * The GraalJS host surface of a `java.util.Map` instance. Method calls only:
 * NO bracket indexing (`m["k"]`), NO JS-`Map` API (`.set`, `.size` property),
 * NO `for...of` / spread. Collection views render as arrays, matching the
 * tree-wide Iterable convention.
 */
export interface JavaMap<K, V> extends Object {
    /** Value for `key`, or `null` if absent. */
    get(key: K): V | null;
    /** Stores `value`; returns the previous value or `null`. */
    put(key: K, value: V): V | null;
    /** Stores only if absent; returns the existing value or `null`. */
    putIfAbsent(key: K, value: V): V | null;
    putAll(map: JavaMap<K, V>): void;
    /** Removes `key`; returns the removed value or `null`. */
    remove(key: K): V | null;
    containsKey(key: K): boolean;
    containsValue(value: V): boolean;
    clear(): void;
    size(): number;
    isEmpty(): boolean;
    keySet(): K[];
    values(): V[];
    entrySet(): JavaMap$Entry<K, V>[];
    getOrDefault(key: K, defaultValue: V): V;
    /** Replaces the value only if `key` is currently present. */
    replace(key: K, value: V): V | null;
    compute(key: K, remap: (key: K, value: V | null) => V | null): V | null;
    computeIfAbsent(key: K, mapping: (key: K) => V): V;
    computeIfPresent(key: K, remap: (key: K, value: V) => V | null): V | null;
    merge(key: K, value: V, remap: (oldValue: V, newValue: V) => V | null): V | null;
    /** NOTE: Java argument order `(key, value)` — the OPPOSITE of JS `Map#forEach`. */
    forEach(action: (key: K, value: V) => void): void;
}

/** A `java.util.Map.Entry` as GraalJS exposes it: Java methods plus the
 *  nashorn-compat bean-property duals (A15 convention). */
export interface JavaMap$Entry<K, V> extends Object {
    readonly key: K;
    readonly value: V;
    getKey(): K;
    getValue(): V;
    setValue(value: V): V | null;
}
```

Design decisions, with rationale:

- **Member list** mirrors the F8 `localStorage` facade (empirically verified
  at runtime) plus the A11 additions (`compute*`, `merge`, `replace`,
  `entrySet`, `keySet`, `values`, `forEach`) — but **typed** (`K`/`V` instead
  of `any`/`string`).
- **Nullability**: `get`/`put`/`putIfAbsent`/`remove`/`replace`/`compute*`/
  `merge` return `V | null` (absent key / no previous mapping). If `V` already
  carries `| null` from the generated type argument the union collapses —
  harmless. `getOrDefault` is non-null by contract.
- **Key parameters typed `K`, not `unknown`**: Java's `get(Object)` accepts
  anything, but strict `K` catches real key-type bugs. Knob: if
  consumer-simulation shows friction on erased `Object | null`-keyed maps
  (string keys not assignable to the generated `Object` interface), loosen
  the *read-only* lookups (`get`/`containsKey`/`remove`/`getOrDefault`) —
  keep `put` strict.
- **`extends Object`** (the generated `java/lang/Object.d.ts`:
  `equals/hashCode/toString`): host maps ARE Java objects; without this,
  passing a map to any `Object`-typed parameter is a new TS2345. The import
  is the safest possible coupling — every generated class file already
  imports `java/lang/Object.d.ts`.
- **`entrySet(): JavaMap$Entry[]`** is self-contained rather than importing
  the generated `java/util/Map$Entry.d.ts`, because that file is rendered
  from *Kotlin's* `Map.Entry` and (per the A15 Kotlin-property-only decision)
  has **only** `readonly key/value` — no `getKey()/getValue()`, which are the
  Java-idiomatic runtime calls. `JavaMap$Entry` declares both duals.
  Consequence: not nominally assignable to `Map$Entry` (missing nothing
  structurally except what `extends Object` provides — actually assignable
  in most positions since `Map$Entry` only has `key`/`value` + `Object`
  members, which `JavaMap$Entry extends Object` covers); verify with a probe
  line in the dry-run, note cast guidance in README if it fails.
- **No `[Symbol.iterator]`, no index signature.** Host maps are not
  JS-iterable, and TS2411 forbids an index signature coexisting with the
  method members anyway.

## 2. Where it lives and how 62k files reference it (the crux)

**Decision: a generator-emitted synthetic module at `types/JavaMap.d.ts`
(tree root), referenced by a normal relative `import type` line that the
generator injects into every module that rendered a map.**

Why this and not the alternatives:

- **Not a global/ambient script**: a `.d.ts` with no imports inside `types/`
  would be global for the *internal* gate, but consumers who deep-import a
  single class file (the package exposes `types/*` via `typesVersions`,
  `typings/package.json`) would silently resolve `JavaMap` to an error-`any`
  under their universal `skipLibCheck: true` — the exact silent-degradation
  failure mode the gate's Part C exists to prevent. Triple-slash references
  would fix that but are nonstandard, invisible to Part C, and redundant next
  to the existing import machinery.
- **Not hand-dropped into `typings/types/`**: the promote step is
  `rsync -a --delete "$OUT/types/" typings/types/` (`run-regen.sh:106`) — a
  hand-placed file is deleted on every regen. It must come out of the
  generator (preferred: also fixes raw output, testable in generator unit
  tests) or be written into `$OUT/types/` by `post-patches.sh` (fallback).
- **Not the A14 `java/util/Map.d.ts` module**: reusing the name `Map` would
  shadow the JS global in importing files and keep the misleading name A13
  exists to remove; also reverses A14's instances-never-import-this design.
  **No collision**: A14's statics-only `class Map` stays as is; `JavaMap` is
  a distinct name in a distinct file. Bonus: `Map.of(...)`'s self-referencing
  return type (the TS2315 shadow-hack documented at
  `TypeScriptGenerator.kt:297-301`) now renders `JavaMap<K, V>` — *more*
  truthful (the returned instance has the instance surface, which the
  statics-only class deliberately lacks). Update that comment; keep the
  declared type parameters (still used by the static generic signatures).

Mechanics (all verified against the current code):

- Path `JavaMap.d.ts` at the `types/` root: no generated file exists at root
  today (only package dirs), no default-package class in the current jar set,
  and root placement makes the import path computation identical to the
  existing one: `"../".repeat(depth) + "JavaMap.d.ts"` where
  `depth = path.count { it == '/' }` (`moduleText`, line 224). Specifier
  style with explicit `.d.ts` extension matches every existing import.
- Name safety: **zero** generated classes are named `JavaMap` (only
  `JavaMapPaletteUtil`, no conflict), and **zero** files currently import a
  class with simple name `Map` (`Map` never enters `dependentTypes` — the
  `shouldIgnoreSuperclass` gate at line 349 excludes it). Defensive: seed the
  W12b `used` set (line 253) with `"JavaMap"` when the module uses it, so a
  future dependent class named `JavaMap` gets aliased to `JavaMap_2`; assert
  in `definitionsAsModules` that no real module claimed the `JavaMap.d.ts`
  path (log loudly and rename ours if a default-package `JavaMap` class ever
  appears).
- Emission is **unconditional** (not "only if some module used it"): with a
  warm `ModuleCache`, reused `moduleText`s carry the import line verbatim
  while no fresh module sets a usage flag — the file must always exist.
  Simplest correct implementation: prepend a constant entry in
  `definitionsAsModules` (line 2238):

  ```kotlin
  val definitionsAsModules: Map<String, String>
      get() = mapOf(JAVA_MAP_MODULE_PATH to JAVA_MAP_MODULE_TEXT) +
          modules.map { it.value.path to it.value.moduleText }
  ```

- Downstream tooling is already compatible:
  `generate-java-type-registry.py` only registers `export class` files
  (interfaces skipped — no bogus `Java.type` entry); the typecheck gate needs
  **no changes** (Part B parses the new file, Part C validates the new import
  specifiers, Part D pulls it in transitively); `typings/package.json`'s
  `files`/`typesVersions` globs (`types/**/*.d.ts`, `types/*`) already cover
  a root-level file.

## 3. Precise `mapFromKType` and module changes

`TypeScriptGenerator.kt`, all inside the `TypeScriptModule` inner class:

1. New module field `private var usesJavaMap = false` (survives the W12b
   second `generateDefinition()` pass — setting it twice is idempotent; the
   lazy `moduleText` evaluates after `init` completes, so the flag is final).

2. `mapFromKType` (lines 653-680) — the two key-kind branches **merge**:

   ```kotlin
   private fun mapFromKType(kType: KType): String {
       usesJavaMap = true
       // Maps whose own type-argument count isn't 2 (fastutil primitive maps,
       // raw Map usage, Map subtypes that fix K/V): the true K/V is not
       // recoverable from the class's own arguments — see §4.
       if (kType.arguments.size < 2) return "JavaMap<any, any>"
       val keyType = formatKType(kType.arguments[0].type ?: KotlinAnyOrNull)
       val valueType = formatKType(kType.arguments[1].type ?: KotlinAnyOrNull)
       return "JavaMap<${keyType.formatWithoutParenthesis()}, ${valueType.formatWithoutParenthesis()}>"
   }
   ```

   The string/number-keyed index-signature special case disappears; the
   existing "no enum-key mapped type" comment (lines 666-671) becomes moot
   (delete). Nested maps recurse naturally
   (`JavaMap<string, JavaMap<string, V>>`).

3. `moduleText` (lines 223-241): prepend the import when used:

   ```kotlin
   val javaMapImport = if (usesJavaMap)
       "import type { JavaMap } from '${"../".repeat(depth)}JavaMap.d.ts'\n" else ""
   ```

   (`JavaMap$Entry` is only referenced inside `JavaMap.d.ts` itself — no
   generated signature ever names it, so import only `JavaMap`.)

4. W12b seed (`init`, line 253): `val used = mutableSetOf(klass.binaryName())`
   → also add `"JavaMap"` (unconditionally is fine and simpler than gating on
   the flag, which isn't final until after the first render pass).

5. Companion constants `JAVA_MAP_MODULE_PATH = "JavaMap.d.ts"` and
   `JAVA_MAP_MODULE_TEXT` (the §1 content), plus the `definitionsAsModules`
   change from §2.

Untouched interactions, verified: `shouldIgnoreSuperclass` (line 2055) and
the heritage strip (697-699) unchanged — Map classes still emit statics-only
modules (A14) and never enter `dependentTypes`; `isSelfIterable` (2048) is
Iterable-only, no Map analogue exists or is needed; the `catch` fallback to
`nonPrimitiveFromKType` at line 394 still applies if `mapFromKType` throws
(it can no longer throw on arity, so effectively dead but harmless).

## 4. The `< 2 args` fallback: `JavaMap<any, any>`

Today's `{ [key: string]: any }` (8,264 sites) is wrong about **both** the
surface and the key type. `JavaMap<any, any>` is truthful about the surface
and honest about not knowing K/V — strictly better, and `any` params make it
bivariantly compatible at nearly every junction (low churn risk).

Important nuance discovered during investigation: this branch is **not just
fastutil**. `kType.arguments` are the *class's own* type parameters, not the
resolved `Map<K,V>` instantiation — so it also catches raw `Map` usage and
any Map subtype fixing K/V (and worse, a 2-arg subtype whose own params are
not in Map's K,V order is silently mis-projected today). The *correct* K/V
recovery is a supertype walk: locate `kotlin.collections.Map` in
`classifier.allSupertypes`, substitute the reference's actual arguments
through the type-parameter chain. That is real machinery with its own edge
cases (fastutil's key is a primitive absent from the arguments entirely;
`Object2IntMap<K>`'s single arg is the KEY, `Int2ObjectMap<V>`'s is the
VALUE). **Decision: ship `JavaMap<any, any>` in A13; file the supertype
projection as a follow-up backlog item** (it then also fixes the 2-arg
mis-projection case for free). Do not name-sniff fastutil classes.

## 5. Expected baseline impact and how to bound it

Current Part D transitive ratchet (`typings/__smoke/semantic-baseline.json`):
~720 errors, dominated by TS2416 (353), TS2344 (137), TS2420 (118), TS2417
(51), TS2430 (41). Surface list: 7 entries, none map-related.

Directional analysis (predictions to be *measured*, not asserted):

- **Shrink expected — TS2416/TS2417/TS2430**: the largest class of current
  map-caused override errors is *rendering divergence within one hierarchy*:
  a generic super member `Map<K, V>` renders as JS-global `Map<K,V>` while
  the string-instantiated override renders `{ [key: string]: V }` — never
  assignable to each other (probe-confirmed TS2740). After unification both
  sides render `JavaMap<...>` and the instantiated base member is
  *identical* to the override — those errors vanish.
- **Neutral-to-mixed — TS2344**: `T extends Map<...>`-shaped constraints and
  their arguments flip together; probe shows `JavaMap<string,V>` is NOT
  assignable to `JavaMap<Object|null,V>` (TS2322: `string` ↛ `Object`), same
  as the status quo ante for the equivalent forms, so K-mismatch sites move
  between codes rather than multiply.
- **Growth risk — TS2322/TS2345/TS2739/TS2740 at hand-written↔generated
  junctions**: grep confirms **zero** `Map<`/`[key:` usages in
  `ambient/ambient.d.ts`, `augmentations/*`, and all `__smoke/*.test.ts`, and
  the two script-surface map-typed hot paths (`PolyglotScript$RegisterScript
  .apply`, `ScriptMode` constructor/`settings`) are augmentation-covered — so
  Part A should stay green. Residual risk is inside Part D's transitive
  closure only.
- **Must stay flat — TS2304/TS2305**: guaranteed structurally (every
  reference is paired with a generator-emitted import; Part C is
  zero-tolerance).

**The bounding experiment (dry-run; no JVM, no regen, no full-package
typecheck)** — this is the "dedicated baseline review" the deferral demanded,
runnable before touching the generator:

1. Copy the repo (or just `typings/` + gate driver) to scratch; write
   `types/JavaMap.d.ts` (§1) by hand.
2. Textually simulate the regen with a small Python script over
   `types/**/*.d.ts` (rewrite fidelity is high because all three forms are
   syntactically rigid generator output):
   - brace-matched rewrite `{ [key: string]: T }` → `JavaMap<string, T>`,
     `{ [key: number]: T }` → `JavaMap<number, T>` (real brace matcher — `T`
     can nest another index signature);
   - token rewrite `\bMap<` → `JavaMap<` everywhere **except** the
     `export class Map<` declaration line of `java/util/Map.d.ts` (safe:
     zero files import a class named `Map`, checked; rewriting Map.d.ts's own
     static return types matches what the generator will really emit);
   - prepend the depth-correct `import type { JavaMap } ...` line to every
     file now containing `\bJavaMap<`.
3. Run the **existing** gate (`npm run typecheck`, documented ~20 s, the
   normal CI check — not a whole-package semantic pass) against the rewritten
   copy. The per-code diff of Part D's surface + transitive results vs the
   committed baselines **is the expected regen delta**, obtained for free.
4. Review every *surface* delta individually; record the transitive per-code
   delta as the go/no-go input and later as the post-regen cross-check.
5. Optional probes to fold into the same scratch pass: `JavaMap$Entry` →
   `Map$Entry` assignability; erased-`Object|null`-key lookup friction (§1
   knob).

## 6. Implementation + regen + verification sequence

1. **(Recommended) Runtime semantics probe** — extend
   `examples/typing-verify/src/main.ts` with a map-semantics block run
   in-game once: on a real host map (e.g. `localStorage`'s backing map or any
   generated map-returning API), assert `m.size()` works and record what
   `m["someKey"]` / `m.someKey` actually return under LB's nashorn-compat
   context. Outcome affects only README wording (see Risks), not the shape.
2. **Commit 1 (generator)**: emit `types/JavaMap.d.ts` unconditionally
   (§2 mechanics), + unit test asserting `definitionsAsModules` contains the
   file. No references exist yet → regen adds exactly one file, zero baseline
   movement. (This is the backlog's prescribed "add the ambient type first".)
3. **Dry-run experiment** (§5) on the committed tree; review; adjust the
   shape if junction errors demand it (e.g. drop `extends Object`, loosen
   lookup key params).
4. **Commit 2 (generator, the flip)**: §3 changes + regression tests in the
   `wave3RegressionTests` style: (a) `Map<String, X>` member →
   `JavaMap<string, X>` + import line with correct upLevels; (b) 1-arg map
   class → `JavaMap<any, any>`; (c) nested map; (d) object-keyed map; (e)
   `java.util.Map` statics-only module's `of(...)` returns `JavaMap<K, V>`;
   (f) W12b aliasing of a dependent class named `JavaMap`.
5. **Full regen** — generator-jar hash busts the ModuleCache, so this is a
   *cold* run (warm was ~22 min at 99.5 % reuse; budget several hours). Per
   VM policy: run alone, memory-capped, nothing else heavy in parallel.
   Then `post-patches.sh` → promote via `run-regen.sh`.
6. **Verify**: diff the promoted tree against the step-3 dry-run prediction
   (expect near-identical; investigate any divergence — it means the textual
   simulation or the generator did something unmodeled); `npm run typecheck`;
   triage every new **surface** error individually; then
   `typecheck:tighten` if shrunk / reviewed `typecheck:update-baseline` if
   grown (never blind); `tools/package-canary.sh` + compile
   `examples/typing-verify`.
7. **Lock the contract in the gate**: new `typings/__smoke` test against a
   real generated member (e.g. `ScriptMode.settings` or
   `PlatformDependent.newConcurrentHashMap()`'s return): positive
   `get/put/containsKey/forEach/keySet`, `@ts-expect-error` on bracket
   access, `.set(...)`, and `.size`-as-property.
8. **Docs + release**: `typings/README.md` map-semantics section (mirroring
   the existing getter/property-duality note); mark A13 `[x]` in
   `docs/backlog.md`; version bump with an explicit breaking-change note
   (consumer code doing bracket access on map-typed values now errors — by
   design, it never worked at runtime).

Ship each landed commit per repo policy; steps 2 and 4 are the two commits
the deferral note prescribed.

## 7. Risks, and the conservative fallback

- **Parameter-position maps** (the one real semantic regression): GraalJS
  target-type mapping accepts a *JS object literal* where a Java method
  expects `Map<String, V>` — an object literal satisfies today's index
  signature but will NOT satisfy `JavaMap`. The script-facing hot paths
  (`registerScript`, `registerMode`) are augmentation-typed and unaffected
  (verified), but deep generated methods taking maps will force
  `Java.type('java.util.HashMap')` or a cast. Follow-up refinement (do NOT
  bundle into A13): position-aware rendering — thread an in/out flag through
  `formatKType` exactly like the existing `isInTypeConstraint` parameter and
  emit `JavaMap<K,V> | { [key: string]: V }` for string-keyed *input*
  positions only.
- **Nashorn-compat property reads**: if the step-1 probe shows `m.key` /
  `m["key"]` DO read entries under LB's context flags, the decision stands
  (the method surface is required regardless, and TS2411 forbids mixing an
  index signature with methods) — but the README must then document
  "property reads work at runtime but are deliberately untyped; use
  `.get()`".
- **`JavaMap$Entry` vs generated `Map$Entry`** at nominal junctions
  (`Map.ofEntries(map.entrySet())`-shaped code): likely assignable via
  `extends Object` + key/value props; verify in the dry-run, document a cast
  if not. Rare pattern; acceptable.
- **Name/path collision** with a future default-package `JavaMap` class:
  guarded by the W12b seed + `definitionsAsModules` assertion (§2).
- **Baseline churn masking other regressions**: this lands alone, after
  wave-3 items are verified — exactly why A13 was deferred. The dry-run
  prediction (§5) doubles as the regression detector: post-regen deltas that
  the simulation did not predict are *not* A13 and must be investigated.
- **Erased-key friction**: `JavaMap<Object | null, V>.get("x")` rejects the
  string — mitigation knob in §1 (loosen read-only lookups to `unknown`).

**Conservative fallbacks**, smallest last:

- **F1 — flip only the JS-global `Map<K,V>` branch** (5,224 refs / 1,994
  files, ~30 % of the churn): kills the worst lie (a *named real lib type*
  whose whole API is wrong and which invites `.set/.get` JS-Map usage);
  keeps index signatures for string/number-keyed maps and the `any`
  fallback. Index-sig sites keep their (wrong but permissive) bracket-read
  typing, so near-zero new-error risk outside object-keyed junctions. The
  `usesJavaMap` import machinery is identical, so F1 is a strict subset of
  the full change and can be upgraded later by deleting one branch.
- **F2 — no rendering change**: export `JavaMap` from the ambient/types for
  manual casts + README documentation only. Zero baseline impact, zero fix.

## Appendix: key evidence locations

- `generator/.../TypeScriptGenerator.kt:653-680` — `mapFromKType`; `:391-396`
  — sole caller; `:349` — Map excluded from `dependentTypes`; `:223-241` —
  import emission; `:253-269` — W12b aliasing; `:2055-2070` —
  `shouldIgnoreSuperclass`; `:2238` — `definitionsAsModules`;
  `:287-313` — A14 statics-only rationale.
- `generator/.../NPMPackageGenerator.kt:102-106` — file writer (writes
  `definitionsAsModules` verbatim → synthetic module injection point).
- `run-regen.sh:106` — `rsync --delete` promote (kills hand-dropped files).
- `tools/regen/fix-binding-types.py:120-160` — F8 localStorage facade (the
  runtime-verified member-surface precedent).
- `tools/typecheck.mjs`, `docs/typecheck-gate.md` — the four-part gate reused
  by the §5 dry-run.
- `typings/types/java/util/Map.d.ts`, `Map$Entry.d.ts`,
  `java/lang/Object.d.ts` — A14 statics-only class, Kotlin-rendered entry
  (no `getKey()`), Object instance surface.
- Scoped probe (2026-07-17, `/tmp/a13-probe`): shape compiles clean under
  `--strict --skipLibCheck false`; bracket/JS-Map negatives hold;
  `JavaMap<string,V>` ↛ `JavaMap<Object|null,V>` (TS2322); index-sig and JS
  `Map` both ↛ `JavaMap` (TS2740).
