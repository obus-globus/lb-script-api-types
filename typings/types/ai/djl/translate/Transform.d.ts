import type { NDArray } from '../../../ai/djl/ndarray/NDArray.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Transform extends Object{
    transform(arg0: NDArray): NDArray;
}