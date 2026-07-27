import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
/**
 * Replacement of `ObjectRef<VoxelShape>`
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/ShapeMergeUtil.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/ShapeMergeUtil.kt:42}
 */
export class ShapeJoiner extends Object {
    constructor()
    readonly value: VoxelShape;
    add(shape: VoxelShape): void;
}