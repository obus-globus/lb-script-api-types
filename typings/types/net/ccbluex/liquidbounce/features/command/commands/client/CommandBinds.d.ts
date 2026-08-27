import type { CommandDispatcher } from '../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandRegistrar } from '../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
/**
 * Binds Command
 *
 * Allows you to manage the bindings of modules to keys.
 * It provides subcommands to add, remove, list and clear bindings.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandBinds.kt#L66 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandBinds.kt:66}
 */
export class CommandBinds extends Object implements CommandRegistrar {
    static INSTANCE: CommandBinds;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
}