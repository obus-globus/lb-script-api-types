import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockHitResult } from '../../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class BlockPlacementTarget extends Object {
    constructor(interactedBlockPos: BlockPos, placedBlock: BlockPos, direction: Direction, interactionPoint: Vec3, minPlacementY: number, rotation: Rotation)
    readonly blockHitResult: BlockHitResult;
    readonly direction: Direction;
    /**
     * BlockPos which is right-clicked
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt#L363 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt:363}
     */
    readonly interactedBlockPos: BlockPos;
    /**
     * Exact point on {@link interactedBlockPos} selected by target finding.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt#L372 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt:372}
     */
    readonly interactionPoint: Vec3;
    /**
     * Some blocks must be placed above a certain height of the block. For example stairs and slabs must be placed
     * at the upper half (=> minY = 0.5) in order to be placed correctly
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt#L377 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt:377}
     */
    readonly minPlacementY: number;
    /**
     * Block pos at which a new block is placed
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt#L367 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt:367}
     */
    readonly placedBlock: BlockPos;
    readonly rotation: Rotation;
    component1(): BlockPos;
    component2(): BlockPos;
    component3(): Direction;
    component4(): Vec3;
    component5(): number;
    component6(): Rotation;
    copy(interactedBlockPos: BlockPos, placedBlock: BlockPos, direction: Direction, interactionPoint: Vec3, minPlacementY: number, rotation: Rotation): BlockPlacementTarget;
    doesCrosshairTargetMatchRequirements(crosshairTarget: BlockHitResult): boolean;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}