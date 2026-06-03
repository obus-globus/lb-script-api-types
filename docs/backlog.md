# Type-quality backlog — possible enhancements

Remaining ways to make the generated `.d.ts` better, beyond what
[improvements.md](improvements.md) already ships. This is the **W1–W19 weakness
audit** (from `liquidbounce-helper`'s `types-weakness-audit`, 2026-05-25),
reconciled to current status and carried into this repo now that the typings own
their own pipeline.

Each item notes the **layer** it'd be fixed in:
- **generator** — `generator/` (the Kotlin `TypeScriptGenerator.kt`)
- **post-patch** — `tools/regen/post-patches.sh` / `fix-binding-types.py`
- **extractor** — `tools/kdoc-extractor/` (the PSI manifest feeding `apply-kdoc`)

Legend: `[x]` done · `[~]` partial · `[ ]` not started.

---

## ⭐ Keystone — #12b: parameter signature data

> The single highest-ROI change. Do this first.

**[ ] #12b — emit real parameter names + types** by extending the
`kdoc-extractor` PSI manifest with `signature.params`. The reflection generator
can't recover source parameter names (JVM erases them to `paramarg0/1…`); the PSI
extractor can. Threading that data through `apply-kdoc` / the generator
**simultaneously unblocks W1 + W5 + W6** (>65% of all script-visible
declarations) and lays the groundwork for W8. _Layer: extractor (+ post-patch / generator)._

---

## Tier 1 — UX-blocking

- **[ ] W1 — `paramargN` parameter names.** ~23,350 occurrences, ~70% of files.
  Params surface as `paramarg0`, `paramarg1`… instead of their real names, so
  call sites get no hint what an argument is. _Unblocked by #12b. Layer: extractor → generator/post-patch._
- **[ ] W2 — `@deprecated` not surfaced.** LB has ~16 `@Deprecated` members; only
  1 reaches the types (94% loss). Add deprecation to the extractor manifest and
  emit `@deprecated` TSDoc. _Layer: extractor + `apply-kdoc`._
- **[ ] W3 — event class docs.** 117 / 121 event classes are undocumented. Either
  hand-write TSDoc for the top ~30 highest-traffic events, or upstream KDoc PRs to
  LiquidBounce. _Layer: extractor + docs._
- **[ ] W4 — `ScriptModule.on()` overloads undocumented.** The ~122 narrowed
  event overloads carry no TSDoc. Generate a one-line `@see <Event>` (and ideally
  a summary) per overload. _Layer: post-patch (the `on()` augmentation generator)._

## Tier 2 — fidelity

- **[ ] W5 — `Function*<Object>` lambda erasure.** ~2,164 occurrences (98%
  `Function1`). Lambda params/returns erase to `Object`. _Same fix path as W1 (#12b). Layer: generator/extractor._
- **[ ] W6 — bare `Object` returns/params.** ~1,034 occurrences where reflection
  fell back to `Object`; prefer the raw declared class. _Layer: generator._
- **[ ] W7 — nullable over-promotion.** ~15,926 `| null` unions, many spurious.
  Drive nullability from `KType.isMarkedNullable` in the generator (reflection is
  available in LB's GraalVM context) rather than guessing. _Layer: generator._
- **[ ] W8 — sealed-class hierarchies.** 69 sealed Kotlin types flatten to plain
  classes → 0 discriminated unions. Detect `Modality.SEALED` and emit
  `type X = A | B | C` so `when`-style narrowing works. _Layer: generator._

## Tier 3 — noise / cosmetic

- **[ ] W11 — `$Companion` exports leak.** 135 files expose `Foo$Companion`. Merge
  the companion's statics onto the parent. _Risk: breaks any `Foo$Companion`
  imports. Layer: generator._
- **[ ] W12 — reflection-type leak (`Class<>`, `KProperty`).** *Partial:*
  `ScriptReflectionUtil` got typed generic overloads, but the original
  `Class<Object>` overloads remain and ~296 other `Class<…>` sites are untouched.
  _Layer: generator / augmentation._
- **[ ] W13 — `okhttp3.Response` leak.** `ScriptAsyncUtil.asyncHttp()` returns the
  raw okhttp type. Add a `ScriptHttpResponse` facade. _Layer: augmentation._
- **[ ] W17 — missing runtime helpers.** Methods that exist at runtime
  (`getItemId`, `getTypeId`, …) are absent from the types. Needs an audit pass to
  enumerate them. _Layer: augmentation / generator._
- **[ ] W19 — overloaded-method redeclaration variance.** A subclass override
  drops the parent's sibling overloads, making it structurally non-assignable to
  the parent. Re-emit all parent overloads on override (or none). _Layer: generator._

## Smaller, standalone

- **[ ] `registerMode` / `registerChoice` callbacks.** Same `ScriptModule`-style
  callback narrowing as `registerModule` (P-02) — currently typed with the raw
  `{ [key: string]: Object }` descriptor. Rarely used, so deferred. _Layer: post-patch._

---

## ✅ Recently completed (for reference)

- **W9** — enum `name()` string-literal union (done; in the current types).
- **W10** synthetic-member filter · **W14** real `private constructor` ·
  **W15** mapping-coupling note · **W16** augmentation-drift gate ·
  **W18** `ClientLevel.getEntities` overloads.
- Plus the broader E-/P-/T-/F- set inventoried in [improvements.md](improvements.md)
  (typed `on()` overloads, `registerScript`/`registerModule`/`ScriptSetting`
  narrowing, F1–F6 binding fixes, ambient globals + GraalVM intrinsics, KDoc→TSDoc
  injection, per-class packaging).

> Note: the older "Known gaps" table in `generator/ENHANCEMENTS.md` is stale — it
> still lists issues #2/#4/#5/#6/#8 as open, but those shipped (ScriptSetting
> factories, reserved-word renames, GraalVM intrinsics, `PolyglotScript.on()`,
> DSL receivers). This file is the current list.
