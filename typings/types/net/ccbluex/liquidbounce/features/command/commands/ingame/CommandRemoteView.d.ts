import type { CommandDispatcher } from '../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandRegistrar } from '../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
/**
 * RemoteView Command
 *
 * Allows you to view from the perspective of another player in the game.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandRemoteView.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandRemoteView.kt:40}
 */
export class CommandRemoteView extends Object implements CommandRegistrar {
    static INSTANCE: CommandRemoteView;
    // private pName: string | null;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
}