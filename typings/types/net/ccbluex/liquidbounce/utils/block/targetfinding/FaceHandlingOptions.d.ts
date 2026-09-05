import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FaceTargetPositionFactory } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/FaceTargetPositionFactory.d.ts'
/**
 * Decides how scaffold processes the faces of the considered target blocks.
 *
 * @param facePositionFactory given a face, it will yield a point on the face to target.
 * @param considerFacingAwayFaces decides whether scaffold will consider faces which point away from the player camera as possible targets, as it is mostly nonsensical. The expand-scaffold, for example, needs them to be considered to work.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt#L138 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt:138}
 */
export class FaceHandlingOptions extends Object {
    constructor(facePositionFactory: FaceTargetPositionFactory, considerFacingAwayFaces: boolean)
    readonly considerFacingAwayFaces: boolean;
    readonly facePositionFactory: FaceTargetPositionFactory;
}