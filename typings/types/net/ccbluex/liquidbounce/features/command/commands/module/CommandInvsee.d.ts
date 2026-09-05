import type { CommandDispatcher } from '../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { UUID } from '../../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandRegistrar } from '../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
/**
 * Command Invsee
 *
 * Lets you view another player's inventory.
 *
 * Module: {@link ModuleInventoryTracker}
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/CommandInvsee.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/CommandInvsee.kt:41}
 */
export class CommandInvsee extends Object implements CommandRegistrar {
    static INSTANCE: CommandInvsee;
    viewedPlayer: UUID | null;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
}