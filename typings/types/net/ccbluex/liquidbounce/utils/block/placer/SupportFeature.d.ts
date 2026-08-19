import type { ToggleableValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { BlockPlacer } from '../../../../../../net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.d.ts'
import type { Chronometer } from '../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
import type { Filter } from '../../../../../../net/ccbluex/liquidbounce/utils/collection/Filter.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
/**
 * Places blocks to support placements.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/SupportFeature.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/SupportFeature.kt:42}
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
    // private canPlace(pos: BlockPos): boolean;
    /**
     * Finds the shortest support path to make {@link targetPos} placeable via Dijkstra search.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/SupportFeature.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/SupportFeature.kt:60}
     */
    findSupport(targetPos: BlockPos): BlockPos[] | null;
}