import type { DoubleConsumer } from '../../../../../../java/util/function/DoubleConsumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../kotlin/Pair.d.ts'
import type { BoxIntersectionInterval } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/BoxIntersectionInterval.d.ts'
import type { NearestPointResult } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/NearestPointResult.d.ts'
import type { ParameterDomain } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/ParameterDomain.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
/**
 * Shared contract for one-dimensional linear geometry in 3D space.
 *
 * Implementations define their own valid parameter domain, while {@link anchor} and {@link direction}
 * always describe the shared supporting line equation `anchor + direction * t`.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt:49}
 */
export interface LinearGeometry3 extends Object {
    /**
     * Parameter-zero point of this geometry.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt:54}
     */
    readonly anchor: Vec3;
    /**
     * Direction vector of the supporting line.
     *
     * This vector is required to be non-zero and is not necessarily normalized.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt:61}
     */
    readonly direction: Vec3;
    // private boxIntersectionInterval(box: AABB): BoxIntersectionInterval | null;
    /**
     * Returns the squared distance from {@link point} to this geometry.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt#L87 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt:87}
     */
    distanceToSqr(point: Vec3): number;
    // private evaluateInterval(box: AABB, domain: ParameterDomain, start: number, end: number, position: Vec3, direction: Vec3, evaluate: (param0: number) => void): void;
    // private firstIntersectionParameter(interval: BoxIntersectionInterval): number;
    /**
     * Returns the first boundary intersection with {@link box} in parameter order.
     *
     * When the geometry starts inside the box, this returns the boundary point where it leaves the box.
     * If the geometry never reaches a box boundary inside its parameter domain, this returns `null`.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt#L208 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt:208}
     */
    firstIntersectionWith(box: AABB): Vec3 | null;
    /**
     * Returns the nearest point on this geometry to {@link point}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt#L76 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt:76}
     */
    getNearestPointTo(box: AABB): NearestPointResult;
    getNearestPointTo(point: Vec3): Vec3;
    getNearestPointTo(shape: VoxelShape): NearestPointResult | null;
    /**
     * Returns the nearest point pair between this geometry and {@link other}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt#L123 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt:123}
     */
    getNearestPointsTo(other: LinearGeometry3): Pair<Vec3, Vec3> | null;
    /**
     * Returns whether this geometry intersects {@link box} within its parameter domain.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt#L198 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt:198}
     */
    intersects(box: AABB): boolean;
    // private parameterDomain(): ParameterDomain;
    /**
     * Returns the unconstrained projection parameter of {@link point} on the supporting line.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt#L324 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt:324}
     */
    parameterFor(x: number, y: number, z: number): number;
    parameterFor(point: Vec3): number;
    /**
     * Returns the point on the supporting line at {@link parameter}.
     *
     * This method does not validate the parameter domain.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt#L317 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt:317}
     */
    pointAt(parameter: number): Vec3;
    /**
     * Returns the point at {@link parameter} if it belongs to this geometry's parameter domain.
     *
     * Returns `null` for out-of-domain or non-finite parameters.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt#L68 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt:68}
     */
    pointAtOrNull(parameter: number): Vec3 | null;
}