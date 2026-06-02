import type { MultiBoxTarget } from '../../../../ai/djl/modality/cv/MultiBoxTarget.d.ts'
import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { Evaluator } from '../../../../ai/djl/training/evaluator/Evaluator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BoundingBoxError extends Evaluator {
    constructor(arg0: string)
    // private multiBoxTarget: MultiBoxTarget;
    // private ssdBoxPredictionError: { [key: string]: number };
    addAccumulator(arg0: string): void;
    evaluate(arg0: (Object | null)[], arg1: (Object | null)[]): NDArray;
    getAccumulator(arg0: string): number;
    resetAccumulator(arg0: string): void;
    updateAccumulator(arg0: string, arg1: (Object | null)[], arg2: (Object | null)[]): void;
    updateAccumulators(arg0: string[], arg1: (Object | null)[], arg2: (Object | null)[]): void;
}