import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FaceTargetPositionFactory } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/FaceTargetPositionFactory.d.ts'
import type { AlignedFace } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/AlignedFace.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Like {@link CenterTargetPositionFactory}, but prefers an unobstructed point on the face.
 *
 * The face center can be occluded by the block itself when only a small part of the face is visible
 * from the player's eyes. In that case the click point (and therefore the rotation / reach checks)
 * would be wrong, so fall back to sampling the face for the first visible point. If nothing is
 * visible, the center is kept so wall-range placements keep working.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/FaceTargetPositionFactory.kt#L218 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/FaceTargetPositionFactory.kt:218}
 */
export class ClickableCenterTargetPositionFactory extends Object implements FaceTargetPositionFactory {
    static INSTANCE: ClickableCenterTargetPositionFactory;
    // private FACE_SAMPLE_PROPORTIONS: number[];
    // private findVisiblePointOnFace(face: AlignedFace, targetPos: BlockPos): Vec3 | null;
    producePositionOnFace(face: AlignedFace, targetPos: BlockPos): Vec3;
}