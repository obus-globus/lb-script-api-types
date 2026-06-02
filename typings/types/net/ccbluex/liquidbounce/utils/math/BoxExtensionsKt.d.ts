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
    static centerOnSide(paramarg0: AABB, paramarg1: Direction): Vec3;
    /**
     * Squared distance from this box to a point without allocating a temporary {@link Vec3}.
     *
     * @see net.minecraft.world.phys.AABB.distanceToSqr
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/BoxExtensions.kt#L113 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/BoxExtensions.kt:113}
     */
    static distanceToSqr(paramarg0: AABB, paramarg1: number, paramarg2: number, paramarg3: number): number;
    /**
     * Ray–AABB first hit point (entry or exit).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/BoxExtensions.kt#L98 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/BoxExtensions.kt:98}
     */
    static firstHit(paramarg0: AABB, paramarg1: Vec3, paramarg2: Vec3): Vec3;
    static getCoordinate(paramarg0: AABB, paramarg1: Direction): number;
    static getFace(paramarg0: AABB, paramarg1: Direction): AlignedFace;
    /**
     * Get the nearest point of a box. Very useful to calculate the distance of an enemy.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/BoxExtensions.kt#L102 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/BoxExtensions.kt:102}
     */
    static getNearestPoint(paramarg0: AABB, paramarg1: Position): Vec3;
    static getNearestPointOnSide(paramarg0: AABB, paramarg1: Vec3, paramarg2: Direction): Vec3;
    static getVertices(paramarg0: AABB): (Object | null)[];
    /**
     * Tests if the infinite line resulting from {@link start} and the point {@link p} will intersect this box.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/BoxExtensions.kt#L88 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/BoxExtensions.kt:88}
     */
    static isHitByLine(paramarg0: AABB, paramarg1: Vec3, paramarg2: Vec3): boolean;
    static iterateBlockPos(paramarg0: AABB, paramarg1: number, paramarg2: number): BlockPos[];
    static iterateBottomLayerBlockPos(paramarg0: AABB): BlockPos[];
    static minus(paramarg0: AABB, paramarg1: Position): AABB;
    static minus(paramarg0: AABB, paramarg1: Vec3i): AABB;
    static plus(paramarg0: AABB, paramarg1: Position): AABB;
    static plus(paramarg0: AABB, paramarg1: Vec3i): AABB;
    static pointAtProportion(paramarg0: AABB, paramarg1: number): Vec3;
    static pointAtProportion(paramarg0: AABB, paramarg1: number, paramarg2: number, paramarg3: number): Vec3;
    static samplePointOnSide(paramarg0: AABB, paramarg1: Direction, paramarg2: number, paramarg3: number): Vec3;
    static worldToLocal(paramarg0: AABB): Pair<Vec3, AABB>;
}