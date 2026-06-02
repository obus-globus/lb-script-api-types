import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MinMaxScaler extends Object implements AutoCloseable {
    constructor()
    // private detached: boolean;
    // private fittedMax: NDArray;
    // private fittedMin: NDArray;
    // private fittedRange: NDArray;
    // private maxRange: number;
    // private minRange: number;
    close(): void;
    detach(): MinMaxScaler;
    fit(arg0: NDArray): MinMaxScaler;
    fit(arg0: NDArray, arg1: number[]): MinMaxScaler;
    getMax(): NDArray;
    getMin(): NDArray;
    // private inverseScale(arg0: NDArray): NDArray;
    // private inverseScalei(arg0: NDArray): NDArray;
    inverseTransform(arg0: NDArray): NDArray;
    inverseTransformi(arg0: NDArray): NDArray;
    optRange(arg0: number, arg1: number): MinMaxScaler;
    // private scale(arg0: NDArray): NDArray;
    // private throwsIllegalStateWhenNotFitted(): void;
    transform(arg0: NDArray): NDArray;
    transformi(arg0: NDArray): NDArray;
}