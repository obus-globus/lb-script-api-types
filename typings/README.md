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
    "types": ["@wunk/lb-script-api-types/ambient"]
  }
}
```

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

## Versioning

The package version is the LiquidBounce version the types were generated for. For
example `0.38.1` means types for LiquidBounce 0.38.1. The exact LB commit and
Minecraft version are in the `package.json` `liquidbounce` block:

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
