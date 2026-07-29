import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Vec3f } from '../../../../../net/ccbluex/liquidbounce/render/engine/type/Vec3f.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Position } from '../../../../../net/minecraft/core/Position.d.ts'
import type { Vec3i } from '../../../../../net/minecraft/core/Vec3i.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { BoundingBox } from '../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec2 } from '../../../../../net/minecraft/world/phys/Vec2.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Vector3f } from '../../../../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../../../../org/joml/Vector3fc.d.ts'
export class MinecraftVectorExtensionsKt extends Object {
    static add(self: Vector3f, vec3d: Vec3): Vector3f;
    static average(self: Vec3[]): Vec3;
    static bottomCenter(self: Vec3i, yOffset: number): Vec3;
    static component1(self: Vec3): number;
    static component1(self: Vec2): number;
    static component1(self: Vec3i): number;
    static component2(self: Vec3): number;
    static component2(self: Vec2): number;
    static component2(self: Vec3i): number;
    static component3(self: Vec3): number;
    static component3(self: Vec3i): number;
    static contains(self: ChunkPos, blockPos: number): boolean;
    static copy(self: BlockPos, x: number, y: number, z: number): BlockPos;
    static copy(self: Vec2, x: number, y: number): Vec2;
    static copy(self: Vec3, x: number, y: number, z: number): Vec3;
    static distanceToCenterSqr(self: Position, blockPos: number): number;
    static dot(self: Vec3, x: number, y: number, z: number): number;
    static dot(self: Vec3, v: Vector3fc): number;
    static equals(self: Vec3, other: Vec3, tolerance: number): boolean;
    static expandToCube(self: Vec3, halfExtents: number): AABB;
    /**
     * @returns {@link this} + {@link scale} * {@link other}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/MinecraftVectorExtensions.kt#L113 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/MinecraftVectorExtensions.kt:113}
     */
    static fma(self: Vec3, scale: number, other: Vec3): Vec3;
    static getBottomCenter(paramarg0: Vec3i): Vec3;
    static getCenter(paramarg0: Vec3i): Vec3;
    static getTopCenter(paramarg0: Vec3i): Vec3;
    /**
     * @see Vec3.rotation
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/MinecraftVectorExtensions.kt#L164 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/MinecraftVectorExtensions.kt:164}
     */
    static getYaw(paramarg0: Vec3): number;
    static horizontalDistanceTo(self: Vec3, x: number, z: number): number;
    static horizontalDistanceTo(self: Vec3, other: Vec3i): number;
    static horizontalDistanceTo(self: Vec3, other: Vec3): number;
    static horizontalDistanceToSqr(self: Vec3, x: number, z: number): number;
    static horizontalDistanceToSqr(self: Vec3, other: Vec3i): number;
    static horizontalDistanceToSqr(self: Vec3, other: Vec3): number;
    static isLikelyZero(paramarg0: Vec2): boolean;
    static isLikelyZero(paramarg0: Vec3): boolean;
    static isNormalized(paramarg0: Vec3): boolean;
    static isNormalized(self: Vec3, tolerance: number): boolean;
    static lengthSqr(self: Vec3i): number;
    static minus(self: Vec3i, other: Vec3i): Vec3i;
    static minus(self: Vec3, other: Position): Vec3;
    static minus(self: Vec3, other: Vec3i): Vec3;
    static move(self: Vec3, x: number, y: number, z: number): Vec3;
    static move(self: Vec3, other: Vec3): Vec3;
    static multiply(self: Vec3, factorX: number, factorY: number, factorZ: number): Vec3;
    static normalizeIfNeeded(paramarg0: Vec3): Vec3;
    static normalizeIfNeeded(self: Vec3, tolerance: number): Vec3;
    static plus(self: BlockPos, other: Vec3i): BlockPos;
    static plus(self: Vec3i, other: Vec3i): Vec3i;
    static plus(self: Vec3, other: Position): Vec3;
    static plus(self: Vec3, other: Vec3i): Vec3;
    static preferOver(self: Vec3, other: Vec3): Vec3;
    static rangeTo(self: BlockPos, other: BlockPos): BoundingBox;
    static scaleMut(self: Vec3, scale: number): Vec3;
    static scaleMut(self: Vec3, x: number, y: number, z: number): Vec3;
    static set(self: BlockPos$MutableBlockPos, pos: Position): BlockPos$MutableBlockPos;
    static set(self: Vec3, x: number, y: number, z: number): Vec3;
    static set(self: Vec3, other: Vec3): Vec3;
    static set(self: Vector3f, vec3d: Vec3): Vector3f;
    static sub(self: Vector3f, vec3d: Vec3): Vector3f;
    static times(self: Vec3i, scalar: number): Vec3i;
    static times(self: Vec3, scalar: number): Vec3;
    static toBlockPos(self: Vec3, xOffset: number, yOffset: number, zOffset: number): BlockPos;
    static toVec3d(self: Vec3i, xOffset: number, yOffset: number, zOffset: number): Vec3;
    static toVec3d(self: Vector3fc): Vec3;
    static toVec3f(self: Vec3): Vec3f;
    /**
     * @deprecated use this.toBlockPos instead Use `this.toBlockPos`.
     */
    static toVec3i(self: Vec3): Vec3i;
    static unaryMinus(self: BlockPos): BlockPos;
    static unaryMinus(self: Vec3i): Vec3i;
    static unaryMinus(self: Vec3): Vec3;
    /**
     * `this.normalize().scale(newLength)`
     *
     * @returns a {@link Vec3} with same direction as the receiver and length of {@link newLength}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/MinecraftVectorExtensions.kt#L137 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/MinecraftVectorExtensions.kt:137}
     */
    static withLength(self: Vec3, newLength: number): Vec3;
}