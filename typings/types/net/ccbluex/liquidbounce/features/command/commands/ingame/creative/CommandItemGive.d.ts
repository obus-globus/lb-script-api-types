import type { CommandDispatcher } from '../../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CommandRegistrar } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
/**
 * ItemGive Command
 *
 * Allows you to give items to the player.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/creative/CommandItemGive.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/creative/CommandItemGive.kt:45}
 */
export class CommandItemGive extends Object implements CommandRegistrar {
    static INSTANCE: CommandItemGive;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
}