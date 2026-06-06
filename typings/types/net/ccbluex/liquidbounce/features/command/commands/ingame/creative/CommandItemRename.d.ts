import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * ItemRename Command
 *
 * Allows you to rename an item held in the player's hand.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/creative/CommandItemRename.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/creative/CommandItemRename.kt:35}
 */
export class CommandItemRename extends Object implements Command$Factory {
    static INSTANCE: CommandItemRename;
    createCommand(): Command;
}