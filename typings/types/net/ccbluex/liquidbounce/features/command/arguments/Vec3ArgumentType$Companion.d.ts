import type { CommandContext } from '../../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientCommandSource } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class Vec3ArgumentType$Companion extends Object {
    // private EXAMPLES: string[];
    /**
     * Reads the resolved position for the parsed {@link name} argument. Relative (`~`)
     * coordinates resolve against the player, local (`^`) against the look direction.
     *
     * Defaults to the vanilla `Vec3Argument.vec3()` behavior (`centerCorrect = true`),
     * which centers integer block positions on x/z.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/ClientArguments.kt#L122 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/ClientArguments.kt:122}
     */
    getPosition(context: CommandContext<ClientCommandSource>, name: string): Vec3;
}