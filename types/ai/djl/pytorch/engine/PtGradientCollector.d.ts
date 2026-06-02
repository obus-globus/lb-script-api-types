import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { GradientCollector } from '../../../../ai/djl/training/GradientCollector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PtGradientCollector extends Object implements GradientCollector {
    constructor()
    // private gradModel: boolean;
    backward(arg0: NDArray): void;
    // private backward(arg0: NDArray, arg1: NDArray, arg2: boolean, arg3: boolean): void;
    close(): void;
    zeroGradients(): void;
}