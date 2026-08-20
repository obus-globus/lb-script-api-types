import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * ItemRename Command
 *
 * Allows you to rename an item held in the player's hand.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/creative/CommandItemRename.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/creative/CommandItemRename.kt:40}
 */
export class CommandItemRename extends Object implements Command$Factory {
    static INSTANCE: CommandItemRename;
    createCommand(): Command;
}