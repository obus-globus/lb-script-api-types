import type { Real } from '../../../../com/seedfinding/mcmath/arithmetic/Real.d.ts'
import type { RMatrix } from '../../../../com/seedfinding/mcmath/component/matrix/RMatrix.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LUDecomposition$R extends Object {
    constructor(arg0: RMatrix)
    // private L: RMatrix;
    readonly LU: RMatrix;
    // private P: RMatrix;
    // private U: RMatrix;
    // private det: Real;
    // private inv: RMatrix;
    readonly matrix: RMatrix;
    readonly pivot: number[];
    readonly singular: boolean;
    readonly size: number;
    readonly swaps: number;
    getDeterminant(): Real;
    getInverse(): RMatrix;
    getL(): RMatrix;
    getLU(): RMatrix;
    getMatrix(): RMatrix;
    getP(): RMatrix;
    getPivot(): number[];
    getSize(): number;
    getSwaps(): number;
    getU(): RMatrix;
    isSingular(): boolean;
    refresh(): LUDecomposition$R;
}