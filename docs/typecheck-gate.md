# Typecheck gate

A CI check that proves the **committed** types tree actually compiles, so
generator/post-patch regressions are caught before they ship. It runs against
`typings/` as-is - no regeneration, JVM, or Xvfb - so it is fast (a few
seconds).

```bash
npm install        # once, at the repo root
npm run typecheck  # run the gate
```

Driver: [`tools/typecheck.mjs`](../tools/typecheck.mjs). Wired into CI by
[`.github/workflows/ci.yml`](../.github/workflows/ci.yml) on every push/PR.

## Two checks

**Part A - surface smoke tests.** Compiles every `typings/__smoke/*.test.ts`
and asserts zero diagnostics originate in the test file. The tests use
`@ts-expect-error`, so a *missing* error surfaces as `TS2578`
("unused @ts-expect-error") inside the file - meaning "zero in-file
diagnostics" verifies the positive type assertions hold **and** every negative
assertion still errors. These exercise the real script-author surface: typed
`on()` event overloads, `ScriptSetting` factories, DSL receiver lambdas,
GraalVM intrinsics, and the `registerScript` callable contract. This is the
check that catches the binding-name / augmentation-cascade class of bug.

**Part B - LB-namespace syntactic ratchet.** Parses every
`types/net/ccbluex/liquidbounce/**.d.ts` for *syntactic* (parse) errors -
fast, no type-checking. The current known set is frozen in
[`typings/__smoke/syntax-baseline.json`](../typings/__smoke/syntax-baseline.json);
the gate fails only on **new** parse errors. This catches the class of
generator bug where ts-generator emits invalid TS for a declaration (e.g. the
inline-class-mangled suspend handlers) without blocking on the already-known
ones.

`package-info.d.ts` is excluded - it is a Java package descriptor
ts-generator cannot represent and no script imports it.

## The baseline

`syntax-baseline.json` currently holds 2 known parse errors, both genuine
ts-generator output bugs on coroutine/inline-class-mangled declarations:

- `net/ccbluex/liquidbounce/api/core/RetryingKt.d.ts:8`
- `net/ccbluex/liquidbounce/event/SuspendHandlersKt.d.ts:54`

When a regen legitimately changes the set (a known error is fixed upstream, or
a new generator quirk appears that you have triaged and accepted), re-freeze:

```bash
npm run typecheck:update-baseline
```

The gate also prints a `note` when a baselined error is no longer present, so
the baseline can be tightened as the generator improves.

## Scope notes

- Third-party namespaces (`com.*`, `org.*`, `oshi.*`, `net.minecraft.*`) are
  not ratcheted by Part B - they carry pre-existing `package-info` /
  reserved-word parse noise that is not LiquidBounce's API and that scripts
  rarely import. The minecraft surface scripts *do* touch is covered
  transitively by the Part A smoke tests (e.g. `event.entity.getX(): number`).
- The gate runs on the committed tree, so it does not require the generator
  submodule or a LiquidBounce checkout.
