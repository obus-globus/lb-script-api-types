import type { Trainer } from '../../../../ai/djl/training/Trainer.d.ts'
import type { TrainingListener } from '../../../../ai/djl/training/listener/TrainingListener.d.ts'
import type { TrainingListener$BatchData } from '../../../../ai/djl/training/listener/TrainingListener$BatchData.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class TrainingListenerAdapter extends Object implements TrainingListener {
    constructor()
    onEpoch(arg0: Trainer): void;
    onTrainingBatch(arg0: Trainer, arg1: TrainingListener$BatchData): void;
    onTrainingBegin(arg0: Trainer): void;
    onTrainingEnd(arg0: Trainer): void;
    onValidationBatch(arg0: Trainer, arg1: TrainingListener$BatchData): void;
}