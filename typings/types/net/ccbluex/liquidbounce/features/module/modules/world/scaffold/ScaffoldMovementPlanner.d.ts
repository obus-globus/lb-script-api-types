import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ScaffoldMovementPlanner$SupportCandidate } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ScaffoldMovementPlanner$SupportCandidate.d.ts'
import type { ScaffoldMovementPlanner$SupportReference } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ScaffoldMovementPlanner$SupportReference.d.ts'
import type { Line } from '../../../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/Line.d.ts'
import type { DirectionalInput } from '../../../../../../../../net/ccbluex/liquidbounce/utils/movement/DirectionalInput.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ScaffoldMovementPlanner extends Object {
    static INSTANCE: ScaffoldMovementPlanner;
    // private DIRECTION_HYSTERESIS_DEGREES: number;
    // private MAX_LAST_PLACE_BLOCKS: number;
    // private SUPPORT_OVERLAP_HYSTERESIS: number;
    // private SUPPORT_SURFACE_EPSILON: number;
    // private lastDirectionAngle: number;
    // private lastPlacedBlocks: BlockPos[];
    // private lastPosition: BlockPos | null;
    // private lastSupportReference: ScaffoldMovementPlanner$SupportReference | null;
    // private offsetsToTry: number[];
    // private chooseDirection(currentAngle: number): Vec3;
    // private chooseStableSupportCandidate(candidates: Map<BlockPos, ScaffoldMovementPlanner$SupportCandidate>, bestCandidate: ScaffoldMovementPlanner$SupportCandidate): ScaffoldMovementPlanner$SupportCandidate;
    // private collectSupportCandidates(): Map<BlockPos, ScaffoldMovementPlanner$SupportCandidate>;
    // private createSupportCandidate(blockPos: BlockPos): ScaffoldMovementPlanner$SupportCandidate;
    // private debugLastPlacedBlocks(lastPlacedBlocksToConsider: BlockPos[]): void;
    // private divergesTooMuchFromDirection(lastBlocksLine: Line, direction: Vec3): boolean;
    // private findSupportReferenceUnderPlayer(): ScaffoldMovementPlanner$SupportReference | null;
    // private fitLinesThroughLastPlacedBlocks(): Line | null;
    getCurrentSupportReference(): ScaffoldMovementPlanner$SupportReference | null;
    /**
     * When using scaffold the player wants to follow the line and the scaffold should support them in doing so.
     * This function calculates this ideal line that the player should move on.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ScaffoldMovementPlanner.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ScaffoldMovementPlanner.kt:46}
     */
    getOptimalMovementLine(directionalInput: DirectionalInput): Line | null;
    reset(): void;
    /**
     * Remembers the last placed blocks and removes old ones.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ScaffoldMovementPlanner.kt#L173 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ScaffoldMovementPlanner.kt:173}
     */
    trackPlacedBlock(target: BlockPos): void;
}