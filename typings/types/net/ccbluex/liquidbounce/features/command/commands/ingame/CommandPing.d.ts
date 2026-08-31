import type { CommandDispatcher } from '../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandRegistrar } from '../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
/**
 * Ping Command
 *
 * Verifies the latency of the current player.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandPing.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandPing.kt:35}
 */
export class CommandPing extends Object implements CommandRegistrar {
    static INSTANCE: CommandPing;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
}