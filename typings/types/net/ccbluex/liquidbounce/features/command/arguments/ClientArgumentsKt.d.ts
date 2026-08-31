import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ResourceArgument } from '../../../../../../net/minecraft/commands/arguments/ResourceArgument.d.ts'
import type { ItemArgument } from '../../../../../../net/minecraft/commands/arguments/item/ItemArgument.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
export class ClientArgumentsKt extends Object {
    /**
     * Creates the vanilla {@link ItemArgument} bound to the current world's registry access,
     * accepting exactly what `/give` does (`id`, `minecraft:id`, `[id|components]`).
     *
     * Falls back to the static vanilla registry lookup and default feature flags when no
     * world is loaded.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/ClientArguments.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/ClientArguments.kt:61}
     */
    static itemArgument(): ItemArgument;
    /**
     * Creates the vanilla {@link ResourceArgument} for the registry identified by {@link key},
     * parsing to a type-safe {@link Holder.Reference} with vanilla errors and suggestions.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/ClientArguments.kt#L67 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/ClientArguments.kt:67}
     */
    static resourceArgument<T extends unknown>(key: ResourceKey<T[]>): ResourceArgument<T>;
}