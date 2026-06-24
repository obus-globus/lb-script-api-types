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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt#L156 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt:156}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt#L168 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt:168}
     */
    readonly targetPositionOnBlock: Vec3;
    /**
     * cosine of the angle between the expected player's eye position and the normal of the targeted face.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt#L176 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt:176}
     */
    calculateAngleToPlayerEyeCosine(eyePos: Vec3): number;
    component1(): BlockPos;
    component2(): Direction;
    copy(blockPosToInteractWith: BlockPos, interactionDirection: Direction): BlockTargetPlan;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}