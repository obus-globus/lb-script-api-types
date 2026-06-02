import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { Transform } from '../../../../../ai/djl/translate/Transform.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Normalize extends Object implements Transform {
    constructor(arg0: number[], arg1: number[])
    // private mean: number[];
    // private std: number[];
    transform(arg0: NDArray): NDArray;
}