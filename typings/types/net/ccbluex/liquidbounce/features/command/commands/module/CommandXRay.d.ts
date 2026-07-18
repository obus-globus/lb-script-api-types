import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * XRay Command
 *
 * Allows you to add, remove, list, clear, and reset blocks for the XRay module.
 *
 * Module: {@link ModuleXRay}
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/CommandXRay.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/CommandXRay.kt:46}
 */
export class CommandXRay extends Object implements Command$Factory {
    static INSTANCE: CommandXRay;
    // private andSubcommand(): Command;
    // private clearSubcommand(): Command;
    createCommand(): Command;
    // private listSubcommand(): Command;
    // private removeSubcommand(): Command;
    // private resetSubcommand(): Command;
}