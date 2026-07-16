import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPlacementTarget } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/BlockPlacementTarget.d.ts'
import type { BlockPlacementTargetFindingOptions } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/BlockPlacementTargetFindingOptions.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
export class TargetFindingKt extends Object {
    static findBestBlockPlacementTarget(pos: BlockPos, options: BlockPlacementTargetFindingOptions): BlockPlacementTarget | null;
}