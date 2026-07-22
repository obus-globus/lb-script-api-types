import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { WorldLocalBox } from '../../../../../net/ccbluex/liquidbounce/utils/math/WorldLocalBox.d.ts'
import type { AlignedFace } from '../../../../../net/ccbluex/liquidbounce/utils/math/geometry/AlignedFace.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { Position } from '../../../../../net/minecraft/core/Position.d.ts'
import type { Vec3i } from '../../../../../net/minecraft/core/Vec3i.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class BoxExtensionsKt extends Object {
    static centerOnSide(self: AABB, side: Direction): Vec3;
    /**
     * Squared distance from this box to a point without allocating a temporary {@link Vec3}.
     *
     * @see net.minecraft.world.phys.AABB.distanceToSqr
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/BoxExtensions.kt#L120 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/BoxExtensions.kt:120}
     */
    static distanceToSqr(self: AABB, x: number, y: number, z: number): number;
    /**
     * Ray–AABB first hit point (entry or exit).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/BoxExtensions.kt#L101 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/BoxExtensions.kt:101}
     */
    static firstHit(self: AABB, from: Vec3, to: Vec3): Vec3 | null;
    static getCoordinate(self: AABB, direction: Direction): number;
    static getFace(self: AABB, direction: Direction): AlignedFace;
    /**
     * Get the nearest point of a box. Very useful to calculate the distance of an enemy.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/BoxExtensions.kt#L107 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/BoxExtensions.kt:107}
     */
    static getNearestPoint(self: AABB, from: Position): Vec3;
    static getNearestPointOnSide(self: AABB, from: Vec3, side: Direction): Vec3;
    static getVertices(paramarg0: AABB): Vec3[];
    /**
     * Tests if the infinite line resulting from {@link start} and the point {@link p} will intersect this box.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/BoxExtensions.kt#L93 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/BoxExtensions.kt:93}
     */
    static isHitByLine(self: AABB, start: Vec3, p: Vec3): boolean;
    static iterateBlockPos(self: AABB, minYInclusive: number, maxYInclusive: number): BlockPos[];
    static iterateBottomLayerBlockPos(self: AABB): BlockPos[];
    static minus(self: AABB, offset: Position): AABB;
    static minus(self: AABB, offset: Vec3i): AABB;
    static plus(self: AABB, offset: Position): AABB;
    static plus(self: AABB, offset: Vec3i): AABB;
    static pointAtProportion(self: AABB, p: number): Vec3;
    static pointAtProportion(self: AABB, pX: number, pY: number, pZ: number): Vec3;
    static samplePointOnSide(self: AABB, side: Direction, a: number, b: number): Vec3;
    static worldToLocal(self: AABB): WorldLocalBox;
}