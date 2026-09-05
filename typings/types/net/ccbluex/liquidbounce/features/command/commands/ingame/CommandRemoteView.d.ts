import type { CommandDispatcher } from '../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandRegistrar } from '../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
/**
 * RemoteView Command
 *
 * Allows you to view from the perspective of another player in the game.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandRemoteView.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandRemoteView.kt:40}
 */
export class CommandRemoteView extends Object implements CommandRegistrar {
    static INSTANCE: CommandRemoteView;
    // private pName: string | null;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
}