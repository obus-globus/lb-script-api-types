# @wunk/lb-script-api-types

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
    "lib": ["es2023"],            // no DOM — see below
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
directly (`new Vec3i(1, 2, 3)`), but **statics — including enum constants —
live behind `.static`** (`Hand.static.MAIN_HAND`,
`RotationAxis.static.YP.rotationDegrees(90)`). Direct static access compiles
against older typings but is `undefined` at runtime; these types model the
real reachable surface (verified in a live client).

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

LiquidBounce internals that have a generated type but are **not** runtime
globals (e.g. `SilentHotbar`) are reached via `Java.type`, typed with the
matching import:

```ts
import type { SilentHotbar } from "@wunk/lb-script-api-types/types/net/ccbluex/liquidbounce/utils/client/SilentHotbar";
const silentHotbar = Java.type<{ INSTANCE: SilentHotbar }>(
    "net.ccbluex.liquidbounce.utils.client.SilentHotbar").INSTANCE;
```

## Versioning

`<lb-major>.<lb-minor>.<iteration>`: `major.minor` track the LiquidBounce
release line; the patch is this package's own iteration counter (so type-only
improvements can ship between LB releases). `0.38.2` = "3rd type build for the
LB 0.38 line". The exact LB commit and Minecraft version are in the
`package.json` `liquidbounce` block:

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
