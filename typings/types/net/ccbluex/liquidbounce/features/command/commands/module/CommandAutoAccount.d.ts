import type { CommandDispatcher } from '../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandRegistrar } from '../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
/**
 * AutoAccount Command
 *
 * Allows you to manually trigger the actions of {@link ModuleAutoAccount}.
 *
 * Module: {@link ModuleAutoAccount}
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/CommandAutoAccount.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/CommandAutoAccount.kt:34}
 */
export class CommandAutoAccount extends Object implements CommandRegistrar {
    static INSTANCE: CommandAutoAccount;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
}