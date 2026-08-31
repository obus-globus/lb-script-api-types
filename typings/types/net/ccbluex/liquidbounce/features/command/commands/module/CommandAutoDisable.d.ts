import type { CommandDispatcher } from '../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandRegistrar } from '../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
/**
 * AutoDisable Command
 *
 * Allows you to manage the list of modules that are automatically disabled.
 * It provides subcommands to add, remove, list and clear modules from the auto-disable list.
 *
 * Module: {@link ModuleAutoDisable}
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/CommandAutoDisable.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/CommandAutoDisable.kt:51}
 */
export class CommandAutoDisable extends Object implements CommandRegistrar {
    static INSTANCE: CommandAutoDisable;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
}