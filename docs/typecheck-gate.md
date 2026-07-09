# Typecheck gate

A CI check that proves the **committed** types tree actually compiles, so
generator/post-patch regressions are caught before they ship. It runs against
`typings/` as-is - no regeneration, JVM, or Xvfb - so it is fast (~20s).

```bash
npm install        # once, at the repo root
npm run typecheck  # run the gate
```

Driver: [`tools/typecheck.mjs`](../tools/typecheck.mjs). Wired into CI by
[`.github/workflows/ci.yml`](../.github/workflows/ci.yml) on every push/PR.

## Four checks

**Part A - surface smoke tests.** Compiles every `typings/__smoke/*.test.ts`
and asserts zero diagnostics originate in the test file. The tests use
`@ts-expect-error`, so a *missing* error surfaces as `TS2578`
("unused @ts-expect-error") inside the file - meaning "zero in-file
diagnostics" verifies the positive type assertions hold **and** every negative
assertion still errors. These exercise the real script-author surface: typed
`on()` event overloads, `ScriptSetting` factories, DSL receiver lambdas,
GraalVM intrinsics, the `registerScript` callable contract, and the
`registerMode`/`registerChoice` `ScriptMode` callbacks. This is the check that
catches the binding-name / augmentation-cascade class of bug.

**Part B - whole-package syntactic ratchet.** Parses **every** shipped
`.d.ts` (`types/**` + `ambient/` + `augmentations/`, ~57k files) for
*syntactic* (parse) errors - no type-checking, so it stays fast. The known
set is frozen in
[`typings/__smoke/syntax-baseline.json`](../typings/__smoke/syntax-baseline.json) -
**currently empty**: the `sanitize-invalid-dts` post-patch removes/repairs the
generator emissions TS cannot parse (`package-info` descriptors, `-Name`
file-facade classes, Kotlin function supertypes in heritage clauses, members
named `constructor`). The gate fails on any **new** parse error anywhere in
the package.

**Part C - relative-import resolution. Zero tolerance.** Every `from './...'`
specifier in the package must resolve to a real file. Broken relative imports
are invisible under consumers' `skipLibCheck: true` and silently degrade the
imported type to `any` - this is exactly how the TitleEvent payloads and
`localStorage` once shipped untyped.

**Part D - semantic surface check (`skipLibCheck: false`).** Type-checks the
script-author surface - `ambient/`, `augmentations/`,
`types/.../liquidbounce/script/**`, `types/.../liquidbounce/event/events/**` -
with full semantics, the way no consumer ever does (everyone runs
`skipLibCheck`). Two ratchets in
[`typings/__smoke/semantic-baseline.json`](../typings/__smoke/semantic-baseline.json):

- errors located **in** surface files: `file:code:symbol#N` entries keyed by
  the enclosing declaration (class / interface / member), **not** the line
  number - so an upstream doc comment or import added above a known error
  doesn't shift its line and read as a spurious "new" error (the `#N`
  occurrence index still catches a genuinely new error of the same code on the
  same symbol). Target: empty; the current set is generator-layer debt, e.g.
  `TS2420` from erased supertype mismatches;
- errors in **transitively-loaded** generated files (the `kotlin.*`-leak
  long tail across the MC/third-party namespaces): per-TS-code **counts**,
  so the debt can only shrink.

## Baselines

When a regen legitimately changes a set (errors fixed by a generator
improvement, or a new triaged-and-accepted quirk), re-freeze both:

```bash
npm run typecheck:update-baseline
```

The gate prints a `note` when baselined errors are no longer present, so the
baselines can be tightened as the generator improves.

## Scope notes

- The gate runs on the committed tree, so it does not require the generator
  submodule or a LiquidBounce checkout.
- Part D's transitive ratchet intentionally tracks *counts per error code*,
  not exact locations - regen shifts line numbers tree-wide, and the point is
  the trend, not the coordinates.
