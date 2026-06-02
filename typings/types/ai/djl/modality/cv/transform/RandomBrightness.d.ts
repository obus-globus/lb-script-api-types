import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { Transform } from '../../../../../ai/djl/translate/Transform.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RandomBrightness extends Object implements Transform {
    constructor(arg0: number)
    // private brightness: number;
    transform(arg0: NDArray): NDArray;
}