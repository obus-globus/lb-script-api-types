import type { Model } from '../../../../ai/djl/Model.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { TrainingConfig } from '../../../../ai/djl/training/TrainingConfig.d.ts'
import type { TrainingResult } from '../../../../ai/djl/training/TrainingResult.d.ts'
import type { Dataset$Usage } from '../../../../ai/djl/training/dataset/Dataset$Usage.d.ts'
import type { RandomAccessDataset } from '../../../../ai/djl/training/dataset/RandomAccessDataset.d.ts'
import type { HpSet } from '../../../../ai/djl/training/hyperparameter/param/HpSet.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class EasyHpo extends Object {
    constructor()
    buildModel(arg0: HpSet): Model;
    fit(): Pair<Model, TrainingResult>;
    getDataset(arg0: Dataset$Usage): RandomAccessDataset;
    inputShape(arg0: HpSet): Shape;
    numEpochs(arg0: HpSet): number;
    numHyperParameterTests(): number;
    saveModel(arg0: Model, arg1: TrainingResult): void;
    setupHyperParams(): HpSet;
    setupTrainingConfig(arg0: HpSet): TrainingConfig;
    // private train(arg0: HpSet, arg1: RandomAccessDataset, arg2: RandomAccessDataset): Pair<Model, TrainingResult>;
}