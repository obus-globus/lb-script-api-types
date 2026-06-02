import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
import type { Parameter } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Parameter.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
export class CommandItemStack extends Object implements Command$Factory, MinecraftShortcuts {
    static INSTANCE: CommandItemStack;
    // private amountParameter: Parameter<number>;
    createCommand(): Command;
}