import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Hide Command
 *
 * Allows you to hide specific modules.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandHide.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandHide.kt:45}
 */
export class CommandHide extends Object implements Command$Factory {
    static INSTANCE: CommandHide;
    // private clearSubcommand(): Command;
    createCommand(): Command;
    // private hideSubcommand(): Command;
    // private listSubcommand(): Command;
    // private unhideSubcommand(): Command;
}