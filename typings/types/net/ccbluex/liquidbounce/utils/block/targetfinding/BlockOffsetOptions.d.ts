import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockOffsetOptions$Companion } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/BlockOffsetOptions$Companion.d.ts'
import type { Vec3i } from '../../../../../../net/minecraft/core/Vec3i.d.ts'
/**
 * Contains information about offsets (to the target pos) which should be investigated.
 *
 * @param offsetsToInvestigate the offsets (to the position) which the targeting algorithm will consider to place. Prioritized with {@link priorityComparator}
 * @param priorityComparator compares two offsets by their priority. An offset which ranks higher is prioritized.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt#L108 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt:108}
 */
export class BlockOffsetOptions extends Object {
    static Companion: BlockOffsetOptions$Companion;
    static Default: BlockOffsetOptions;
    constructor(offsetsToInvestigate: Vec3i[], priorityComparator: (param0: Object) => boolean)
    readonly offsetsToInvestigate: Vec3i[];
    readonly priorityComparator: (param0: Object) => boolean;
}