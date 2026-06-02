import type { Image$Interpolation } from '../../../../../ai/djl/modality/cv/Image$Interpolation.d.ts'
import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { Transform } from '../../../../../ai/djl/translate/Transform.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ResizeShort extends Object implements Transform {
    constructor(arg0: number)
    constructor(arg0: number, arg1: number, arg2: Image$Interpolation)
    // private interpolation: Image$Interpolation;
    // private longEdge: number;
    // private shortEdge: number;
    transform(arg0: NDArray): NDArray;
}