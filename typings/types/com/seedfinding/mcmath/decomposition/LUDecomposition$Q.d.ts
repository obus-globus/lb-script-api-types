import type { Rational } from '../../../../com/seedfinding/mcmath/arithmetic/Rational.d.ts'
import type { QMatrix } from '../../../../com/seedfinding/mcmath/component/matrix/QMatrix.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LUDecomposition$Q extends Object {
    constructor(arg0: QMatrix)
    // private L: QMatrix;
    readonly LU: QMatrix;
    // private P: QMatrix;
    // private U: QMatrix;
    // private det: Rational;
    // private inv: QMatrix;
    readonly matrix: QMatrix;
    readonly pivot: number[];
    readonly singular: boolean;
    readonly size: number;
    readonly swaps: number;
    getDeterminant(): Rational;
    getInverse(): QMatrix;
    getL(): QMatrix;
    getLU(): QMatrix;
    getMatrix(): QMatrix;
    getP(): QMatrix;
    getPivot(): number[];
    getSize(): number;
    getSwaps(): number;
    getU(): QMatrix;
    isSingular(): boolean;
    refresh(): LUDecomposition$Q;
}