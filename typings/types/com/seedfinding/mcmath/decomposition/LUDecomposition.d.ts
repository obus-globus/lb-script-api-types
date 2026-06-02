import type { QMatrix } from '../../../../com/seedfinding/mcmath/component/matrix/QMatrix.d.ts'
import type { RMatrix } from '../../../../com/seedfinding/mcmath/component/matrix/RMatrix.d.ts'
import type { LUDecomposition$Q } from '../../../../com/seedfinding/mcmath/decomposition/LUDecomposition$Q.d.ts'
import type { LUDecomposition$R } from '../../../../com/seedfinding/mcmath/decomposition/LUDecomposition$R.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LUDecomposition extends Object {
    static of(paramarg0: QMatrix): LUDecomposition$Q;
    static of(paramarg0: RMatrix): LUDecomposition$R;
    constructor()
}