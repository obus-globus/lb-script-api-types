import type { CommandDispatcher } from '../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandRegistrar } from '../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
/**
 * Hide Command
 *
 * Allows you to hide specific modules.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandHide.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandHide.kt:47}
 */
export class CommandHide extends Object implements CommandRegistrar {
    static INSTANCE: CommandHide;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
}