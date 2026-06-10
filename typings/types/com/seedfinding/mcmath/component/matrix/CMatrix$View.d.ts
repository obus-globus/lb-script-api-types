import type { Complex } from '../../../../../com/seedfinding/mcmath/arithmetic/Complex.d.ts'
import type { CMatrix } from '../../../../../com/seedfinding/mcmath/component/matrix/CMatrix.d.ts'
import type { CMatrix$Generator } from '../../../../../com/seedfinding/mcmath/component/matrix/CMatrix$Generator.d.ts'
import type { CMatrix$View$Setter } from '../../../../../com/seedfinding/mcmath/component/matrix/CMatrix$View$Setter.d.ts'
export class CMatrix$View extends CMatrix {
    static identity(paramarg0: number): CMatrix;
    static zero(paramarg0: number, paramarg1: number): CMatrix;
    constructor(arg0: number, arg1: number, arg2: (param0: number, param1: number) => Complex, arg3: (param0: number, param1: number, param2: Complex) => void)
    readonly columns: number;
    // private getter: (param0: number, param1: number) => Complex;
    readonly rows: number;
    // private setter: (param0: number, param1: number, param2: Complex) => void;
    get(arg0: number, arg1: number): Complex;
    getColumnCount(): number;
    getRowCount(): number;
    set(arg0: number, arg1: number, arg2: Complex): CMatrix;
}