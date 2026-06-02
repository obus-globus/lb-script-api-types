import type { Trainer } from '../../../../ai/djl/training/Trainer.d.ts'
import type { TrainingListener$BatchData } from '../../../../ai/djl/training/listener/TrainingListener$BatchData.d.ts'
import type { TrainingListenerAdapter } from '../../../../ai/djl/training/listener/TrainingListenerAdapter.d.ts'
export class TimeMeasureTrainingListener extends TrainingListenerAdapter {
    constructor(arg0: string)
    // private outputDir: string;
    // private trainBatchBeginTime: number;
    // private validateBatchBeginTime: number;
    onEpoch(arg0: Trainer): void;
    onTrainingBatch(arg0: Trainer, arg1: TrainingListener$BatchData): void;
    onTrainingEnd(arg0: Trainer): void;
    onValidationBatch(arg0: Trainer, arg1: TrainingListener$BatchData): void;
}