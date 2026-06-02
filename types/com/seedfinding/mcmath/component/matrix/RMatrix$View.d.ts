import type { Real } from '../../../../../com/seedfinding/mcmath/arithmetic/Real.d.ts'
import type { RMatrix } from '../../../../../com/seedfinding/mcmath/component/matrix/RMatrix.d.ts'
import type { RMatrix$Generator } from '../../../../../com/seedfinding/mcmath/component/matrix/RMatrix$Generator.d.ts'
import type { RMatrix$View$Setter } from '../../../../../com/seedfinding/mcmath/component/matrix/RMatrix$View$Setter.d.ts'
export class RMatrix$View extends RMatrix {
    static identity(paramarg0: number): RMatrix;
    static zero(paramarg0: number, paramarg1: number): RMatrix;
    constructor(arg0: number, arg1: number, arg2: (param0: number, param1: number) => com.seedfinding.mcmath.arithmetic.Real, arg3: (param0: number, param1: number, param2: Real) => void)
    readonly columns: number;
    // private getter: (param0: number, param1: number) => com.seedfinding.mcmath.arithmetic.Real;
    readonly rows: number;
    // private setter: (param0: number, param1: number, param2: Real) => void;
    get(arg0: number, arg1: number): Real;
    getColumnCount(): number;
    getRowCount(): number;
    set(arg0: number, arg1: number, arg2: Real): RMatrix;
}