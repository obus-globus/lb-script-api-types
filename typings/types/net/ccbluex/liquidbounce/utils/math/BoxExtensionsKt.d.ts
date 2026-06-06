import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../kotlin/Pair.d.ts'
import type { AlignedFace } from '../../../../../net/ccbluex/liquidbounce/utils/math/geometry/AlignedFace.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { Position } from '../../../../../net/minecraft/core/Position.d.ts'
import type { Vec3i } from '../../../../../net/minecraft/core/Vec3i.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class BoxExtensionsKt extends Object {
    static centerOnSide(aABB: AABB, side: Direction): Vec3;
    /**
     * Squared distance from this box to a point without allocating a temporary {@link Vec3}.
     *
     * @see net.minecraft.world.phys.AABB.distanceToSqr
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/BoxExtensions.kt#L113 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/BoxExtensions.kt:113}
     */
    static distanceToSqr(aABB: AABB, x: number, y: number, z: number): number;
    /**
     * Ray–AABB first hit point (entry or exit).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/BoxExtensions.kt#L98 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/BoxExtensions.kt:98}
     */
    static firstHit(aABB: AABB, from: Vec3, to: Vec3): Vec3;
    static getCoordinate(aABB: AABB, direction: Direction): number;
    static getFace(aABB: AABB, direction: Direction): AlignedFace;
    /**
     * Get the nearest point of a box. Very useful to calculate the distance of an enemy.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/BoxExtensions.kt#L102 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/BoxExtensions.kt:102}
     */
    static getNearestPoint(aABB: AABB, from: Position): Vec3;
    static getNearestPointOnSide(aABB: AABB, from: Vec3, side: Direction): Vec3;
    static getVertices(paramarg0: AABB): (Object | null)[];
    /**
     * Tests if the infinite line resulting from {@link start} and the point {@link p} will intersect this box.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/BoxExtensions.kt#L88 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/BoxExtensions.kt:88}
     */
    static isHitByLine(aABB: AABB, start: Vec3, p: Vec3): boolean;
    static iterateBlockPos(aABB: AABB, minYInclusive: number, maxYInclusive: number): BlockPos[];
    static iterateBottomLayerBlockPos(aABB: AABB): BlockPos[];
    static minus(paramarg0: AABB, paramarg1: Position): AABB;
    static minus(paramarg0: AABB, paramarg1: Vec3i): AABB;
    static plus(paramarg0: AABB, paramarg1: Position): AABB;
    static plus(paramarg0: AABB, paramarg1: Vec3i): AABB;
    static pointAtProportion(aABB: AABB, p: number): Vec3;
    static pointAtProportion(aABB: AABB, pX: number, pY: number, pZ: number): Vec3;
    static samplePointOnSide(aABB: AABB, side: Direction, a: number, b: number): Vec3;
    static worldToLocal(aABB: AABB): Pair<Vec3, AABB>;
}