import type { Trainer } from '../../../../ai/djl/training/Trainer.d.ts'
import type { TrainingListener$BatchData } from '../../../../ai/djl/training/listener/TrainingListener$BatchData.d.ts'
import type { TrainingListenerAdapter } from '../../../../ai/djl/training/listener/TrainingListenerAdapter.d.ts'
export class DivergenceCheckTrainingListener extends TrainingListenerAdapter {
    constructor()
    onTrainingBatch(arg0: Trainer, arg1: TrainingListener$BatchData): void;
}