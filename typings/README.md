# @obus-globus/lb-script-api-types

TypeScript types for the **LiquidBounce** (nextgen, MC 1.21+) GraalJS **script
API** — the Java / Kotlin / Minecraft surface a LiquidBounce script can reach at
runtime (`mc`, `Client`, `RotationUtil`, `Setting`, every `@Tag` event, …).

A heavily-refined fork of CCBlueX's `@ccbluex/liquidbounce-script-api`: typed
per-event `on()` overloads, KDoc→TSDoc hover docs, binding fixes, ambient globals,
and more. See the [improvements list][improvements] for the full diff.

## Install

```bash
npm i -D @obus-globus/lb-script-api-types
```

## Use

Pull in the ambient script globals via `tsconfig.json`:

```jsonc
{
  "compilerOptions": {
    "types": ["@obus-globus/lb-script-api-types/ambient"]
  }
}
```

Then `mc`, `Client`, `RotationUtil`, `Setting`, `Java.type`, … are globally typed,
and you can import individual classes/events by their JVM path:

```ts
import { AttackEntityEvent } from "@obus-globus/lb-script-api-types/types/net/ccbluex/liquidbounce/event/events/AttackEntityEvent";
```

The package is **one `.d.ts` per class** (mirroring the JVM package layout), so
`tsc` only parses the types you actually import.

## Versioning

The package **version is the LiquidBounce version** the types were generated for
— e.g. `0.38.1` = types for LiquidBounce 0.38.1. The exact LB commit + Minecraft
version are in the `package.json` `liquidbounce` block:

```bash
npm view @obus-globus/lb-script-api-types liquidbounce
```

Regenerate with the pipeline in the [repository][repo] when LiquidBounce updates.

## License & attribution

[GPL-3.0-or-later](./LICENSE) — these types are derived from
[LiquidBounce](https://github.com/CCBlueX/LiquidBounce) (© CCBlueX, GPL-3.0). This
is an independent, modified redistribution; it is **not** published or endorsed by
CCBlueX. The original API types are `@ccbluex/liquidbounce-script-api`.

[improvements]: https://github.com/obus-globus/lb-script-api-types/blob/main/docs/improvements.md
[repo]: https://github.com/obus-globus/lb-script-api-types
