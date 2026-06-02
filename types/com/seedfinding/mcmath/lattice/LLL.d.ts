import type { Rational } from '../../../../com/seedfinding/mcmath/arithmetic/Rational.d.ts'
import type { QMatrix } from '../../../../com/seedfinding/mcmath/component/matrix/QMatrix.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LLL extends Object {
    static DEFAULT_DELTA: Rational;
    static MAX_DELTA: Rational;
    static MIN_DELTA: Rational;
    static reduce(paramarg0: QMatrix): QMatrix;
    static reduce(paramarg0: QMatrix, paramarg1: Rational): QMatrix;
    static reduceAndSet(paramarg0: QMatrix): QMatrix;
    static reduceAndSet(paramarg0: QMatrix, paramarg1: Rational): QMatrix;
    static supports(paramarg0: QMatrix): boolean;
    constructor()
}