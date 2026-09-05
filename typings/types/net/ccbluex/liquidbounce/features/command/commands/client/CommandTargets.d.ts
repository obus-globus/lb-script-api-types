import type { CommandDispatcher } from '../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandRegistrar } from '../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
/**
 * Enemy Command
 *
 * Provides subcommands for enemy configuration.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandTargets.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandTargets.kt:42}
 */
export class CommandTargets extends Object implements CommandRegistrar {
    static INSTANCE: CommandTargets;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
}