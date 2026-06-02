import type { QMatrix } from '../../../../com/seedfinding/mcmath/component/matrix/QMatrix.d.ts'
import type { QMatrix$Augmented } from '../../../../com/seedfinding/mcmath/component/matrix/QMatrix$Augmented.d.ts'
import type { GaussJordan$Phase } from '../../../../com/seedfinding/mcmath/solver/GaussJordan$Phase.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GaussJordan extends Object {
    static solve(paramarg0: QMatrix$Augmented, paramarg1: GaussJordan$Phase): QMatrix;
    static solveAndSet(paramarg0: QMatrix$Augmented, paramarg1: GaussJordan$Phase): QMatrix;
    constructor()
}