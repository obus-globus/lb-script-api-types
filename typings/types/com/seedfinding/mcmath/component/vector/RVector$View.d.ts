import type { Real } from '../../../../../com/seedfinding/mcmath/arithmetic/Real.d.ts'
import type { Norm } from '../../../../../com/seedfinding/mcmath/component/Norm.d.ts'
import type { RVector } from '../../../../../com/seedfinding/mcmath/component/vector/RVector.d.ts'
import type { RVector$Generator } from '../../../../../com/seedfinding/mcmath/component/vector/RVector$Generator.d.ts'
import type { RVector$View$Setter } from '../../../../../com/seedfinding/mcmath/component/vector/RVector$View$Setter.d.ts'
import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
export class RVector$View extends RVector {
    static EUCLIDEAN: (param0: RVector) => Real;
    static EUCLIDEAN_SQ: (param0: RVector) => Real;
    static SUM: (param0: RVector) => Real;
    static basis(paramarg0: number, paramarg1: number): RVector;
    static basis(paramarg0: number, paramarg1: number, paramarg2: Real): RVector;
    static basis(paramarg0: number, paramarg1: number, paramarg2: BigInteger): RVector;
    static basis(paramarg0: number, paramarg1: number, paramarg2: number): RVector;
    static zero(paramarg0: number): RVector;
    constructor(arg0: number, arg1: (param0: number) => Real, arg2: (param0: number, param1: Real) => void)
    readonly dimension: number;
    // private getter: (param0: number) => Real;
    // private setter: (param0: number, param1: Real) => void;
    get(arg0: number): Real;
    getDimension(): number;
    set(arg0: number, arg1: Real): RVector;
}