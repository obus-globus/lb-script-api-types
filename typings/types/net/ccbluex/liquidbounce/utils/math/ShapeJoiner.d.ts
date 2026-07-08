import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
/**
 * Replacement of `ObjectRef<VoxelShape>`
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/9e7b00e677594d328d20ab213c6936c4d553b720/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/ShapeMergeUtil.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/ShapeMergeUtil.kt:42}
 */
export class ShapeJoiner extends Object {
    constructor()
    readonly value: VoxelShape;
    add(shape: VoxelShape): void;
}