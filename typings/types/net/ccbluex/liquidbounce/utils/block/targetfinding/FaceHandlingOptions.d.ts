import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FaceTargetPositionFactory } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/FaceTargetPositionFactory.d.ts'
/**
 * Decides how scaffold processes the faces of the considered target blocks.
 *
 * @param facePositionFactory given a face, it will yield a point on the face to target.
 * @param considerFacingAwayFaces decides whether scaffold will consider faces which point away from the player camera as possible targets, as it is mostly nonsensical. The expand-scaffold, for example, needs them to be considered to work.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f0d427e933b0c39374cea4bd371582db202074f3/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt#L135 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt:135}
 */
export class FaceHandlingOptions extends Object {
    constructor(facePositionFactory: FaceTargetPositionFactory, considerFacingAwayFaces: boolean)
    readonly considerFacingAwayFaces: boolean;
    readonly facePositionFactory: FaceTargetPositionFactory;
}