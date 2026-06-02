import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Result } from '../../../../../../../kotlin/Result.d.ts'
import type { TwoDimensionalRegressionModel } from '../../../../../../../net/ccbluex/liquidbounce/deeplearn/models/TwoDimensionalRegressionModel.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
export class CommandModels extends Object implements Command$Factory {
    static INSTANCE: CommandModels;
    // private browseModelCommand(): Command;
    createCommand(): Command;
    // private createModelCommand(): Command;
    // private deleteModelCommand(): Command;
    // private improveModelCommand(): Command;
    // private reloadModelCommand(): Command;
    // private trainModel(command: Command, name: string, model: TwoDimensionalRegressionModel | null): Result<void>;
}