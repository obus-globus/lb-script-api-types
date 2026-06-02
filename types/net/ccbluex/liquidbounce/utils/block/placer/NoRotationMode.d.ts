import type { ModeValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { BlockPlacer } from '../../../../../../net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.d.ts'
import type { BlockPlacerRotationMode } from '../../../../../../net/ccbluex/liquidbounce/utils/block/placer/BlockPlacerRotationMode.d.ts'
import type { BlockPlacementTarget } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/BlockPlacementTarget.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
/**
 * No rotations, or just a packet containing the rotation target.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacerRotationModes.kt#L101 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacerRotationModes.kt:101}
 */
export class NoRotationMode extends BlockPlacerRotationMode {
    static Companion: Tagged$Companion;
    constructor(modeValueGroup: ModeValueGroup<BlockPlacerRotationMode>, placer: BlockPlacer)
    // private placements: number;
    // private /*not mapped: */ getPlacements(): number;
    // private placementsDone: number;
    readonly send: boolean;
    invoke(isSupport: boolean, pos: BlockPos, placementTarget: BlockPlacementTarget): boolean;
    onTickStart(): void;
}