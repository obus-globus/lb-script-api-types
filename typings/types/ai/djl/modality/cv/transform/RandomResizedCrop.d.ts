import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { Transform } from '../../../../../ai/djl/translate/Transform.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RandomResizedCrop extends Object implements Transform {
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
    // private height: number;
    // private maxAreaScale: number;
    // private maxAspectRatio: number;
    // private minAreaScale: number;
    // private minAspectRatio: number;
    // private width: number;
    transform(arg0: NDArray): NDArray;
}