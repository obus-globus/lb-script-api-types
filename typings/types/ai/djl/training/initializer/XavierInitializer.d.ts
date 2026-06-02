import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { DataType } from '../../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { Initializer } from '../../../../ai/djl/training/initializer/Initializer.d.ts'
import type { XavierInitializer$FactorType } from '../../../../ai/djl/training/initializer/XavierInitializer$FactorType.d.ts'
import type { XavierInitializer$RandomType } from '../../../../ai/djl/training/initializer/XavierInitializer$RandomType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class XavierInitializer extends Object implements Initializer {
    static ONES: Initializer;
    static ZEROS: Initializer;
    constructor()
    constructor(arg0: XavierInitializer$RandomType, arg1: XavierInitializer$FactorType, arg2: number)
    // private factorType: XavierInitializer$FactorType;
    // private magnitude: number;
    // private randomType: XavierInitializer$RandomType;
    initialize(arg0: NDManager, arg1: Shape, arg2: DataType): NDArray;
}