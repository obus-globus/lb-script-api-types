import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { Transform } from '../../../../../ai/djl/translate/Transform.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CenterFit extends Object implements Transform {
    constructor(arg0: number, arg1: number)
    // private height: number;
    // private width: number;
    transform(arg0: NDArray): NDArray;
}