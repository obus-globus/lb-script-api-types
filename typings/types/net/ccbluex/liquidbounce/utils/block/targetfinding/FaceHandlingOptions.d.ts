import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FaceTargetPositionFactory } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/FaceTargetPositionFactory.d.ts'
/**
 * Decides how scaffold processes the faces of the considered target blocks.
 *
 * @param facePositionFactory given a face, it will yield a point on the face to target.
 * @param considerFacingAwayFaces decides whether scaffold will consider faces which point away from the player camera as possible targets, as it is mostly nonsensical. The expand-scaffold, for example, needs them to be considered to work.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt#L135 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt:135}
 */
export class FaceHandlingOptions extends Object {
    constructor(facePositionFactory: FaceTargetPositionFactory, considerFacingAwayFaces: boolean)
    readonly considerFacingAwayFaces: boolean;
    readonly facePositionFactory: FaceTargetPositionFactory;
    component1(): FaceTargetPositionFactory;
    component2(): boolean;
    copy(facePositionFactory: FaceTargetPositionFactory, considerFacingAwayFaces: boolean): FaceHandlingOptions;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}