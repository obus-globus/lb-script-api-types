import type { Trainer } from '../../../../ai/djl/training/Trainer.d.ts'
import type { TrainingListenerAdapter } from '../../../../ai/djl/training/listener/TrainingListenerAdapter.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
export class SaveModelTrainingListener extends TrainingListenerAdapter {
    constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: number)
    readonly checkpoint: number;
    // private epoch: number;
    // private onSaveModel: (param0: Trainer) => void;
    // private outputDir: string;
    readonly overrideModelName: string;
    getCheckpoint(): number;
    getOverrideModelName(): string;
    onEpoch(arg0: Trainer): void;
    onTrainingEnd(arg0: Trainer): void;
    saveModel(arg0: Trainer): void;
    setCheckpoint(arg0: number): void;
    setOverrideModelName(arg0: string): void;
    setSaveModelCallback(arg0: (param0: Trainer) => void): void;
}