import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Hide Command
 *
 * Allows you to hide specific modules.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandHide.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandHide.kt:45}
 */
export class CommandHide extends Object implements Command$Factory {
    static INSTANCE: CommandHide;
    // private clearSubcommand(): Command;
    createCommand(): Command;
    // private hideSubcommand(): Command;
    // private listSubcommand(): Command;
    // private unhideSubcommand(): Command;
}