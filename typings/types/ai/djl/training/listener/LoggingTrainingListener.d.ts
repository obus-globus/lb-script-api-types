import type { Metrics } from '../../../../ai/djl/metric/Metrics.d.ts'
import type { Trainer } from '../../../../ai/djl/training/Trainer.d.ts'
import type { Evaluator } from '../../../../ai/djl/training/evaluator/Evaluator.d.ts'
import type { TrainingListener } from '../../../../ai/djl/training/listener/TrainingListener.d.ts'
import type { TrainingListener$BatchData } from '../../../../ai/djl/training/listener/TrainingListener$BatchData.d.ts'
import type { ProgressBar } from '../../../../ai/djl/training/util/ProgressBar.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LoggingTrainingListener extends Object implements TrainingListener {
    constructor()
    constructor(arg0: number)
    // private frequency: number;
    // private numEpochs: number;
    // private trainingProgressBar: ProgressBar;
    // private validateProgressBar: ProgressBar;
    // private getEvaluatorsStatus(arg0: Metrics, arg1: Evaluator[], arg2: string, arg3: number): string;
    // private getTrainingStatus(arg0: Trainer, arg1: number): string;
    onEpoch(arg0: Trainer): void;
    onTrainingBatch(arg0: Trainer, arg1: TrainingListener$BatchData): void;
    onTrainingBegin(arg0: Trainer): void;
    onTrainingEnd(arg0: Trainer): void;
    onValidationBatch(arg0: Trainer, arg1: TrainingListener$BatchData): void;
}