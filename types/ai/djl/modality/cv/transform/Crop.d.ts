import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { Transform } from '../../../../../ai/djl/translate/Transform.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Crop extends Object implements Transform {
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    // private height: number;
    // private width: number;
    // private x: number;
    // private y: number;
    transform(arg0: NDArray): NDArray;
}