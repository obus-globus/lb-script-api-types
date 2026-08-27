import type { CommandDispatcher } from '../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandRegistrar } from '../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
/**
 * XRay Command
 *
 * Allows you to add, remove, list, clear, and reset blocks for the XRay module.
 *
 * Module: {@link ModuleXRay}
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/CommandXRay.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/CommandXRay.kt:48}
 */
export class CommandXRay extends Object implements CommandRegistrar {
    static INSTANCE: CommandXRay;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
}