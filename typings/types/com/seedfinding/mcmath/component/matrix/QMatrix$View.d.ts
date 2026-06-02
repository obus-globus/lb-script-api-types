import type { Rational } from '../../../../../com/seedfinding/mcmath/arithmetic/Rational.d.ts'
import type { QMatrix } from '../../../../../com/seedfinding/mcmath/component/matrix/QMatrix.d.ts'
import type { QMatrix$Generator } from '../../../../../com/seedfinding/mcmath/component/matrix/QMatrix$Generator.d.ts'
import type { QMatrix$View$Setter } from '../../../../../com/seedfinding/mcmath/component/matrix/QMatrix$View$Setter.d.ts'
export class QMatrix$View extends QMatrix {
    static identity(paramarg0: number): QMatrix;
    static zero(paramarg0: number, paramarg1: number): QMatrix;
    constructor(arg0: number, arg1: number, arg2: (param0: number, param1: number) => com.seedfinding.mcmath.arithmetic.Rational, arg3: (param0: number, param1: number, param2: Rational) => void)
    readonly columns: number;
    // private getter: (param0: number, param1: number) => com.seedfinding.mcmath.arithmetic.Rational;
    readonly rows: number;
    // private setter: (param0: number, param1: number, param2: Rational) => void;
    get(arg0: number, arg1: number): Rational;
    getColumnCount(): number;
    getRowCount(): number;
    set(arg0: number, arg1: number, arg2: Rational): QMatrix;
}