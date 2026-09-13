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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/AlignedFace.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/AlignedFace.kt:37}
 */
export class AlignedFace extends Object {
    constructor(from: Vec3, to: Vec3)
    readonly area: number;
    readonly center: Vec3;
    readonly dimensions: Vec3;
    readonly from: Vec3;
    readonly to: Vec3;
    asBox(): AABB;
    clamp(box: AABB): AlignedFace;
    coerceInFace(line: LinearGeometry3): LineSegment | null;
    // private getDirectionVectors(): Pair<Vec3, Vec3>;
    // private getEdges(): LineSegment[];
    nearestPointTo(otherLine: LinearGeometry3): Vec3;
    offset(vec: Vec3i): AlignedFace;
    offset(vec: Vec3): AlignedFace;
    randomPointOnFace(): Vec3;
    requireNonEmpty(): AlignedFace | null;
    /**
     * Samples a point on the face by spreading {@link a} and {@link b} over its two variable axes.
     *
     * The first variable axis (in x, y, z order) is scaled by {@link a}, the second by {@link b}.
     * Constant (zero width) axes stay pinned to their `from` coordinate.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/AlignedFace.kt#L98 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/AlignedFace.kt:98}
     */
    samplePointOnFace(a: number, b: number): Vec3;
    toPlane(): NormalizedPlane;
    truncateY(minY: number): AlignedFace;
}