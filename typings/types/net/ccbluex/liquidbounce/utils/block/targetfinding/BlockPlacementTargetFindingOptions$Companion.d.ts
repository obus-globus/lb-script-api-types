import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Line } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/Line.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class BlockPlacementTargetFindingOptions$Companion extends Object {
    leastBlockDistanceToLine(line: Line): (param0: Object) => boolean;
    leastBlockDistanceToPos(pos: Vec3): (param0: Object) => boolean;
}