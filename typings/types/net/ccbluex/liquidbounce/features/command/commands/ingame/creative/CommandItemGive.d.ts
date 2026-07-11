import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * ItemGive Command
 *
 * Allows you to give items to the player.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/creative/CommandItemGive.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/creative/CommandItemGive.kt:42}
 */
export class CommandItemGive extends Object implements Command$Factory {
    static INSTANCE: CommandItemGive;
    createCommand(): Command;
}