# Type-quality backlog - possible enhancements

Remaining ways to make the generated `.d.ts` better, beyond what
[improvements.md](improvements.md) already ships. This is the **W1-W19 weakness
audit** (from `liquidbounce-helper`'s `types-weakness-audit`, 2026-05-25),
reconciled to current status and carried into this repo now that the typings own
their own pipeline.

Each item notes the **layer** it'd be fixed in:
- **generator** - `generator/` (the Kotlin `TypeScriptGenerator.kt`)
- **post-patch** - `tools/regen/post-patches.sh` / `fix-binding-types.py`
- **extractor** - `tools/kdoc-extractor/` (the PSI manifest feeding `apply-kdoc`)

Legend: `[x]` done / `[~]` partial / `[ ]` not started.

> **Verified open** - every `[ ]` item below was re-checked against the freshly
> regenerated `typings/` tree (2026-06-03); the occurrence counts are from that
> tree, not the original audit.

---

## Keystone - #12b: parameter signature data

> The single highest-ROI change. **Names landed; type substitution still open.**

**[~] #12b - emit real parameter names + types.** The reflection generator can't
recover source parameter names (the JVM erases them to `paramarg0/1...`); the
tree-sitter extractor can.

- **[x] Names (W1).** `tools/kdoc-extractor/ts-extract.py --signatures-out`
  emits a structured signature manifest
  (`tools/kdoc-extractor/signatures.json`: ordered `params[{name,type,nullable,
  vararg}]`, `returns`, `receiver`/`isExtension`, keyed by the owner FQN
  ts-generator emits onto). `tools/regen/apply-signatures.py` (wired into
  `post-patches.sh`) renames `paramargN` -> real names with conservative
  arity-unique matching (extension functions get their receiver at
  `paramarg0`). First pass: **628 decls / 1,558 params across 189 files**;
  verified zero new `tsc` errors. The structured **types** are already captured
  in the manifest, ready for the substitution pass below.
- **[~] Type substitution (W5 + W6) - largely realised elsewhere; residual
  blocked.** Investigated 2026-06-04:
  - **W5 (lambda erasure) is fixed** by the W5a generator work - Kotlin function
    types now render as real arrows with their reflected arg types, not
    `Function*<Object>`.
  - **W6 (bare `Object`) for LB is tiny and not post-patchable.** After #12b
    names + W5a + W12b, only **~299 LB params** are bare `Object`, and under
    strict arity-unique matching the *import-free* subset (primitive or
    already-imported type) is **~0** - the rest are either ambiguous overloads
    (correctly skipped) or need a **new import**. And the import-requiring ones
    are blocked: `signatures.json` stores **simple** type names (`Vec3`), not
    FQNs, so a post-patch can't resolve the import path. A real fix needs
    FQN-aware import resolution in the extractor (resolve each Kotlin source
    import) - a large change for ~31-55 LB sites. The 78k tree-wide figure is
    dominated by **unrecoverable third-party Java erasure**. _Deferred:
    low-ROI; the proper layer is the generator/extractor, not a post-patch._

---

## Tier 1 - UX-blocking

- **[~] W1 - `paramargN` parameter names.** Originally **289,132 occurrences
  across 12,314 files** (~70% of files). **Now landed for LiquidBounce's own
  source** via `apply-signatures.py` (628 decls renamed; LB-source files with
  `paramarg` dropped 506 -> 366). The remainder are (a) same-arity overloads
  left untouched on purpose - see the type-substitution item under #12b - and
  (b) third-party packages (`com.*`, `org.*`, `oshi.*`, ...) that have no source
  in `references/`, so their names are unrecoverable. _Done for LB; bounded by
  source availability. Layer: extractor -> post-patch._
- **[x] W2 - `@deprecated` surfaced.** Done 2026-06-04: `ts-extract.py
  --deprecations-out` captures the `@Deprecated(message, ReplaceWith)`
  annotation (committed `deprecations.json`), and `apply-deprecations.py`
  injects `@deprecated` TSDoc (merging into existing blocks). **12 of 16**
  recovered (up from 1; the other 4 are on constructs outside the member
  surface). _Layer: extractor + post-patch._
- **[ ] W3 - event class docs.** 117 / 121 event classes are undocumented. Either
  hand-write TSDoc for the top ~30 highest-traffic events, or upstream KDoc PRs to
  LiquidBounce. _Layer: extractor + docs._
- **[x] W4 - `ScriptModule.on()` overloads documented.** Done 2026-06-04:
  `apply-event-docs.py` adds `@see {@link <Event>}` (read off each overload) plus
  a one-line summary for the 7 documented event classes. **121** overloads
  documented (the event-less `enable|disable` lifecycle overload is skipped).
  _Layer: post-patch._

## Tier 2 - fidelity

- **[~] W5 - `Function*<Object>` lambda erasure.** **3,376** occurrences (verified). Two parts:
  (a) **Kotlin function types now render as TS arrows** (`(T) -> Unit` ->
  `(param0: T) => void`; suspend types too) instead of nominal `FunctionN<...>`
  / `UNKNOWN` - done in the generator (`kotlinFunctionArrow`, reflection-only,
  recovers the type args reflection already has). (b) Genuinely-erased arg
  *types* that surface as `Object` are the residual - those need the
  type-substitution pass under #12b (`signatures.json`). _Layer: generator (a, done) / post-patch (b)._
- **[~] W6 - bare `Object` returns/params.** **78,340** tree-wide, but
  measured 2026-06-04: **~299 are LB's own** params (the rest unrecoverable
  third-party Java erasure), of which the safely-substitutable subset is **~0**
  via post-patch (see the type-substitution item under #12b - blocked on
  FQN-aware import resolution). The high-value lambda subset (W5) is already
  fixed by W5a. _Deferred; proper layer is generator/extractor._
- **[x] W7 - nullable over-promotion - RESOLVED (not a standalone fix).**
  Re-investigated 2026-06-04: the audit's premise is **stale**. The generator
  *already* drives nullability from `KType.isMarkedNullable`, so LiquidBounce's
  genuine Kotlin nullables (`Vec3 | null`, `Entity | null`, ~2,800 of them) are
  **already correct** and must not be touched. Of the 69,718 `| null`, **66,881
  (96%) are `Object | null`** - a *type-erasure* artifact (generics / `Any?`
  collapsing to the `Object` root type), and `Object` itself is in **65,302**
  third-party sites scripts never import. So there is no safe standalone W7
  change: stripping real nullables is unsound, and blanket-collapsing
  `Object | null` is unsafe in parameter position (it would reject valid `null`
  args). The erasure is a **W6 symptom** - recovering the real type (W6 /
  #12b substitution, and the W5a function-arrow work already shipped) removes
  the `Object` *and* its spurious `| null` together. **Subsumed by W6.**
- **[x] W8 - sealed-class hierarchies - RESOLVED (already works; union unsafe).**
  Re-investigated 2026-06-04: the narrowing this aimed at **already works**. The
  sealed parent is emitted as a class and the subclasses `extends` it
  (`TextureMode$Custom extends TextureMode`), so Kotlin's
  `when (x) { is Custom -> ... }` maps to TS `if (x instanceof TextureMode$Custom)`
  and narrows correctly today (verified with `tsc`). Emitting `type X = A | B | C`
  would **conflict** with the same-named class and **break the `extends` chains**
  (subclasses extend the parent; other types reference it), for the sole marginal
  gain of `switch` exhaustiveness - not worth the breakage. The audit's premise
  ("0 discriminated unions" = a defect) misreads the class hierarchy, which
  already provides instanceof narrowing. **Won't-do.**

## Tier 3 - noise / cosmetic

- **[x] W11 - `$Companion` exports - RESOLVED (reflects the runtime; merge unsafe).**
  Re-investigated 2026-06-04: the current split is **correct for the GraalJS
  runtime**, not noise. Reflection already surfaces `@JvmStatic`/`@JvmField`
  companion members directly on the parent (e.g. `ZipFileSystem` has
  `static RESOURCES`, `static SYSTEM`), while non-static companion members live
  on the `Companion` singleton and are genuinely accessed as `Foo.Companion.member`
  (Kotlin companion functions are instance methods on the companion, not JVM
  statics). Merging all `Foo$Companion` members onto `Foo` would make the types
  claim `Foo.member` resolves when the runtime requires `Foo.Companion.member` -
  a correctness regression. **Won't-do.**
- **[~] W12 - reflection-type leak (`Class<>`, `KProperty`).** *Partial / low
  priority:* `ScriptReflectionUtil` already got typed generic overloads. The
  remaining **4,980** `Class<Object>` sites are **valid TS, just broad** - and
  the imprecision is the same type-erasure (`Object` for an erased arg) tracked
  by W6/#12b, so it's subsumed by that recovery rather than a separate fix. Not
  error-producing; deprioritised. _Layer: generator._
- **[x] W12b - duplicate-name imports (`Duplicate identifier`).** *Discovered
  2026-06-04 while narrowing registerMode.* **562 files** imported two different
  types under the **same simple name** (e.g. `ScriptMode.d.ts` imports both
  `config/types/Value` and `org/graalvm/polyglot/Value` as `Value`), producing
  `TS2300 Duplicate identifier`. **Fixed in the generator:** a two-pass module
  build detects same-simple-name collisions (and collisions with the class's own
  name), aliases the losing types (`Value as Value_2`), and uses the alias at the
  import *and* every reference (`tsNameFor`). Unit test covers import + reference
  aliasing; full suite green. Clears all 562 on the next regen (incl. the
  ScriptMode case behind registerMode). _Layer: generator._
- **[~] W13 - `okhttp3.Response` leak - PREMISE STALE (re-investigated 2026-07-01).**
  The current binding is `ScriptAsyncUtil.request(block: (Request$Builder) => void):
  Value` (script/bindings/api/ScriptAsyncUtil.kt:178) — it returns the opaque
  GraalVM `Value` (a JS Promise), **not** a raw `okhttp3.Response`. The KDoc
  *says* `@return Promise<okhttp3.Response>` but the static type is `Value`, so
  there is **no raw-Response return leak** and the promise resolution is simply
  untyped. okhttp3 appears in the script surface ONLY as the `Request$Builder`
  **parameter** (scripts legitimately call `.url()/.header()/...` on it) — grep
  confirms zero okhttp3 in ambient/augmentations. The envisioned
  `ScriptHttpResponse` facade also does NOT work at the augmentation layer:
  interface-declaration-merge ADDS overloads, so `request(block): Promise<Facade>`
  can't OVERRIDE the generated `request(block): Value` (identical params → the
  original wins). A real improvement (type the promise resolution) would need a
  generator/post-patch that rewrites the return type — a design decision, not a
  mechanical augmentation. Deferred pending a decision on whether to expose the
  real Response or a curated facade + where to define it. _Layer: generator/post-patch, not augmentation._
  **Option B validated (2026-07-01, regen-output only, not shipped):** retyping
  `request(): Value` → `Promise<Response>` + importing okhttp3.Response is NOT
  gate-clean — it adds **+5** skipLibCheck:false errors (879→884), ALL in one
  transitively-pulled file `okhttp3/internal/connection/RealConnection.d.ts`
  (TS2416 ×2, TS2300, TS2717, TS2417). They're okhttp's OWN latent errors,
  invisible to consumers (skipLibCheck:true → `Promise<Response>` autocompletes
  fine) but they trip the gate's per-code ratchet → the regen would route to
  review, not auto-release. So B needs either a re-baseline of those 5 or a
  narrower type. **Option C (a curated `ScriptHttpResponse` facade) imports none
  of okhttp's graph, so it stays gate-clean** — the tradeoff is B = full/accurate
  Response but +5 gate debt vs C = clean gate but a hand-maintained facade.
  Decision (A/B/C + re-baseline?) still maintainer's.
- **[~] W17 - missing runtime helpers - ENUMERATED, no clean fix (2026-07-01).**
  Discovery pass done. (1) Global bindings: COMPLETE + gated — all 28 `putMember`
  bindings (ScriptContextProvider.kt) + `registerScript` are in ambient.d.ts,
  cross-checked vs runtime-bindings.json by check-ambient-contract.py. (2)
  Intrinsics COMPLETE (Java.type/from/to/extend/super, Polyglot, print, load,
  script.on). (3) No per-class reflected-method gap (getItemId already debunked;
  generator emits all reflected public members). (4) The ONLY genuine runtime>types
  delta is GraalJS JavaBean-property sugar: LB uses `HostAccess.ALL`
  (PolyglotScript.kt:60), so `getX()`/`isX()` are also callable as `.x`, plus
  Java List/array interop (`.length`, `[i]`). Closing it = emitting `.foo` aliases
  for **~48,031** getters against **~16,749** colliding lowercase fields → the
  TS2300/TS2717 static-hiding burn-zone (already a documented dead-end). NOT
  clean; arguably unnecessary (method forms work). Recommend: don't sweep; at most
  a curated bean-property overlay on a few hot types (mc.player) via augmentation.
  _Layer: n/a for a clean fix; residual is a design call._
- **[x] W19 - overloaded-method redeclaration variance.** Fixed in the
  generator: `functionsOf` now re-emits the inherited sibling overloads of any
  method name a subclass redeclares (matched by `overloadSignature`), so a child
  overriding one overload no longer shadows the parent's others. Confirmed with
  `tsc` that the bug was a hard `TS2416` (child non-assignable to parent) and
  that the fix resolves it; generator unit test added. _Layer: generator._

## 2026-06-09 review wave (W20-W21: generator-layer fidelity)

Found by an adversarially-verified full review; the consumer-visible symptoms
were fixed the same day at the post-patch layer (sanitize, F8/F9, F4 reversal,
gate v2 ratchets) — these track the *generator-root* fixes.

- **[x] W20 - qualified-name leak in arrow/SAM rendering - FIXED (generator
  5a262be; verified 2026-07-01).** `formatFunctionalInterfaceType` now converts
  every SAM param/return through `javaTypeToKotlinType` + `formatKType`, so raw
  qualified names no longer leak. Verified on the fresh 296c319 output: ZERO
  `kotlin.*` / `java.util.Optional<...>` qualified names in type positions
  (only KDoc `@see`/`@link` bodies remain, which is correct). Positive control:
  9,101 `=> boolean` arrows now render correctly (matching the ~9,925 that used
  to leak as `=> kotlin.Boolean`), SAM params map to TS primitives, and
  `Optional<...>` renders as the imported simple name (47×), not
  `java.util.Optional`. _Layer: generator (formatFunctionalInterfaceType)._
- **[x] W21 - free/undeclared type variables - FIXED (generator 5a262be, same
  commit as W20).** Re-emitted inherited members now substitute the parent's
  type params from the supertype arguments (falling back to the bound) instead
  of emitting undeclared identifiers. Landed together with the SAM-arrow fix.
  _Layer: generator._

## 2026-06-22 review wave (B: interface-member conformance + skipLibCheck north-star)

> **North-star (maintainer, 2026-06-22): make the tree clean even WITHOUT
> `skipLibCheck`.** We will still ship/recommend `skipLibCheck` (a 56k-file
> declaration set wants it purely for compile speed - it's the normal contract
> for large generated typings), but the goal is that a consumer who turns it OFF
> sees zero errors from our `.d.ts`. Today that's false: the package's own
> `tsconfig` (skipLibCheck:false) OOMs and the tree carries thousands of latent
> TS2344/TS2304/TS2300/TS2503 errors. The open W12b/W20/W21 items below are the
> bulk of it; closing them (plus B) is the path to a skipLibCheck-optional tree.
> _Deferred but tracked: this is the acceptance bar for "properly typed."_

- **[ ] B - implementing classes don't structurally satisfy their interfaces.**
  `functionsOf` (generator) only re-emits the **non-abstract (default)** methods
  of **direct** interface supertypes (`.filter { !interfaceFunction.isAbstract }`),
  assuming abstract interface methods arrive via the class's own
  `declaredMemberFunctions`. That holds for ordinary classes (e.g.
  `PacketWrapperImpl` re-declares all of `PacketWrapper`) but FAILS where
  reflection doesn't surface the override as declared (Java enums) and never
  walks the **transitive** interface chain. Measured via tsc assignment probes:
  ~**346 / 701 enum** + ~**2741 / 10930 non-enum** `implements` classes fail to
  satisfy their interface (TS2739/2740/2741 missing members) - e.g.
  `ServerboundPackets1_20_5.CUSTOM_PAYLOAD` is not assignable to `PacketType`
  (missing `direction()`/`state()`), and `AbstractFloatIterator` misses
  `nextFloat`. Fix: in `functionsOf`, emit ALL transitively-inherited interface
  members (abstract + default), substituting each interface's type params from
  the implements-clause arguments, deduped by rendered signature against what the
  class already declares (reuse the W19 `emittedSignatures` dedup + W21
  substitution). Add a `check-iface-members` gate (tsc assignment probe over ALL
  `implements` classes, enum + non-enum - NOT a textual heuristic, which
  massively undercounts). _Layer: generator (functionsOf) + check gate._

- **[x] A - registry 4096-byte head truncation.** `generate-java-type-registry.py`
  read only the first 4096 bytes of each file, dropping any `export class` behind
  a long import block (e.g. `api/type/Types`, decl at byte ~5478). Fixed
  2026-06-22 to a full-file read: registry-full 48620 -> 48862 (+242 recovered,
  incl. `Types`); registry-lb +1. Positive-control verified
  (`Java.type("...Types")` now types). _Layer: registry generator._

## 2026-06-23: skipLibCheck:false debt-reduction campaign

Drove the surface+transitive `skipLibCheck:false` debt down via generator-root
fixes (`TypeScriptGenerator.kt`), each gate-verified with **zero new errors**.
**Net: transitive 2981 -> 1251 (-58%), surface 60 -> 53.** Guiding rule that held:
ship only fixes that emit `any`/`unknown`/imports (they relax, never tighten, so
they can't trade one error class for another); anything that *moves* an error to a
different code (see the TS2300 dead-end) is a fidelity tradeoff, not a sweep.

- **[x] B - interface-member conformance** (0.38.5). `functionsOf` now walks the
  transitive interface closure (kotlin supertypes + the reliable Java interface
  list) and injects missing PUBLIC, NON-GENERIC, simple-signature members, deduped
  vs the class's own + concrete-inherited. Restricting to the generic-free subset
  avoided re-introducing erasure/variance debt. Enum packet types satisfy
  `PacketType` again; `Java.type(...).create(...)` types with no cast.
- **[x] TS2304 "cannot find name" (-339, 0.38.6).** TWO causes: (1) self-iterating
  types (`java.nio.file.Path : Iterable<Path>`) were treated as collections -> no
  module -> undefined `Path[]`. Fix: `isSelfIterable` keeps such types out of the
  `shouldIgnoreSuperclass` collection path so they get a real module + import.
  (2) fastutil primitive maps (`Int2ObjectMap<V>`, 1 type param) broke the 2-arg
  `Map` assumption and fell to a nominal name; `mapFromKType` now renders
  `{ [key: string]: any }` for non-2-arg maps. _(My first TS2304 attempt -- adding
  no-module types to dependentTypes -- was a no-op and was reverted; the module
  fix is the real one.)_
- **[x] TS2344 "X does not satisfy constraint Y" (-1391 total, 0.38.7 + 0.38.8).**
  Two levers: (1) a method type-variable (`E : Enum<E> & StringRepresentable`,
  `T : Entity`, ...) erased to the literal `Object` in return types
  (`EnumCodec<Object>`) violated the bound -- `nonPrimitiveFromKType` now renders
  `any` for an erased-Object arg against a CONSTRAINED parameter (and pads
  raw/missing args the same way), keeping `Object` for unconstrained params so
  `Class<Object>` stays precise (-856). (2) the unconstrained-`<T>` bound was the
  over-narrow union `Object | number | string | boolean`, which rejected arrays,
  `void`, maps and functions; emit `unknown` (top type) instead, applied uniformly
  so extends/implements chains stay consistent (-535).

### NOT mechanical (left as deliberate fidelity tradeoffs)

- **[ ] TS2300 duplicate `static CODEC`/`STREAM_CODEC` (92).** A class declares its
  OWN `static CODEC: MapCodec<Self>` AND inherits an interface's
  `static CODEC: Codec<Iface>` (covariant), and `Class.getFields()` returns both.
  Deduping just trades TS2300 -> **TS2417** (static side incompatible with base) --
  measured ~46 moved, net worse. Real fix = drop/widen the covariant static, a
  fidelity decision.
- **[ ] TS2344 residual (169).** Fragmented sub-patterns: nested erased bounds
  (`Future<void>` vs `Future<Object>`), primitive-vs-Java-type (`number` is not
  `Comparable<number>`), array-vs-specific-bound. ~12-44 each; each needs narrow,
  riskier handling. (An Object-bound -> unknown extension was tried: 1 file
  changed tree-wide, 0 errors fixed -> reverted. Diminishing returns reached.)
- **[ ] TS2420 generic-interface conformance (203)** and **[ ] TS2416 covariant
  overrides (335).** Each error is a distinct class/method; no single lever.
  TS2420 = the generic-interface conformance B deliberately skipped (fixing it
  re-introduces the erasure debt just cleared); TS2416 = narrowing returns
  (`Level.gameEvent`, `ServerLevel.getNearestPlayer`) that TS rejects on an
  `extends` chain. Both are real fidelity tradeoffs, low yield, regression-prone.

## 2026-06-24: regen performance + a doc-extractor gap

Performance work (do in order): proper closing -> GraalJS JIT -> caching.

- **[x] Proper closing (DONE, shipped 0a8e8ab).** On MC 26.2 the headless client no
  longer terminates after `ts-defgen.js` writes output: `mc.close()` stopped ending
  the JVM, so the client idled until the regen `timeout` (~100 min wasted). Fixed in
  `tools/regen/ts-defgen.js`: after `generate()` (which writes + flushes all `.d.ts`
  synchronously) do NOT call `mc.close()`; flush stdout and
  `Runtime.getRuntime().halt(0)`. **Measured:** a full regen now exits cleanly
  (`runClient exit 0`) in **~34 min** instead of grinding to the 60m timeout (and
  ~100m at 120m). The walk itself is ~21 min + ~11 min emission; the win is
  eliminating the post-output idle.
- **[x] GraalJS JIT — INVESTIGATED, NO WIN, NOT ADOPTED.** Hypothesis was that the
  regen runs GraalJS on the Truffle *fallback* runtime (stock OpenJDK 25 -> log:
  "fallback runtime that does not support runtime compilation"), so the ts-defgen.js
  loop is interpreted. Tested by running the whole regen on **Oracle GraalVM JDK
  25.0.3** (exact match to the bundled GraalVM Polyglot 25.0.3); the fallback warning
  disappeared (Truffle JIT genuinely active via libgraal/JVMCI). **But the wall-clock
  was unchanged: ~34 min vs ~34m31s stock (walk ~22.5 vs ~21 min — a wash, within
  noise).** Reason: the expensive work is the transitive reflection walk in
  `TypeScriptGenerator.kt`, which is **host Kotlin bytecode** (already C2/Graal
  JIT-compiled regardless), not guest JS. ts-defgen.js's JS is a thin loop that
  invokes the generator **once** — there's almost no hot guest code for Truffle to
  compile. GraalVM also leaks a few of its own JDK classes into the tree (+159 files,
  +23 `com/oracle`), i.e. a small output delta for zero gain. Reverted
  `tools/regen-types.sh` to stock OpenJDK 25. GraalVM JDK 25 left installed at
  `/usr/lib/jvm/graalvm-25` (harmless, unused). **Takeaway: the regen is
  host-reflection-bound; caching the stable subtree is the only lever that cuts it.**
- **[x] Render cache (DONE; ~36% faster warm regen).** Shipped: a persistent
  per-class render cache (`ModuleCache` in the generator) reuses a class's prior
  rendered `.d.ts` when its own source jar AND every jar it imports from are
  unchanged (content-sha), plus the generator jar's own sha (whole-cache key).
  Caches **every** content-addressable class (not just foundational): change
  detection is complete, so unchanged classes are reused and changed ones miss
  and re-render. Rationale: LB commits daily but MC bumps rarely, so a typical
  regen only changes `net.ccbluex` (~2.7k classes) and reuses the other ~95%.
  **Measured (MC 26.2, full tree):** cold (writes cache) reused=0 recorded=57510
  across 206 jars, ~38 min (one-time ~+3.5 min over the ~34.5 min no-cache
  baseline to populate). Warm reused **57242/57510 (99.5%)**, ~22 min, and the
  output is **byte-identical** to cold across all 59,380 files (the only diff is
  `runtime-bindings.json`, a sidecar with pre-existing mixin-counter
  nondeterminism written by ts-defgen.js, not the cache). Off unless
  `TSGEN_CACHE_DIR` is set (regen-types.sh exports it; `SKIP_REGEN_CACHE=1`
  forces cold). Cache dir `tools/regen/.module-cache/` (gitignored). Files:
  generator `ModuleCache.kt` (+ `GeneratedModule`/`CachedModule` + visitClass
  hook in `TypeScriptGenerator.kt`), `moduleCacheTests.kt` (cold->warm identical
  + tamper-invalidation), `tools/regen-types.sh`, `.gitignore`.
- **[x] O(1) module index (THE big win — regen ~34.5 min -> ~6 min).** The walk's
  visited-check and import resolution located a class's module with
  `modules.keys.find { isSameClass }` — a linear scan run once per class AND once
  per dependent, i.e. O(n^2) over ~57k classes, recomputing `qualifiedName`
  reflectively each comparison. THIS, not reflection, was the dominant cost. Added
  a `modulesByName` HashMap mirroring the module map (keyed exactly as isSameClass
  compares: qualifiedName, all nulls in one bucket) so both lookups are O(1).
  **Measured (MC 26.2, no cache): introspection walk ~33.5 min -> ~1m45s, whole
  regen ~34.5 min -> ~6 min.** Output byte-identical across all 59k files (lone
  `.d.ts` diff is the pre-existing non-deterministic mixin counter in a
  commented-out invalid line). Guarded by the determinism + dedupe + cache tests.
  Shipped: generator `d55dbd2`.

  **Post-O(1), the cache's value is environment-dependent — marginal locally,
  large on CI.** On this (fast) box reflection is cheap (~1m45s whole walk), so
  reuse saves only ~1 min (warm walk ~18s vs ~1m45s). But on the GitHub-hosted CI
  runner the softpipe walk is ~8x slower (~14 min cold), and the cache collapses
  it to ~65s — measured **CI regen-flow 30m47s cold -> 10m04s warm (~20 min /
  ~67% faster)** at 99.5% reuse. So the cache earns its keep on slow CI; keep it.

  **CI cache prerequisites (all fixed 2026-06-24):** the persisted cache only
  validates if the generator jar's content sha is stable, so the shadow jar is
  now built byte-reproducibly (preserveFileTimestamps=false +
  reproducibleFileOrder=true in generator/build.gradle); without that the jar
  re-hashed every CI rebuild -> generatorMatch=false -> 0 reuse + wasted disk
  (which SIGTERM-killed an early warm run). check-regen.yml persists
  tools/regen/.module-cache via actions/cache (key per run_id, prefix
  restore-keys; sha-gated so a stale restore is safe). Also required for the
  container to run the flow at all: rsync (promote), Node 22 + npm (LB's
  :npmInstallTheme), and a repo-root `npm ci` (typescript for the post-promote
  drift gates) — all added to docker/Dockerfile / entrypoint.sh.

- **[done-superseded] Caching the stable subtree.** Measured class
  distribution of the 59,371-file tree: volatile jars (net.minecraft 8855, net.ccbluex
  2739, com.viaversion 2789, com.mojang 1063, net.fabricmc/raphimc/caffeinemc/
  irisshaders ~4300) ~= 20k classes; the rest — fastutil (6050), graalvm/oracle
  (~10k, polyglot), apache, kotlin, JDK, guava, lwjgl, netty, icu — are **~30k
  foundational-library classes that never reference the volatile jars**, so their
  rendered `.d.ts` is stable across an MC bump. **Design (sound):** the generator does
  a *transitive closure* (`visitClass` -> `module.dependentTypes.forEach { visitClass }`,
  TypeScriptGenerator.kt:1568), so filtering the input set can't skip a class — it gets
  re-reached. Caching must live *inside* the generator: a `ModuleCache` keyed by
  **(source-jar content sha + generator sha)**. In `visitClass`, if the class's jar is
  in a **foundational allowlist** (java/kotlin/netty/fastutil/guava/graalvm/apache/lwjgl/
  icu/...) and both hashes match the prior run, reuse the previous run's rendered
  `path`+`moduleText` (a `CachedModule` placed into `modules` with no reflection) and
  re-enqueue its cached dependent FQNs so the walk stays complete. Soundness: cached
  text bakes imports/aliases against dependent NAMES; restricting to foundational jars
  (whose transitive deps are all foundational/JDK, never minecraft/ccbluex) guarantees
  those names are unchanged. Cache store = the prior raw (pre-post-patch) output tree +
  a manifest (fqn -> path, jarKey, depFqns; plus jarKey -> sha, generatorSha).
  Source jar via `klass.java.protectionDomain.codeSource.location`, sha memoized per
  jar. Ceiling ~= half the walk. Gate (typecheck.mjs) + a validation regen + subagent
  review before shipping.

- **[ ] ts-extract.py drops KDocs on annotation classes (doc-completeness).**
  tree-sitter-kotlin (1.1.0) mis-parses `@Retention(...) annotation class X` as an
  `infix_expression` (three identifiers: `annotation`, `class`, `X`), NOT a
  `class_declaration`, so `ts-extract.py` never sees it and drops the KDoc (e.g.
  `ScriptApiRequired`). This is why the 2026-06-24 tree-sitter doc-refresh was
  LESS complete than the old PSI manifest (1940 vs 2068 FQNs; some is also LB
  version drift). The committed manifest (refresh-manifest.sh -> ts-extract) is
  missing these, so a clean fresh-doc regen needs a `ts-extract.py` workaround
  first: detect the mis-parsed `infix_expression annotation class NAME` shape (and
  audit other declaration kinds) before re-refreshing + regenerating. _Deferred;
  doc-only, types are correct._

## Smaller, standalone

- **[x] Generator emitted invalid TS for 2 coroutine/inline-class declarations.**
  Fixed 2026-06-04: `commentIfInvalid()` now comments **every** line and keeps
  the trailing newline, so a `@JvmName`-mangled member (`retrying-NcHsxvU`,
  `waitMatchesWithTimeout-WPwdCS8`) no longer swallows the class's closing brace.
  The 2 committed files were fixed and the typecheck-gate syntax baseline
  tightened to **empty** (LB namespace has zero parse errors). _Layer: generator._
- **[x] `registerMode` / `registerChoice` callbacks.** Narrowed like
  `registerModule` (new P-02b post-patch): callback now `(mode: ScriptMode) => void`
  (the runtime passes a `ScriptMode`, per `callback.accept(this)` in
  `PolyglotScript.kt`), descriptor `Object` index relaxed to `unknown`. Gate
  green. Surfaced a pre-existing systemic bug -> see the duplicate-import item.

---

## Recently completed (for reference)

- **W9** - enum `name()` string-literal union (done; in the current types).
- **W10** synthetic-member filter / **W14** real `private constructor` *(11,912 real; ~59 commented-out stragglers remain)* /
  **W15** mapping-coupling note / **W16** augmentation-drift gate /
  **W18** `ClientLevel.getEntities` overloads.
- Plus the broader E-/P-/T-/F- set inventoried in [improvements.md](improvements.md)
  (typed `on()` overloads, `registerScript`/`registerModule`/`ScriptSetting`
  narrowing, F1-F6 binding fixes, ambient globals + GraalVM intrinsics, KDoc->TSDoc
  injection, per-class packaging).

> Note: the older "Known gaps" table in `generator/ENHANCEMENTS.md` is stale - it
> still lists issues #2/#4/#5/#6/#8 as open, but those shipped (ScriptSetting
> factories, reserved-word renames, GraalVM intrinsics, `PolyglotScript.on()`,
> DSL receivers). This file is the current list.
