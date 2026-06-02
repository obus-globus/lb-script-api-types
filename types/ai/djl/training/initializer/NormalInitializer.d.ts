import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { DataType } from '../../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { Initializer } from '../../../../ai/djl/training/initializer/Initializer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NormalInitializer extends Object implements Initializer {
    static ONES: Initializer;
    static ZEROS: Initializer;
    constructor()
    constructor(arg0: number)
    // private sigma: number;
    initialize(arg0: NDManager, arg1: Shape, arg2: DataType): NDArray;
}