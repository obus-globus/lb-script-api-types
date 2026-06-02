import type { Shape } from '../../../ai/djl/ndarray/types/Shape.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NDUtils extends Object {
    static checkConcatInput(paramarg0: (Object | null)[]): void;
    static getShapeFromEmptyNDArrayForReductionOp(paramarg0: Shape, paramarg1: number): Shape;
    private constructor()
}