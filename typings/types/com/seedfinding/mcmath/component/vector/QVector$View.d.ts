import type { Rational } from '../../../../../com/seedfinding/mcmath/arithmetic/Rational.d.ts'
import type { Norm } from '../../../../../com/seedfinding/mcmath/component/Norm.d.ts'
import type { QVector } from '../../../../../com/seedfinding/mcmath/component/vector/QVector.d.ts'
import type { QVector$Generator } from '../../../../../com/seedfinding/mcmath/component/vector/QVector$Generator.d.ts'
import type { QVector$View$Setter } from '../../../../../com/seedfinding/mcmath/component/vector/QVector$View$Setter.d.ts'
import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
export class QVector$View extends QVector {
    static EUCLIDEAN_SQ: (param0: QVector) => Rational;
    static SUM: (param0: QVector) => Rational;
    static basis(paramarg0: number, paramarg1: number): QVector;
    static basis(paramarg0: number, paramarg1: number, paramarg2: Rational): QVector;
    static basis(paramarg0: number, paramarg1: number, paramarg2: BigInteger): QVector;
    static basis(paramarg0: number, paramarg1: number, paramarg2: number): QVector;
    static zero(paramarg0: number): QVector;
    constructor(arg0: number, arg1: (param0: number) => com.seedfinding.mcmath.arithmetic.Rational, arg2: (param0: number, param1: Rational) => void)
    readonly dimension: number;
    // private getter: (param0: number) => com.seedfinding.mcmath.arithmetic.Rational;
    // private setter: (param0: number, param1: Rational) => void;
    get(arg0: number): Rational;
    getDimension(): number;
    set(arg0: number, arg1: Rational): QVector;
}