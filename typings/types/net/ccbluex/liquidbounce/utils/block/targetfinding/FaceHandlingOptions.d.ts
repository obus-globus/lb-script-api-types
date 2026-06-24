import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FaceTargetPositionFactory } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/FaceTargetPositionFactory.d.ts'
/**
 * Decides how scaffold processes the faces of the considered target blocks.
 *
 * @param facePositionFactory given a face, it will yield a point on the face to target.
 * @param considerFacingAwayFaces decides whether scaffold will consider faces which point away from the player camera as possible targets, as it is mostly nonsensical. The expand-scaffold, for example, needs them to be considered to work.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt#L128 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt:128}
 */
export class FaceHandlingOptions extends Object {
    constructor(facePositionFactory: FaceTargetPositionFactory, considerFacingAwayFaces: boolean)
    readonly considerFacingAwayFaces: boolean;
    readonly facePositionFactory: FaceTargetPositionFactory;
}