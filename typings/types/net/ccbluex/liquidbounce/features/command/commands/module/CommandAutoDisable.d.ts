import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * AutoDisable Command
 *
 * Allows you to manage the list of modules that are automatically disabled.
 * It provides subcommands to add, remove, list and clear modules from the auto-disable list.
 *
 * Module: {@link ModuleAutoDisable}
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/CommandAutoDisable.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/CommandAutoDisable.kt:47}
 */
export class CommandAutoDisable extends Object implements Command$Factory {
    static INSTANCE: CommandAutoDisable;
    // private addSubcommand(): Command;
    // private clearSubcommand(): Command;
    createCommand(): Command;
    // private listSubcommand(): Command;
    // private removeSubcommand(): Command;
}