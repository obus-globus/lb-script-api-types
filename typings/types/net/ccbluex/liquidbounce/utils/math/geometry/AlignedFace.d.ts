import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../kotlin/Pair.d.ts'
import type { LineSegment } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/LineSegment.d.ts'
import type { LinearGeometry3 } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.d.ts'
import type { NormalizedPlane } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/NormalizedPlane.d.ts'
import type { Vec3i } from '../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * A face. Axis aligned
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/AlignedFace.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/AlignedFace.kt:36}
 */
export class AlignedFace extends Object {
    constructor(from: Vec3, to: Vec3)
    readonly area: number;
    readonly center: Vec3;
    readonly dimensions: Vec3;
    readonly from: Vec3;
    readonly to: Vec3;
    clamp(box: AABB): AlignedFace;
    coerceInFace(line: LinearGeometry3): LineSegment | null;
    // private getDirectionVectors(): Pair<Vec3, Vec3>;
    // private getEdges(): LineSegment[];
    nearestPointTo(otherLine: LinearGeometry3): Vec3;
    offset(vec: Vec3i): AlignedFace;
    offset(vec: Vec3): AlignedFace;
    randomPointOnFace(): Vec3;
    requireNonEmpty(): AlignedFace | null;
    toPlane(): NormalizedPlane;
    truncateY(minY: number): AlignedFace;
}