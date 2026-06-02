import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Line } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/Line.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class BlockPlacementTargetFindingOptions$Companion extends Object {
    leastBlockDistanceToLine(line: Line): (param0: BlockPos) => kotlin.Boolean;
    leastBlockDistanceToPos(pos: Vec3): (param0: BlockPos) => kotlin.Boolean;
}