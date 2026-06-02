import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { Evaluator } from '../../../../ai/djl/training/evaluator/Evaluator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IndexEvaluator extends Evaluator {
    constructor(arg0: Evaluator, arg1: number, arg2: number)
    constructor(arg0: Evaluator, arg1: number)
    // private evaluator: Evaluator;
    // private labelsIndex: number;
    // private predictionsIndex: number;
    addAccumulator(arg0: string): void;
    evaluate(arg0: (Object | null)[], arg1: (Object | null)[]): NDArray;
    getAccumulator(arg0: string): number;
    // private getLabels(arg0: (Object | null)[]): (Object | null)[];
    // private getPredictions(arg0: (Object | null)[]): (Object | null)[];
    resetAccumulator(arg0: string): void;
    updateAccumulator(arg0: string, arg1: (Object | null)[], arg2: (Object | null)[]): void;
    updateAccumulators(arg0: string[], arg1: (Object | null)[], arg2: (Object | null)[]): void;
}