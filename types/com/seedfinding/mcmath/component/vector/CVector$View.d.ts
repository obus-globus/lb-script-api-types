import type { Complex } from '../../../../../com/seedfinding/mcmath/arithmetic/Complex.d.ts'
import type { Norm } from '../../../../../com/seedfinding/mcmath/component/Norm.d.ts'
import type { CVector } from '../../../../../com/seedfinding/mcmath/component/vector/CVector.d.ts'
import type { CVector$Generator } from '../../../../../com/seedfinding/mcmath/component/vector/CVector$Generator.d.ts'
import type { CVector$View$Setter } from '../../../../../com/seedfinding/mcmath/component/vector/CVector$View$Setter.d.ts'
import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
export class CVector$View extends CVector {
    static SUM: (param0: CVector) => Complex;
    static basis(paramarg0: number, paramarg1: number): CVector;
    static basis(paramarg0: number, paramarg1: number, paramarg2: Complex): CVector;
    static basis(paramarg0: number, paramarg1: number, paramarg2: BigInteger): CVector;
    static basis(paramarg0: number, paramarg1: number, paramarg2: number): CVector;
    static zero(paramarg0: number): CVector;
    constructor(arg0: number, arg1: (param0: number) => com.seedfinding.mcmath.arithmetic.Complex, arg2: (param0: number, param1: Complex) => void)
    readonly dimension: number;
    // private getter: (param0: number) => com.seedfinding.mcmath.arithmetic.Complex;
    // private setter: (param0: number, param1: Complex) => void;
    get(arg0: number): Complex;
    getDimension(): number;
    set(arg0: number, arg1: Complex): CVector;
}