import type { CommandDispatcher } from '../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandRegistrar } from '../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
/**
 * CommandUsername
 *
 * Displays the current username.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandUsername.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandUsername.kt:40}
 */
export class CommandUsername extends Object implements CommandRegistrar {
    static INSTANCE: CommandUsername;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
}