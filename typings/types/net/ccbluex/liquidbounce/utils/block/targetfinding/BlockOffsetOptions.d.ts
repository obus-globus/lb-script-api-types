import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockOffsetOptions$Companion } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/BlockOffsetOptions$Companion.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3i } from '../../../../../../net/minecraft/core/Vec3i.d.ts'
/**
 * Contains information about offsets (to the target pos) which should be investigated.
 *
 * @param offsetsToInvestigate the offsets (to the position) which the targeting algorithm will consider to place. Prioritized with {@link priorityComparator}
 * @param priorityComparator compares two offsets by their priority. An offset which ranks higher is prioritized.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt#L100 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt:100}
 */
export class BlockOffsetOptions extends Object {
    static Companion: BlockOffsetOptions$Companion;
    static Default: BlockOffsetOptions;
    constructor(offsetsToInvestigate: Vec3i[], priorityComparator: (param0: BlockPos) => kotlin.Boolean)
    readonly offsetsToInvestigate: Vec3i[];
    readonly priorityComparator: (param0: BlockPos) => kotlin.Boolean;
}