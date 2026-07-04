# Improvements over the official LiquidBounce script-API types

This package is a heavily-refined fork of the TypeScript declarations CCBlueX
publishes as **`@ccbluex/liquidbounce-script-api`**. The baseline ("official" /
"vanilla" below) is the output of CCBlueX's own pipeline - the
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
| **Types** | `Unit`/`Void` -> `void`; `IntRange`/`Any?`/synthetic-member cleanup | generator |
| | Real `private constructor(...)` (blocks invalid `new`) | generator |
| | Enum `name()` returns a string-literal **union** of the constants | generator |
| | Deterministic member/supertype ordering (stable diffs) | generator |
| **Signatures** | **Real parameter names** - `paramarg0/1...` placeholders renamed to the source names (`formatAvatarUrl(uuid, username)`), recovered from LB source | extractor + post-patch |
| **Events** | `ScriptModule.on()` gets **one typed overload per LB event (~122)** - autocomplete + typed payloads, instead of `on(string, () => void)` | ts-defgen + post-patch |
| **API ergonomics** | `registerScript` / `registerModule` typed to the **real runtime contract** (callable / `ScriptModule` callback) | post-patch |
| | `ScriptSetting` factories take typed **option objects** (`{ name, default, range, ... }`) | post-patch |
| | `PolyglotScript.on()` narrowed to the 3 real lifecycle literals (`load`/`enable`/`disable`) | post-patch |
| | DSL receiver lambdas (e.g. `ValueGroup.curve { ... }`) typed correctly | post-patch |
| **Bindings** | F1-F9 fixes: dedup ambient block, drop the phantom `Client` category, `Hand` alias, `attackEntity` `@JvmName`, **field/method name collisions** (`onGround()` un-shadowed), honest `localStorage` facade, `Axis`/`RotationAxis` class-handle facade, fictional `SilentHotbar` global removed | post-patch |
| | **S1-S4 sanitize**: invalid generated files deleted/repaired (1,026 `package-info` descriptors, 20 unimportable `-Name` file-facades, 872 Kotlin-function-supertype heritage clauses, `constructor`-named members) - whole package parses clean | post-patch |
| **Globals** | Auto-detected `ambient.d.ts` (`mc`, `Client`, `RotationUtil`, `Setting`, ...) + GraalVM JS intrinsics declared in `declare global` | ts-defgen + post-patch |
| **Docs** | **KDoc -> TSDoc injection** - LiquidBounce's Kotlin doc comments become hover docs on classes/members | post-patch (`apply-kdoc`) |
| **Augmentations** | Hand-written overlays for `ScriptModule`, `ClientLevel`, `ScriptReflectionUtil` + a barrel index | augmentation |
| **Packaging** | One `.d.ts` per class (lazy `tsc` resolution) + corrected `typesVersions` path map | generator + post-patch |
| **Infra** | Runs at all under **JDK 25 / GraalVM** + **LB's runtime Kotlin** (no bundled-Kotlin crash); reproducible native / Docker / CI flow | infrastructure |

---

## Type correctness (generator)

- **`Unit` / `Void` / `Void.TYPE` -> `void`.** Vanilla leaks Kotlin `Unit` (an
  unimportable type) for every void-returning function, so handlers type as `any`.
  We emit `void` in return position and nested generics (`Function0<Unit>` ->
  `() => void`).
- **`IntRange` collapse.** Reflected as a ~10-internal-member class upstream; we
  alias it to `{ start: number; endInclusive: number; step: number }`.
- **`kotlin.Any?` nullable-suffix bleed.** Vanilla emits the trailing Kotlin `?`
  verbatim (`Any?`), invalid TS; we normalise it.
- **Synthetic-member filter.** Drops Kotlin/JVM compiler-synthetic members
  (`access$...`, mixin counters, etc.) that pollute the surface.
- **Real `private constructor(...)`.** Vanilla emits a `// private constructor`
  *comment* (invisible to `tsc`, so `new Foo()` compiles for utility/sealed
  types). We emit the real `private` modifier so the compiler rejects it.
- **Enum `name()` string-literal union.** For Kotlin enums we add
  `name(): "A" | "B" | ...` so `if (e.name() === "LINEAR")` narrows - without lying
  about the runtime shape (they stay `Enum<X>` objects).
- **Deterministic ordering** of members + supertypes, so regen diffs are stable
  and reviewable.
- **Kotlin singleton `object`** that implements `Iterable`/`Collection`/`Map` is
  emitted with the right structural interface instead of a broken class.

## Events - typed `ScriptModule.on()`

The single biggest ergonomic win. Vanilla gives you `on(eventName: string,
handler: () => void)`. `ts-defgen` enumerates **every LiquidBounce `@Tag` event
(~122)** and the post-patch generates a **typed overload per event** in
`augmentations/ScriptModule.augmentation.d.ts`, e.g.:

```ts
on(event: "attack", handler: (e: AttackEntityEvent) => void): void;
on(event: "playerMove", handler: (e: PlayerMoveEvent) => void): void;
// ...one per tag, with the real payload type
```

The generic `on(string, ...)` is stripped (`T-10`) so the narrowed overloads
actually take effect - giving autocomplete of event names and typed payloads.

## Real parameter names (signatures)

ts-generator reflects the JVM class graph, but the JVM erases source parameter
names, so vanilla surfaces every method as `foo(paramarg0: X, paramarg1: Y)` -
call sites get no hint what an argument is. A tree-sitter pass over the
LiquidBounce **source** (`tools/kdoc-extractor/ts-extract.py --signatures-out`)
recovers the real names into a structured `signatures.json` (ordered params with
name + type + nullability + vararg, the return type, and the extension receiver),
and `apply-signatures.py` renames the placeholders in post-processing:

```ts
// vanilla
static formatAvatarUrl(paramarg0: UUID, paramarg1: string): string;
// here
static formatAvatarUrl(uuid: UUID, username: string): string;
```

Matching is deliberately conservative - a *wrong* name is worse than an obvious
placeholder - so a declaration is renamed only when exactly one source overload
fits its arity; same-arity overloads are left untouched. Extension functions
place their receiver at `paramarg0`, named after the receiver type
(`drawBorder(guiGraphicsExtractor, x, y, width, height, color)`). Names are
TS-reserved-word-safe and verified to add zero `tsc` errors. The captured
per-param **types** are not yet substituted for bare `Object` reflections - see
[backlog.md](backlog.md) #12b.

## API-contract narrowing (post-patch)

- **`registerScript`** - typed as a callable matching the real
  `{ name; version; authors }` contract instead of the reflected
  `Map<String, Object>`.
- **`registerModule`** - callback typed `(module: ScriptModule) => void` (the
  real runtime subclass), not `ClientModule`.
- **`ScriptSetting` factories** - each takes a typed option object
  (`{ name, default, range, suffix, choices, canBeNone }`) reflecting the
  `ScriptSetting.kt` runtime contract, not a raw `Value`.
- **`PolyglotScript.on()`** - narrowed to the three lifecycle literals actually
  dispatched: `"load"`, `"enable"`, `"disable"`.
- **DSL receiver lambdas** - Kotlin builder DSLs (e.g.
  `ValueGroup.curve(name) { ... }`) are emitted with the correct receiver-typed
  lambda instead of an opaque `Function`.
- **TS reserved-word parameter renames** - params named `this`/`function`/etc.
  in the JVM signature are renamed so the `.d.ts` parses.

## Binding fixes (F1-F9)

Idempotent corrections for runtime-vs-reflection name mismatches:

- **F1** - dedup the duplicated import + `export const` block in `ambient.d.ts`.
- **F2** - drop the phantom `"Client"` module category the JSDoc lists (only 8
  exist; using it NPEs at runtime).
- **F4 (reversed 2026-06-09)** - the original F4 *added* `SilentHotbar` as an
  ambient global, but LiquidBounce never `putMember`s it (verified at the pin
  and at HEAD) - the export typechecked code that ReferenceErrors at runtime.
  F4 now **removes** the export; the README documents the `Java.type` recipe
  (the generated type stays importable).
- **F5** - `ScriptInteractionUtil.attackEntityJs` is `@JvmName("attackEntity")`;
  the runtime member is `attackEntity`, so we rename it (reflection can't recover
  the `@JvmName`).
- **F6** - `InteractionHand` is bound at runtime as `Hand`; add a `Hand` alias.
- **F8** - `localStorage` is a Java `ConcurrentHashMap<String, Any>` at runtime,
  but the generator never emits the JDK class file, so ambient imported a
  nonexistent module and the global silently typed as `any` (or DOM `Storage`
  with `lib.dom` loaded). Replaced with an inline `ScriptLocalStorage` facade
  matching the Java `Map` surface.
- **F9** - `Axis` / `RotationAxis` are bound as `Axis::class.java` (a host
  *class handle*), but were typed as the instance interface - so the real
  surface (`XP/XN/YP/YN/ZP/ZN`, `of()`) didn't typecheck while nonexistent
  instance calls did. Retyped via an `AxisClassHandle` facade.
- **F7** - resolve Java **field/method name collisions** (`fix-member-collisions.py`).
  Java lets a field and a method share a name (`onGround` + `onGround()`; records,
  JOML math types, `Map.Entry`, enums); TypeScript forbids it, so the field
  declaration silently shadows the method and `x.onGround()` becomes "not
  callable". Drop one declaration per class so the survivor is usable, by a
  heuristic that never loses functionality:
    - *mutable field + a method whose every overload is zero-arg* -> keep the
      **field** (`Vec3.x`, matrix `.m00`, callable T-1 bindings);
    - *otherwise* (readonly field, **or** any parameterized overload) -> keep the
      **method** (`Entity.onGround()`, record `.value()`, enum `.name()`).
  Either form is reachable at runtime regardless (GraalJS resolves field-read vs
  method-invoke by usage); the choice only decides which form is *typed*. The
  v0.38.2 run resolved **1,125 collisions across 687 files** (1,000 fields, 125
  methods dropped). *To be folded into the Kotlin generator next regen and
  demoted to a safety net (the F1/F2/F6 pattern).*

## Ambient globals & GraalVM intrinsics

- **Auto-detected `ambient.d.ts`** - `mc`, `Client`, `RotationUtil`, `Setting`,
  `Vec3`, `Mth`, ... exported as the real top-level bindings a script sees.
- **GraalVM JS intrinsics** (`Java.type`, `Polyglot`, ...) declared inside
  `declare global { }`; they're host-provided non-enumerable globals that vanilla
  detection misses.

## Documentation - KDoc -> TSDoc

`apply-kdoc.py` parses LiquidBounce's Kotlin **KDoc** (via the `kdoc-extractor`
PSI manifest) and injects matching **TSDoc** blocks onto classes and members in
the generated `.d.ts` - so script authors get real hover documentation,
`@param`/`@returns`/`@deprecated`/`@since`, and `[Symbol]` -> `{@link Symbol}`
cross-references. (The generator also has a `KDocSource` path; the post-patch is
the authoritative injector.) Vanilla ships no doc comments at all.

## Augmentations (hand-written overlays)

Layered on top of the generated tree and barrel-indexed
(`augmentations/index.d.ts`):

- **`ScriptModule`** - the ~122 typed `on()` event overloads.
- **`ClientLevel`** - re-exposes `getEntities` etc. with usable types.
- **`ScriptReflectionUtil`** - narrowed reflection helpers.

## Packaging

- **One `.d.ts` per class** mirroring the JVM package layout (~57k files) so
  `tsc` lazily resolves only what a script imports, instead of parsing a single
  ~270 MB monolith.
- **`typesVersions` path map** corrected so `types/foo` / `augmentations/foo`
  resolve.
- Hand-curated `package.json` (correct name, `private`, version pinned to the LB
  build) preserved across regens.

## Infrastructure - makes regen possible at all

- **JDK 25 / GraalVM compatibility** - newer LB requires JVM 25, where
  `ts-defgen.js`'s `new URLClassLoader(...)` / `Class.forName(...)` hit
  `IllegalAccessException` (caller-sensitive under Truffle host interop).
  **Resolved upstream** in LiquidBounce `b759cac57` (PR #8437): a mixin forces
  `HostMethodDesc$SingleMethod.isCallerSensitive=true`, so those caller-sensitive
  methods work from guest JS again. As of pin `b759cac57` we **dropped the
  Fabric-mod wrapper** and `ts-defgen.js` loads the generator via the stock
  `new URLClassLoader(...)` + `ClassPath.from(getContextClassLoader())` path
  (which also stops the generator's own `me/*` classes leaking into the output).
  On an older LB (`< b759cac57`) the mod-wrapping workaround is still required.
- **Uses LiquidBounce's runtime Kotlin.** The generator no longer bundles its own
  `kotlin-stdlib`/`kotlin-reflect`; bundling an older copy crashed `ts-defgen`
  with `NoSuchFieldError: KParameter$Kind ... CONTEXT` against LB's Kotlin 2.3.10.
  See [regen-troubleshooting.md](regen-troubleshooting.md).
- **Reproducible end-to-end flow** - one command natively (`run-regen.sh`), a
  pinned-toolchain **Docker** image with cached volumes, and a **GitHub Action**
  that regenerates and opens a PR.
- **Typecheck gate (v2)** - a fast CI check (`npm run typecheck`, ~20s, no
  regen needed) with four parts: surface smoke tests (typed `on()`,
  `ScriptSetting`, DSL receivers, intrinsics, `registerScript`,
  `registerMode`); a whole-package syntax ratchet (all ~57k files, baseline
  currently **empty**); zero-tolerance relative-import resolution (broken
  imports silently mean `any` under consumers' `skipLibCheck`); and a
  semantic check of the script-author surface with `skipLibCheck:false`,
  ratcheting the transitive generated-type debt so it can only shrink. See
  [typecheck-gate.md](typecheck-gate.md).
