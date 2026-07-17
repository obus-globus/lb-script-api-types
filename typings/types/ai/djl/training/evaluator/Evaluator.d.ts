import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Evaluator extends Object {
    constructor(arg0: string)
    readonly name: string;
    // private totalInstances: JavaMap<string, number>;
    addAccumulator(arg0: string): void;
    checkLabelShapes(arg0: NDArray, arg1: NDArray): void;
    checkLabelShapes(arg0: NDArray, arg1: NDArray, arg2: boolean): void;
    evaluate(arg0: (Object | null)[], arg1: (Object | null)[]): NDArray;
    getAccumulator(arg0: string): number;
    getName(): string;
    resetAccumulator(arg0: string): void;
    updateAccumulator(arg0: string, arg1: (Object | null)[], arg2: (Object | null)[]): void;
    updateAccumulators(arg0: string[], arg1: (Object | null)[], arg2: (Object | null)[]): void;
}