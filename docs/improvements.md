# Improvements over the official LiquidBounce script-API types

This package is a heavily-refined fork of the TypeScript declarations CCBlueX
publishes as **`@ccbluex/liquidbounce-script-api`**. The baseline ("official" /
"vanilla" below) is the output of CCBlueX's own pipeline — the
[`commandblock2/ts-generator`](https://github.com/commandblock2/ts-generator) fork
running [`ts-defgen.js`](https://github.com/CCBlueX/LiquidBounce/blob/nextgen/scripts/ts-defgen.js)
against a LiquidBounce build.

Everything below is generated/applied **automatically on every regen** (see
[`README`](../README.md) / [`run-regen.sh`](../run-regen.sh)) unless marked otherwise,
so it stays in sync as LiquidBounce evolves.

For what's **still on the table**, see [backlog.md](backlog.md).

## At a glance

| Area | Improvement | Layer |
|------|-------------|-------|
| **Types** | `Unit`/`Void` → `void`; `IntRange`/`Any?`/synthetic-member cleanup | generator |
| | Real `private constructor(...)` (blocks invalid `new`) | generator |
| | Enum `name()` returns a string-literal **union** of the constants | generator |
| | Deterministic member/supertype ordering (stable diffs) | generator |
| **Events** | `ScriptModule.on()` gets **one typed overload per LB event (~122)** — autocomplete + typed payloads, instead of `on(string, () => void)` | ts-defgen + post-patch |
| **API ergonomics** | `registerScript` / `registerModule` typed to the **real runtime contract** (callable / `ScriptModule` callback) | post-patch |
| | `ScriptSetting` factories take typed **option objects** (`{ name, default, range, … }`) | post-patch |
| | `PolyglotScript.on()` narrowed to the 3 real lifecycle literals (`load`/`enable`/`disable`) | post-patch |
| | DSL receiver lambdas (e.g. `ValueGroup.curve { … }`) typed correctly | post-patch |
| **Bindings** | F1–F6 runtime-name fixes: dedup ambient block, drop the phantom `Client` category, `SilentHotbar`/`Hand` globals, `attackEntity` `@JvmName` | post-patch |
| **Globals** | Auto-detected `ambient.d.ts` (`mc`, `Client`, `RotationUtil`, `Setting`, …) + GraalVM JS intrinsics declared in `declare global` | ts-defgen + post-patch |
| **Docs** | **KDoc → TSDoc injection** — LiquidBounce's Kotlin doc comments become hover docs on classes/members | post-patch (`apply-kdoc`) |
| **Augmentations** | Hand-written overlays for `ScriptModule`, `ClientLevel`, `ScriptReflectionUtil` + a barrel index | augmentation |
| **Packaging** | One `.d.ts` per class (lazy `tsc` resolution) + corrected `typesVersions` path map | generator + post-patch |
| **Infra** | Runs at all under **JDK 25 / GraalVM** + **LB's runtime Kotlin** (no bundled-Kotlin crash); reproducible native / Docker / CI flow | infrastructure |

---

## Type correctness (generator)

- **`Unit` / `Void` / `Void.TYPE` → `void`.** Vanilla leaks Kotlin `Unit` (an
  unimportable type) for every void-returning function, so handlers type as `any`.
  We emit `void` in return position and nested generics (`Function0<Unit>` →
  `() => void`).
- **`IntRange` collapse.** Reflected as a ~10-internal-member class upstream; we
  alias it to `{ start: number; endInclusive: number; step: number }`.
- **`kotlin.Any?` nullable-suffix bleed.** Vanilla emits the trailing Kotlin `?`
  verbatim (`Any?`), invalid TS; we normalise it.
- **Synthetic-member filter.** Drops Kotlin/JVM compiler-synthetic members
  (`access$…`, mixin counters, etc.) that pollute the surface.
- **Real `private constructor(...)`.** Vanilla emits a `// private constructor`
  *comment* (invisible to `tsc`, so `new Foo()` compiles for utility/sealed
  types). We emit the real `private` modifier so the compiler rejects it.
- **Enum `name()` string-literal union.** For Kotlin enums we add
  `name(): "A" | "B" | …` so `if (e.name() === "LINEAR")` narrows — without lying
  about the runtime shape (they stay `Enum<X>` objects).
- **Deterministic ordering** of members + supertypes, so regen diffs are stable
  and reviewable.
- **Kotlin singleton `object`** that implements `Iterable`/`Collection`/`Map` is
  emitted with the right structural interface instead of a broken class.

## Events — typed `ScriptModule.on()`

The single biggest ergonomic win. Vanilla gives you `on(eventName: string,
handler: () => void)`. `ts-defgen` enumerates **every LiquidBounce `@Tag` event
(~122)** and the post-patch generates a **typed overload per event** in
`augmentations/ScriptModule.augmentation.d.ts`, e.g.:

```ts
on(event: "attack", handler: (e: AttackEntityEvent) => void): void;
on(event: "playerMove", handler: (e: PlayerMoveEvent) => void): void;
// …one per tag, with the real payload type
```

The generic `on(string, …)` is stripped (`T-10`) so the narrowed overloads
actually take effect — giving autocomplete of event names and typed payloads.

## API-contract narrowing (post-patch)

- **`registerScript`** — typed as a callable matching the real
  `{ name; version; authors }` contract instead of the reflected
  `Map<String, Object>`.
- **`registerModule`** — callback typed `(module: ScriptModule) => void` (the
  real runtime subclass), not `ClientModule`.
- **`ScriptSetting` factories** — each takes a typed option object
  (`{ name, default, range, suffix, choices, canBeNone }`) reflecting the
  `ScriptSetting.kt` runtime contract, not a raw `Value`.
- **`PolyglotScript.on()`** — narrowed to the three lifecycle literals actually
  dispatched: `"load"`, `"enable"`, `"disable"`.
- **DSL receiver lambdas** — Kotlin builder DSLs (e.g.
  `ValueGroup.curve(name) { … }`) are emitted with the correct receiver-typed
  lambda instead of an opaque `Function`.
- **TS reserved-word parameter renames** — params named `this`/`function`/etc.
  in the JVM signature are renamed so the `.d.ts` parses.

## Binding fixes (F1–F6)

Idempotent corrections for runtime-vs-reflection name mismatches:

- **F1** — dedup the duplicated import + `export const` block in `ambient.d.ts`.
- **F2** — drop the phantom `"Client"` module category the JSDoc lists (only 8
  exist; using it NPEs at runtime).
- **F4** — add `SilentHotbar` as an ambient global (has a type but wasn't exposed).
- **F5** — `ScriptInteractionUtil.attackEntityJs` is `@JvmName("attackEntity")`;
  the runtime member is `attackEntity`, so we rename it (reflection can't recover
  the `@JvmName`).
- **F6** — `InteractionHand` is bound at runtime as `Hand`; add a `Hand` alias.

## Ambient globals & GraalVM intrinsics

- **Auto-detected `ambient.d.ts`** — `mc`, `Client`, `RotationUtil`, `Setting`,
  `Vec3`, `Mth`, … exported as the real top-level bindings a script sees.
- **GraalVM JS intrinsics** (`Java.type`, `Polyglot`, …) declared inside
  `declare global { }`; they're host-provided non-enumerable globals that vanilla
  detection misses.

## Documentation — KDoc → TSDoc

`apply-kdoc.py` parses LiquidBounce's Kotlin **KDoc** (via the `kdoc-extractor`
PSI manifest) and injects matching **TSDoc** blocks onto classes and members in
the generated `.d.ts` — so script authors get real hover documentation,
`@param`/`@returns`/`@deprecated`/`@since`, and `[Symbol]` → `{@link Symbol}`
cross-references. (The generator also has a `KDocSource` path; the post-patch is
the authoritative injector.) Vanilla ships no doc comments at all.

## Augmentations (hand-written overlays)

Layered on top of the generated tree and barrel-indexed
(`augmentations/index.d.ts`):

- **`ScriptModule`** — the ~122 typed `on()` event overloads.
- **`ClientLevel`** — re-exposes `getEntities` etc. with usable types.
- **`ScriptReflectionUtil`** — narrowed reflection helpers.

## Packaging

- **One `.d.ts` per class** mirroring the JVM package layout (~57k files) so
  `tsc` lazily resolves only what a script imports, instead of parsing a single
  ~270 MB monolith.
- **`typesVersions` path map** corrected so `types/foo` / `augmentations/foo`
  resolve.
- Hand-curated `package.json` (correct name, `private`, version pinned to the LB
  build) preserved across regens.

## Infrastructure — makes regen possible at all

- **JDK 25 / GraalVM compatibility** — newer LB requires JVM 25, where
  `ts-defgen.js`'s `new URLClassLoader(...)` / `Class.forName(...)` hit
  `IllegalAccessException` (caller-sensitive under Truffle host interop). The
  generator is wrapped as a **Fabric mod** so Knot resolves its classes via
  `ScriptReflectionUtil.classByName` instead.
- **Uses LiquidBounce's runtime Kotlin.** The generator no longer bundles its own
  `kotlin-stdlib`/`kotlin-reflect`; bundling an older copy crashed `ts-defgen`
  with `NoSuchFieldError: KParameter$Kind … CONTEXT` against LB's Kotlin 2.3.10.
  See [regen-troubleshooting.md](regen-troubleshooting.md).
- **Reproducible end-to-end flow** — one command natively (`run-regen.sh`), a
  pinned-toolchain **Docker** image with cached volumes, and a **GitHub Action**
  that regenerates and opens a PR.
