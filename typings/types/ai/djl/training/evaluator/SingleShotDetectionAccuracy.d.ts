import type { MultiBoxTarget } from '../../../../ai/djl/modality/cv/MultiBoxTarget.d.ts'
import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { AbstractAccuracy } from '../../../../ai/djl/training/evaluator/AbstractAccuracy.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SingleShotDetectionAccuracy extends AbstractAccuracy {
    constructor(arg0: string)
    // private multiBoxTarget: MultiBoxTarget;
    accuracyHelper(arg0: (Object | null)[], arg1: (Object | null)[]): Pair<number, NDArray>;
}