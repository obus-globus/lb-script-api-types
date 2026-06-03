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

> **Verified open** — every `[ ]` item below was re-checked against the freshly
> regenerated `typings/` tree (2026-06-03); the occurrence counts are from that
> tree, not the original audit.

---

## ⭐ Keystone — #12b: parameter signature data

> The single highest-ROI change. Do this first.

**[ ] #12b — emit real parameter names + types.** The reflection generator can't
recover source parameter names (the JVM erases them to `paramarg0/1…`); the PSI
extractor can. The `kdoc-extractor` manifest *already* has a `params` field — but
it holds KDoc **`@param` doc text** (`{"x": "the x value"}`), **not** the
structured parameter **names + types** needed here. Add that (a `signature.params`
shape) and thread it through `apply-kdoc` / the generator. **Simultaneously
unblocks W1 + W5 + W6** (>65% of all script-visible declarations) and lays the
groundwork for W8. _Layer: extractor (+ post-patch / generator)._

---

## Tier 1 — UX-blocking

- **[ ] W1 — `paramargN` parameter names.** **289,132 occurrences across 12,314
  files** (verified). ~70% of files.
  Params surface as `paramarg0`, `paramarg1`… instead of their real names, so
  call sites get no hint what an argument is. _Unblocked by #12b. Layer: extractor → generator/post-patch._
- **[ ] W2 — `@deprecated` not surfaced.** LB has ~16 `@Deprecated` members; only **1**
  reaches the types — verified (94% loss). Add deprecation to the extractor manifest and
  emit `@deprecated` TSDoc. _Layer: extractor + `apply-kdoc`._
- **[ ] W3 — event class docs.** 117 / 121 event classes are undocumented. Either
  hand-write TSDoc for the top ~30 highest-traffic events, or upstream KDoc PRs to
  LiquidBounce. _Layer: extractor + docs._
- **[ ] W4 — `ScriptModule.on()` overloads undocumented.** The ~122 narrowed
  event overloads carry no TSDoc. Generate a one-line `@see <Event>` (and ideally
  a summary) per overload. _Layer: post-patch (the `on()` augmentation generator)._

## Tier 2 — fidelity

- **[ ] W5 — `Function*<Object>` lambda erasure.** **3,376** occurrences (verified). Lambda params/returns erase to `Object`. _Same fix path as W1 (#12b). Layer: generator/extractor._
- **[ ] W6 — bare `Object` returns/params.** **78,340** bare-`Object` occurrences (verified) where reflection
  fell back to `Object`; prefer the raw declared class. _Layer: generator._
- **[ ] W7 — nullable over-promotion.** **69,718** `| null` unions (verified), many spurious.
  Drive nullability from `KType.isMarkedNullable` in the generator (reflection is
  available in LB's GraalVM context) rather than guessing. _Layer: generator._
- **[ ] W8 — sealed-class hierarchies.** 69 sealed Kotlin types flatten to plain
  classes → **0** discriminated unions in the tree (verified). Detect `Modality.SEALED` and emit
  `type X = A | B | C` so `when`-style narrowing works. _Layer: generator._

## Tier 3 — noise / cosmetic

- **[ ] W11 — `$Companion` exports leak.** **438** files expose `Foo$Companion` (verified). Merge
  the companion's statics onto the parent. _Risk: breaks any `Foo$Companion`
  imports. Layer: generator._
- **[ ] W12 — reflection-type leak (`Class<>`, `KProperty`).** *Partial:*
  `ScriptReflectionUtil` got typed generic overloads, but the original
  `Class<Object>` overloads remain — **4,980** `Class<Object>` sites (verified).
  _Layer: generator / augmentation._
- **[ ] W13 — `okhttp3.Response` leak.** `ScriptAsyncUtil.asyncHttp()` returns the
  raw okhttp type — **19** LB files reference `okhttp3` (verified). Add a `ScriptHttpResponse` facade. _Layer: augmentation._
- **[ ] W17 — missing runtime helpers.** Some methods that exist at runtime are
  absent from the types. _The audit's `getItemId` example is ambiguous — verified
  `getItemId` does appear (on unrelated viaversion/iris classes), so the example
  is bad._ Needs a real enumeration pass to become actionable. _Layer: augmentation / generator._
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
- **W10** synthetic-member filter · **W14** real `private constructor` *(11,912 real; ~59 commented-out stragglers remain)* ·
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
