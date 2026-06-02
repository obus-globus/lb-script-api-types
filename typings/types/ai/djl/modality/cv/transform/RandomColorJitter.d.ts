import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { Transform } from '../../../../../ai/djl/translate/Transform.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RandomColorJitter extends Object implements Transform {
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    // private brightness: number;
    // private contrast: number;
    // private hue: number;
    // private saturation: number;
    transform(arg0: NDArray): NDArray;
}