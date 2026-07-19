import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockHitResult } from '../../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
export class BlockPlacementTarget extends Object {
    constructor(interactedBlockPos: BlockPos, placedBlock: BlockPos, direction: Direction, minPlacementY: number, rotation: Rotation)
    readonly blockHitResult: BlockHitResult;
    readonly direction: Direction;
    /**
     * BlockPos which is right-clicked
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt#L361 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt:361}
     */
    readonly interactedBlockPos: BlockPos;
    /**
     * Some blocks must be placed above a certain height of the block. For example stairs and slabs must be placed
     * at the upper half (=> minY = 0.5) in order to be placed correctly
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt#L371 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt:371}
     */
    readonly minPlacementY: number;
    /**
     * Block pos at which a new block is placed
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt#L365 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt:365}
     */
    readonly placedBlock: BlockPos;
    readonly rotation: Rotation;
    component1(): BlockPos;
    component2(): BlockPos;
    component3(): Direction;
    component4(): number;
    component5(): Rotation;
    copy(interactedBlockPos: BlockPos, placedBlock: BlockPos, direction: Direction, minPlacementY: number, rotation: Rotation): BlockPlacementTarget;
    doesCrosshairTargetMatchRequirements(crosshairTarget: BlockHitResult): boolean;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}