import type { Rational } from '../../../../../com/seedfinding/mcmath/arithmetic/Rational.d.ts'
import type { QMatrix } from '../../../../../com/seedfinding/mcmath/component/matrix/QMatrix.d.ts'
export class QMatrix$Augmented extends QMatrix {
    static identity(paramarg0: number): QMatrix;
    static zero(paramarg0: number, paramarg1: number): QMatrix;
    constructor(arg0: QMatrix, arg1: QMatrix)
    constructor(arg0: QMatrix, arg1: number)
    // private base: QMatrix;
    // private extra: QMatrix;
    readonly split: number;
    get(arg0: number, arg1: number): Rational;
    getBaseMatrix(): QMatrix;
    getColumnCount(): number;
    getExtraMatrix(): QMatrix;
    getRowCount(): number;
    getSplit(): number;
    set(arg0: number, arg1: number, arg2: Rational): QMatrix;
}