import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { Mutex } from '../../../../../../../kotlinx/coroutines/sync/Mutex.d.ts'
import type { TwoDimensionalRegressionModel } from '../../../../../../../net/ccbluex/liquidbounce/deeplearn/models/TwoDimensionalRegressionModel.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
export class CommandModels extends Object implements Command$Factory {
    static INSTANCE: CommandModels;
    // private mutationMutex: Mutex;
    // private browseModelCommand(): Command;
    createCommand(): Command;
    // private createModelCommand(): Command;
    // private deleteModelCommand(): Command;
    // private improveModelCommand(): Command;
    // private reloadModelCommand(): Command;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private trainModel(command: Command, name: string, model: TwoDimensionalRegressionModel | null, $completion: Continuation<void>): any;
}