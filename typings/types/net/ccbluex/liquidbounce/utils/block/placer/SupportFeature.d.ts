import type { ToggleableValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { BlockPlacer } from '../../../../../../net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.d.ts'
import type { Chronometer } from '../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
import type { Filter } from '../../../../../../net/ccbluex/liquidbounce/utils/collection/Filter.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
/**
 * Places blocks to support placements.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/SupportFeature.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/SupportFeature.kt:43}
 */
export class SupportFeature extends ToggleableValueGroup {
    constructor(placer: BlockPlacer)
    readonly blockedPositions: BlockPos[];
    readonly blocks: Block[];
    getBlocks(): Block[];
    readonly chronometer: Chronometer;
    readonly delay: number;
    // private depth: number;
    // private /*not mapped: */ getDepth(): number;
    readonly filter: Filter;
    readonly placer: BlockPlacer;
    /**
     * Finds the shortest support path to make {@link targetPos} placeable via Dijkstra search.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/SupportFeature.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/SupportFeature.kt:61}
     */
    findSupport(targetPos: BlockPos): BlockPos[] | null;
}