import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AlignedFace } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/AlignedFace.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface FaceTargetPositionFactory extends Object{
    /**
     * Samples a position (relative to {@link targetPos}).
     *
     * @param face is relative to origin.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/FaceTargetPositionFactory.kt#L90 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/FaceTargetPositionFactory.kt:90}
     */
    producePositionOnFace(face: AlignedFace, targetPos: BlockPos): Vec3 | null;
}