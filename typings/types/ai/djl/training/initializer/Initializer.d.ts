import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { DataType } from '../../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Initializer extends Object{
    initialize(arg0: NDManager, arg1: Shape, arg2: DataType): NDArray;
}