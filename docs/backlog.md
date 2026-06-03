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
- **[ ] Type substitution (W5 + W6).** Use `signatures.json`'s `type` field to
  replace bare `Object` / `Function*<Object>` params with the real declared
  type. Needs a Kotlin->TS type map + import resolution (the risky part), so
  it's deferred from the names pass. Doing this would also let
  `apply-signatures` disambiguate the **same-arity overloads it currently skips**
  (188 of them) by matching param types. _Layer: post-patch / generator._

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
- **[ ] W2 - `@deprecated` not surfaced.** LB has ~16 `@Deprecated` members; only **1**
  reaches the types - verified (94% loss). Add deprecation to the extractor manifest and
  emit `@deprecated` TSDoc. _Layer: extractor + `apply-kdoc`._
- **[ ] W3 - event class docs.** 117 / 121 event classes are undocumented. Either
  hand-write TSDoc for the top ~30 highest-traffic events, or upstream KDoc PRs to
  LiquidBounce. _Layer: extractor + docs._
- **[ ] W4 - `ScriptModule.on()` overloads undocumented.** The ~122 narrowed
  event overloads carry no TSDoc. Generate a one-line `@see <Event>` (and ideally
  a summary) per overload. _Layer: post-patch (the `on()` augmentation generator)._

## Tier 2 - fidelity

- **[~] W5 - `Function*<Object>` lambda erasure.** **3,376** occurrences (verified). Two parts:
  (a) **Kotlin function types now render as TS arrows** (`(T) -> Unit` ->
  `(param0: T) => void`; suspend types too) instead of nominal `FunctionN<...>`
  / `UNKNOWN` - done in the generator (`kotlinFunctionArrow`, reflection-only,
  recovers the type args reflection already has). (b) Genuinely-erased arg
  *types* that surface as `Object` are the residual - those need the
  type-substitution pass under #12b (`signatures.json`). _Layer: generator (a, done) / post-patch (b)._
- **[ ] W6 - bare `Object` returns/params.** **78,340** bare-`Object` occurrences (verified) where reflection
  fell back to `Object`; prefer the raw declared class. The per-param Kotlin
  source type is already captured in `signatures.json` - the remaining work is
  the Kotlin->TS type map + import resolution (the type-substitution item under
  #12b). _Layer: post-patch/generator._
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
- **[ ] W12 - reflection-type leak (`Class<>`, `KProperty`).** *Partial:*
  `ScriptReflectionUtil` got typed generic overloads, but the original
  `Class<Object>` overloads remain - **4,980** `Class<Object>` sites (verified).
  _Layer: generator / augmentation._
- **[ ] W12b - duplicate-name imports (`Duplicate identifier`).** *Discovered
  2026-06-04 while narrowing registerMode.* **562 files** import two different
  types under the **same simple name** (e.g. `ScriptMode.d.ts` imports both
  `config/types/Value` and `org/graalvm/polyglot/Value` as `Value`), producing
  `TS2300 Duplicate identifier` + a bare-generic `TS2314` at the use site. The
  generator must **alias colliding simple names** on import and use the alias at
  each reference. High impact (576 collisions); the right next generator fix.
  _Layer: generator._
- **[ ] W13 - `okhttp3.Response` leak.** `ScriptAsyncUtil.asyncHttp()` returns the
  raw okhttp type - **19** LB files reference `okhttp3` (verified). Add a `ScriptHttpResponse` facade. _Layer: augmentation._
- **[ ] W17 - missing runtime helpers.** Some methods that exist at runtime are
  absent from the types. _The audit's `getItemId` example is ambiguous - verified
  `getItemId` does appear (on unrelated viaversion/iris classes), so the example
  is bad._ Needs a real enumeration pass to become actionable. _Layer: augmentation / generator._
- **[x] W19 - overloaded-method redeclaration variance.** Fixed in the
  generator: `functionsOf` now re-emits the inherited sibling overloads of any
  method name a subclass redeclares (matched by `overloadSignature`), so a child
  overriding one overload no longer shadows the parent's others. Confirmed with
  `tsc` that the bug was a hard `TS2416` (child non-assignable to parent) and
  that the fix resolves it; generator unit test added. _Layer: generator._

## Smaller, standalone

- **[ ] Generator emits invalid TS for 2 coroutine/inline-class declarations.**
  `RetryingKt.d.ts:8` (`retrying-NcHsxvU` - inline-class `@JvmName` mangling)
  and `SuspendHandlersKt.d.ts:54` (`waitMatchesWithTimeout-WPwdCS8`) emit a
  malformed `// ; invalid because of -}` line that breaks parsing. Currently
  baselined by the typecheck gate (`syntax-baseline.json`). Fix in the
  generator's `commentIfInvalid()` path so the whole declaration is commented,
  not just truncated. _Layer: generator._
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
