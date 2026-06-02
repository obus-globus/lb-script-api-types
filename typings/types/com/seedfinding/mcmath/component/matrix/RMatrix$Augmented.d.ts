import type { Real } from '../../../../../com/seedfinding/mcmath/arithmetic/Real.d.ts'
import type { RMatrix } from '../../../../../com/seedfinding/mcmath/component/matrix/RMatrix.d.ts'
export class RMatrix$Augmented extends RMatrix {
    static identity(paramarg0: number): RMatrix;
    static zero(paramarg0: number, paramarg1: number): RMatrix;
    constructor(arg0: RMatrix, arg1: RMatrix)
    constructor(arg0: RMatrix, arg1: number)
    // private base: RMatrix;
    // private extra: RMatrix;
    readonly split: number;
    get(arg0: number, arg1: number): Real;
    getBaseMatrix(): RMatrix;
    getColumnCount(): number;
    getExtraMatrix(): RMatrix;
    getRowCount(): number;
    getSplit(): number;
    set(arg0: number, arg1: number, arg2: Real): RMatrix;
}