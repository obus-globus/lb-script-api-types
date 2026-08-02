import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * ItemGive Command
 *
 * Allows you to give items to the player.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/ee595b88333a1dc2ff3055eb6be0860bbedcbdb3/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/creative/CommandItemGive.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/creative/CommandItemGive.kt:42}
 */
export class CommandItemGive extends Object implements Command$Factory {
    static INSTANCE: CommandItemGive;
    createCommand(): Command;
}