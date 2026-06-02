import type { DoubleConsumer } from '../../../../../../java/util/function/DoubleConsumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../kotlin/Pair.d.ts'
import type { BoxIntersectionInterval } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/BoxIntersectionInterval.d.ts'
import type { LinearGeometry3 } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.d.ts'
import type { NearestPointResult } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/NearestPointResult.d.ts'
import type { ParameterDomain } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/ParameterDomain.d.ts'
import type { Ray$Companion } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/Ray$Companion.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class Ray extends Object implements LinearGeometry3 {
    static Companion: Ray$Companion;
    static fromPoints(paramarg0: Vec3, paramarg1: Vec3): Ray;
    constructor(origin: Vec3, direction: Vec3)
    readonly anchor: Vec3;
    readonly direction: Vec3;
    readonly origin: Vec3;
    // private boxIntersectionInterval(box: AABB): BoxIntersectionInterval | null;
    component1(): Vec3;
    component2(): Vec3;
    copy(origin: Vec3, direction: Vec3): Ray;
    distanceToSqr(point: Vec3): number;
    equals(other: Object | null): boolean;
    // private evaluateInterval(box: AABB, domain: ParameterDomain, start: number, end: number, position: Vec3, direction: Vec3, evaluate: (param0: number) => void): void;
    // private firstIntersectionParameter(interval: BoxIntersectionInterval): number;
    firstIntersectionWith(box: AABB): Vec3 | null;
    getNearestPointTo(box: AABB): NearestPointResult;
    getNearestPointTo(point: Vec3): Vec3;
    getNearestPointTo(shape: VoxelShape): NearestPointResult | null;
    getNearestPointsTo(other: LinearGeometry3): Pair<Vec3, Vec3> | null;
    hashCode(): number;
    intersects(box: AABB): boolean;
    // private parameterDomain(): ParameterDomain;
    parameterFor(x: number, y: number, z: number): number;
    parameterFor(point: Vec3): number;
    pointAt(parameter: number): Vec3;
    pointAtOrNull(parameter: number): Vec3 | null;
    toString(): string;
}