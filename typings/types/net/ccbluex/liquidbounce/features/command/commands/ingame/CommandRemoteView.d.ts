import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
/**
 * RemoteView Command
 *
 * Allows you to view from the perspective of another player in the game.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandRemoteView.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandRemoteView.kt:36}
 */
export class CommandRemoteView extends Object implements Command$Factory, MinecraftShortcuts {
    static INSTANCE: CommandRemoteView;
    // private pName: string | null;
    createCommand(): Command;
    // private offSubcommand(): Command;
    // private viewSubcommand(): Command;
}