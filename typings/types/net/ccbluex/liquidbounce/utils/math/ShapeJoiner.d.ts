import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
/**
 * Replacement of `ObjectRef<VoxelShape>`
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/ShapeMergeUtil.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/ShapeMergeUtil.kt:42}
 */
export class ShapeJoiner extends Object {
    constructor()
    readonly value: VoxelShape;
    add(shape: VoxelShape): void;
}