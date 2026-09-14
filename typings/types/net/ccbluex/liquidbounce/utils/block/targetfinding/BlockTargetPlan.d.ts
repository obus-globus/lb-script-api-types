import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * A draft of a block placement
 *
 * @param blockPosToInteractWith the blockPos the player is eventually clicking on. Might not be the target pos, because you need to interact with a neighboring block in order to place a block at a position
 * @param interactionDirection the direction the interaction should take place in. If the {@link blockPosToInteractWith} is not the target pos, this will always point to it
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt#L162 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt:162}
 */
export class BlockTargetPlan extends Object {
    constructor(blockPosToInteractWith: BlockPos, interactionDirection: Direction)
    readonly blockPosToInteractWith: BlockPos;
    readonly interactionDirection: Direction;
    /**
     * The center on the target block face
     *
     * Note: no check for raycast!
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt#L171 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt:171}
     */
    readonly targetPositionOnBlock: Vec3;
    /**
     * cosine of the angle between the expected player's eye position and the normal of the targeted face.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt#L177 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt:177}
     */
    calculateAngleToPlayerEyeCosine(eyePos: Vec3): number;
    component1(): BlockPos;
    component2(): Direction;
    copy(blockPosToInteractWith: BlockPos, interactionDirection: Direction): BlockTargetPlan;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}