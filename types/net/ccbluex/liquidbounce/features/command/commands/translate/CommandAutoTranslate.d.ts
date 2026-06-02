import type { ValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
export class CommandAutoTranslate extends ValueGroup implements Command$Factory {
    static INSTANCE: CommandAutoTranslate;
    readonly languageCode: string;
    createCommand(): Command;
    // private languageCommand(): Command;
    // private setLanguageCommand(): Command;
}