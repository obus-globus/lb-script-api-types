import type { Trainer } from '../../../../ai/djl/training/Trainer.d.ts'
import type { TrainingListenerAdapter } from '../../../../ai/djl/training/listener/TrainingListenerAdapter.d.ts'
export class EpochTrainingListener extends TrainingListenerAdapter {
    constructor()
    // private epochTime: number;
    readonly numEpochs: number;
    getNumEpochs(): number;
    onEpoch(arg0: Trainer): void;
    onTrainingBegin(arg0: Trainer): void;
    onTrainingEnd(arg0: Trainer): void;
}