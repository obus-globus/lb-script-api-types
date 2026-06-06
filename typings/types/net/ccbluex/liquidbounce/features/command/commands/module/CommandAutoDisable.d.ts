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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/CommandAutoDisable.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/CommandAutoDisable.kt:39}
 */
export class CommandAutoDisable extends Object implements Command$Factory {
    static INSTANCE: CommandAutoDisable;
    // private addSubcommand(): Command;
    // private clearSubcommand(): Command;
    createCommand(): Command;
    // private listSubcommand(): Command;
    // private removeSubcommand(): Command;
}