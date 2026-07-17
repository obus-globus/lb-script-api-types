import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { Evaluator } from '../../../../ai/djl/training/evaluator/Evaluator.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractAccuracy extends Evaluator {
    constructor(arg0: string)
    constructor(arg0: string, arg1: number)
    // private axis: number;
    // private correctInstances: JavaMap<string, number>;
    accuracyHelper(arg0: (Object | null)[], arg1: (Object | null)[]): Pair<number, NDArray>;
    addAccumulator(arg0: string): void;
    evaluate(arg0: (Object | null)[], arg1: (Object | null)[]): NDArray;
    getAccumulator(arg0: string): number;
    resetAccumulator(arg0: string): void;
    updateAccumulator(arg0: string, arg1: (Object | null)[], arg2: (Object | null)[]): void;
    updateAccumulators(arg0: string[], arg1: (Object | null)[], arg2: (Object | null)[]): void;
}