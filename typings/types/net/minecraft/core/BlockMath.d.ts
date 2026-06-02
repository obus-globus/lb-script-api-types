import type { Transformation } from '../../../com/mojang/math/Transformation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Direction } from '../../../net/minecraft/core/Direction.d.ts'
export class BlockMath extends Object {
    static blockCenterToCorner(paramtransform: Transformation): Transformation;
    static blockCornerToCenter(paramtransform: Transformation): Transformation;
    static getFaceTransformation(paramtransformation: Transformation, paramoriginalSide: Direction): Transformation;
    constructor()
}