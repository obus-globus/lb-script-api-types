# @wunk/lb-script-api-types

<!-- lb-badges:start -->
[![npm](https://img.shields.io/npm/v/@wunk/lb-script-api-types?label=npm&color=cb3837)](https://www.npmjs.com/package/@wunk/lb-script-api-types)
[![Minecraft](https://img.shields.io/badge/Minecraft-26.2-2ea44f)](https://www.npmjs.com/package/@wunk/lb-script-api-types)
[![LiquidBounce](https://img.shields.io/badge/LiquidBounce-0.38.1-5865f2)](https://github.com/CCBlueX/LiquidBounce/commit/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5)
[![LB build](https://img.shields.io/badge/LB_build-v0.38.0--89--gfc8688f1f-555)](https://github.com/CCBlueX/LiquidBounce/commit/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5)
<!-- lb-badges:end -->

The badges track the build these types were generated from: the Minecraft
version, LiquidBounce version, and the LB `git describe`. The LiquidBounce and
LB-build badges link to that exact commit. `npm view @wunk/lb-script-api-types
liquidbounce` has the same block plus the full commit hash.

TypeScript types for the **LiquidBounce** (nextgen, MC 1.21+) GraalJS **script
API**: the Java/Kotlin/Minecraft surface a LiquidBounce script can reach at runtime
(`mc`, `Client`, `RotationUtil`, `Setting`, every `@Tag` event, and so on).

A refined fork of CCBlueX's `@ccbluex/liquidbounce-script-api`, adding typed
per-event `on()` overloads, KDoc-to-TSDoc hover docs, binding fixes, ambient
globals, and more. See the [improvements list][improvements] for the full diff.

## Install

```bash
npm i -D @wunk/lb-script-api-types
```

## Use

Pull in the ambient script globals through `tsconfig.json`:

```jsonc
{
  "compilerOptions": {
    "lib": ["es2023"],            // no DOM - see below
    "types": ["@wunk/lb-script-api-types/ambient"]
  }
}
```

Use a DOM-less `"lib"` (`es2022`/`es2023`): the GraalJS runtime has no DOM,
and if `lib.dom` is loaded its `localStorage: Storage` silently overrides the
script API's `localStorage` (a Java `ConcurrentHashMap` with `get`/`put`, not
`getItem`/`setItem`), plus DOM globals pollute autocomplete with APIs that
don't exist at runtime.

Class-value bindings (`Vec3i`, `BlockPos`, `Hand`, `MathHelper`,
`RotationAxis`, ...) are raw `java.lang.Class` values at runtime: construct
directly (`new Vec3i(1, 2, 3)`), but **statics - including enum constants -
live behind `.static`** (`Hand.static.MAIN_HAND`,
`RotationAxis.static.YP.rotationDegrees(90)`). Direct static access compiles
against older typings but is `undefined` at runtime; these types model the
real reachable surface (verified in a live client).

Scripts run under GraalJS with full host access, so Java **getters are also
readable as bare properties** at runtime: `entity.getHealth()` also works as
`entity.health`, and `entity.isOnGround()` as `entity.onGround`. The types only
carry the method form, so use `getHealth()` for typed access; the shorthand
`.health` runs but is not typed (there are ~48k getters, and generating every
alias would collide with same-named fields). Java collections and arrays likewise
support JS indexing at runtime (`list[0]`, `list.length`, `for (const x of list)`)
while the types expose the Java surface (`list.get(0)`, `list.size()`).

Now `mc`, `Client`, `RotationUtil`, `Setting`, `Java.type`, and the rest are
globally typed. Event handlers are typed per event, since `ScriptModule.on()` has
one overload for each LiquidBounce event:

```ts
module.on("attack", (e) => {
  e.entity;          // typed as the AttackEntityEvent payload
});
```

Import individual classes or events by their JVM path:

```ts
import { AttackEntityEvent } from "@wunk/lb-script-api-types/types/net/ccbluex/liquidbounce/event/events/AttackEntityEvent";
```

The package ships one `.d.ts` per class (mirroring the JVM package layout), so
`tsc` only parses the types a script actually imports.

### Typed `Java.type` (opt-in registry)

By default `Java.type(...)` returns `any` (or takes an explicit generic).
Opt into the string-literal registry and it is fully typed from the class
name alone - autocomplete on the string, typed statics/constructors on the
result. Works in plain JS too (the editor language service picks it up from
jsconfig):

```jsonc
"types": [
  "@wunk/lb-script-api-types/ambient",
  "@wunk/lb-script-api-types/registry-lb"   // net.ccbluex.* (~2.6k classes, ~+1s tsc)
]
```

```ts
const SilentHotbar = Java.type("net.ccbluex.liquidbounce.utils.client.SilentHotbar");
SilentHotbar.INSTANCE.serversideSlot;   // typed - no generic, no import
```

`registry-full` covers every generated class (~49k) - great for editor use,
but it adds tens of seconds to batch `tsc` runs, so prefer `registry-lb` in
CI. Unknown class names fall back to the generic `any` overload either way.

LiquidBounce internals that have a generated type but are **not** runtime
globals (e.g. `SilentHotbar`) are reached via `Java.type`, typed with the
matching import:

```ts
import type { SilentHotbar } from "@wunk/lb-script-api-types/types/net/ccbluex/liquidbounce/utils/client/SilentHotbar";
const silentHotbar = Java.type<{ INSTANCE: SilentHotbar }>(
    "net.ccbluex.liquidbounce.utils.client.SilentHotbar").INSTANCE;
```

## Quickstart

A minimal script: register the script, add a module, and handle a few events.
Each event name autocompletes and its payload is typed.

```ts
const script = registerScript({
    name: "ExampleScript",
    version: "1.0.0",
    authors: ["you"],
});

script.registerModule({ name: "Example", category: "Misc" }, (module) => {
    // Module lifecycle.
    module.on("enable", () => print("Example enabled"));

    // Typed event payloads: `event` is the AttackEntityEvent.
    module.on("attack", (event) => {
        print("attacking " + event.entity);
    });

    // Runs every client tick while the module is enabled.
    module.on("gameTick", () => {
        if (MovementUtil.isMoving()) {
            MovementUtil.strafe();
        }
    });
});

// Script lifecycle.
script.on("load", () => print("loaded"));
```

`registerScript` returns your script handle; `registerModule`'s callback hands
you the module to attach `on()` handlers to. The runtime globals (`mc`, `Client`,
`RotationUtil`, `MovementUtil`, `Setting`, and the rest) are typed and carry hover
docs, so autocomplete works throughout.

### Async HTTP

`AsyncUtil.request(...)` sends an HTTP request and returns a JS `Promise` that
resolves to an `okhttp3.Response`. The promise is typed opaquely (as the GraalVM
`Value`), so cast the awaited result to `Response` for typed access to `.code()`,
`.body().string()`, headers, and the rest:

```ts
import type { Response } from "@wunk/lb-script-api-types/types/okhttp3/Response";

const res = await AsyncUtil.request((b) => b.url("https://example.com")) as unknown as Response;
print("status: " + res.code());
print("body: " + res.body().string());
```

## Versioning

`<lb-major>.<lb-minor>.<lb-patch*1000 + scriptBuild>`: `major.minor` track the
LiquidBounce release line; the patch slot packs LB's own patch (high digits) plus
this package's script-api build counter (low 3 digits), since semver has only
three components. `0.38.1005` = "LB 0.38.1, script build 5". The exact LB commit
and Minecraft version are in the `package.json` `liquidbounce` block:

```bash
npm view @wunk/lb-script-api-types liquidbounce
```

Regenerate with the pipeline in the [repository][repo] when LiquidBounce updates.

## License and attribution

[GPL-3.0-or-later](./LICENSE). These types derive from
[LiquidBounce](https://github.com/CCBlueX/LiquidBounce) (Copyright CCBlueX,
GPL-3.0). This is an independent, modified redistribution. It is not published or
endorsed by CCBlueX. The original API types are `@ccbluex/liquidbounce-script-api`.

[improvements]: https://github.com/obus-globus/lb-script-api-types/blob/main/docs/improvements.md
[repo]: https://github.com/obus-globus/lb-script-api-types
