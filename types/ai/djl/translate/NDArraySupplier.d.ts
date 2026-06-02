import type { NDArray } from '../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../ai/djl/ndarray/NDManager.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface NDArraySupplier extends Object{
    get(arg0: NDManager): NDArray;
}