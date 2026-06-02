import type { Trainer } from '../../../../ai/djl/training/Trainer.d.ts'
import type { Evaluator } from '../../../../ai/djl/training/evaluator/Evaluator.d.ts'
import type { TrainingListener$BatchData } from '../../../../ai/djl/training/listener/TrainingListener$BatchData.d.ts'
import type { TrainingListenerAdapter } from '../../../../ai/djl/training/listener/TrainingListenerAdapter.d.ts'
export class EvaluatorTrainingListener extends TrainingListenerAdapter {
    static TRAIN_ALL: string;
    static TRAIN_EPOCH: string;
    static TRAIN_PROGRESS: string;
    static VALIDATE_EPOCH: string;
    static metricName(paramarg0: Evaluator, paramarg1: string): string;
    constructor()
    constructor(arg0: number)
    readonly latestEvaluations: { [key: string]: number };
    // private progressCounter: number;
    // private progressUpdateFrequency: number;
    getLatestEvaluations(): { [key: string]: number };
    onEpoch(arg0: Trainer): void;
    onTrainingBatch(arg0: Trainer, arg1: TrainingListener$BatchData): void;
    onTrainingBegin(arg0: Trainer): void;
    onValidationBatch(arg0: Trainer, arg1: TrainingListener$BatchData): void;
    // private updateEvaluators(arg0: Trainer, arg1: TrainingListener$BatchData, arg2: string[]): void;
}