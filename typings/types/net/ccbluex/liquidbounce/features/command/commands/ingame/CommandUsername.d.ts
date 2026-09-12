import type { CommandDispatcher } from '../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandRegistrar } from '../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
/**
 * CommandUsername
 *
 * Displays the current username.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f0d427e933b0c39374cea4bd371582db202074f3/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandUsername.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandUsername.kt:40}
 */
export class CommandUsername extends Object implements CommandRegistrar {
    static INSTANCE: CommandUsername;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
}