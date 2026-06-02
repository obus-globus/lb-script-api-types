import type { Complex } from '../../../../../com/seedfinding/mcmath/arithmetic/Complex.d.ts'
import type { CMatrix } from '../../../../../com/seedfinding/mcmath/component/matrix/CMatrix.d.ts'
export class CMatrix$Augmented extends CMatrix {
    static identity(paramarg0: number): CMatrix;
    static zero(paramarg0: number, paramarg1: number): CMatrix;
    constructor(arg0: CMatrix, arg1: CMatrix)
    constructor(arg0: CMatrix, arg1: number)
    // private base: CMatrix;
    // private extra: CMatrix;
    readonly split: number;
    get(arg0: number, arg1: number): Complex;
    getBaseMatrix(): CMatrix;
    getColumnCount(): number;
    getExtraMatrix(): CMatrix;
    getRowCount(): number;
    getSplit(): number;
    set(arg0: number, arg1: number, arg2: Complex): CMatrix;
}