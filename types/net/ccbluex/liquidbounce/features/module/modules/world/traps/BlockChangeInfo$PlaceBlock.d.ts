import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BlockChangeInfo } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/traps/BlockChangeInfo.d.ts'
import type { BlockPlacementTarget } from '../../../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/BlockPlacementTarget.d.ts'
export class BlockChangeInfo$PlaceBlock extends Object implements BlockChangeInfo {
    constructor(blockPlacementTarget: BlockPlacementTarget)
    readonly blockPlacementTarget: BlockPlacementTarget;
}