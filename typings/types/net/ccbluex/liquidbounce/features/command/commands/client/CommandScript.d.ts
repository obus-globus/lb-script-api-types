import type { File } from '../../../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
export class CommandScript extends Object implements Command$Factory {
    static INSTANCE: CommandScript;
    // private browseSubcommand(): Command;
    createCommand(): Command;
    // private debugSubcommand(): Command;
    // private editSubcommand(): Command;
    // private listSubcommand(): Command;
    // private loadScriptWithDebug(args: Object[], scriptFile: File, command: Command, name: string): void;
    // private loadSubcommand(): Command;
    // private reloadSubcommand(): Command;
    // private unloadIfLoaded(scriptFile: File, command: Command, name: string): void;
    // private unloadSubcommand(): Command;
}