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
    static add(vector3f: Vector3f, vec3d: Vec3): Vector3f;
    static average(iterable: Vec3[]): Vec3;
    static bottomCenter(vec3i: Vec3i, yOffset: number): Vec3;
    static component1(paramarg0: Vec3): number;
    static component1(paramarg0: Vec2): number;
    static component1(paramarg0: Vec3i): number;
    static component2(paramarg0: Vec3): number;
    static component2(paramarg0: Vec2): number;
    static component2(paramarg0: Vec3i): number;
    static component3(paramarg0: Vec3): number;
    static component3(paramarg0: Vec3i): number;
    static contains(chunkPos: ChunkPos, blockPos: number): boolean;
    static copy(paramarg0: BlockPos, paramarg1: number, paramarg2: number, paramarg3: number): BlockPos;
    static copy(vec2: Vec2, x: number, y: number): Vec2;
    static copy(paramarg0: Vec3, paramarg1: number, paramarg2: number, paramarg3: number): Vec3;
    static distanceToCenterSqr(position: Position, blockPos: number): number;
    static dot(vec3: Vec3, x: number, y: number, z: number): number;
    static dot(vec3: Vec3, v: Vector3fc): number;
    static equals(vec3: Vec3, other: Vec3, tolerance: number): boolean;
    static expandToCube(vec3: Vec3, halfExtents: number): AABB;
    /**
     * @returns {@link this} + {@link scale} * {@link other}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/9e7b00e677594d328d20ab213c6936c4d553b720/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/MinecraftVectorExtensions.kt#L113 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/MinecraftVectorExtensions.kt:113}
     */
    static fma(vec3: Vec3, scale: number, other: Vec3): Vec3;
    static getBottomCenter(paramarg0: Vec3i): Vec3;
    static getCenter(paramarg0: Vec3i): Vec3;
    static getTopCenter(paramarg0: Vec3i): Vec3;
    /**
     * @see Vec3.rotation
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/9e7b00e677594d328d20ab213c6936c4d553b720/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/MinecraftVectorExtensions.kt#L164 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/MinecraftVectorExtensions.kt:164}
     */
    static getYaw(paramarg0: Vec3): number;
    static horizontalDistanceTo(vec3: Vec3, x: number, z: number): number;
    static horizontalDistanceTo(paramarg0: Vec3, paramarg1: Vec3i): number;
    static horizontalDistanceTo(paramarg0: Vec3, paramarg1: Vec3): number;
    static horizontalDistanceToSqr(vec3: Vec3, x: number, z: number): number;
    static horizontalDistanceToSqr(paramarg0: Vec3, paramarg1: Vec3i): number;
    static horizontalDistanceToSqr(paramarg0: Vec3, paramarg1: Vec3): number;
    static isLikelyZero(paramarg0: Vec2): boolean;
    static isLikelyZero(paramarg0: Vec3): boolean;
    static isNormalized(paramarg0: Vec3): boolean;
    static isNormalized(vec3: Vec3, tolerance: number): boolean;
    static lengthSqr(vec3i: Vec3i): number;
    static minus(paramarg0: Vec3i, paramarg1: Vec3i): Vec3i;
    static minus(paramarg0: Vec3, paramarg1: Position): Vec3;
    static minus(paramarg0: Vec3, paramarg1: Vec3i): Vec3;
    static move(vec3: Vec3, x: number, y: number, z: number): Vec3;
    static move(vec3: Vec3, other: Vec3): Vec3;
    static multiply(paramarg0: Vec3, paramarg1: number, paramarg2: number, paramarg3: number): Vec3;
    static multiply(paramarg0: Vec3, paramarg1: number, paramarg2: number, paramarg3: number): Vec3;
    static normalizeIfNeeded(paramarg0: Vec3): Vec3;
    static normalizeIfNeeded(vec3: Vec3, tolerance: number): Vec3;
    static plus(paramarg0: BlockPos, paramarg1: Vec3i): BlockPos;
    static plus(paramarg0: Vec3i, paramarg1: Vec3i): Vec3i;
    static plus(paramarg0: Vec3, paramarg1: Position): Vec3;
    static plus(paramarg0: Vec3, paramarg1: Vec3i): Vec3;
    static preferOver(vec3: Vec3, other: Vec3): Vec3;
    static rangeTo(blockPos: BlockPos, other: BlockPos): BoundingBox;
    static scaleMut(vec3: Vec3, scale: number): Vec3;
    static scaleMut(vec3: Vec3, x: number, y: number, z: number): Vec3;
    static set(paramarg0: BlockPos$MutableBlockPos, paramarg1: Position): BlockPos$MutableBlockPos;
    static set(vec3: Vec3, x: number, y: number, z: number): Vec3;
    static set(paramarg0: Vec3, paramarg1: Vec3): Vec3;
    static set(paramarg0: Vector3f, paramarg1: Vec3): Vector3f;
    static sub(vector3f: Vector3f, vec3d: Vec3): Vector3f;
    static times(paramarg0: Vec3i, paramarg1: number): Vec3i;
    static times(paramarg0: Vec3, paramarg1: number): Vec3;
    static toBlockPos(vec3: Vec3, xOffset: number, yOffset: number, zOffset: number): BlockPos;
    static toVec3d(vec3i: Vec3i, xOffset: number, yOffset: number, zOffset: number): Vec3;
    static toVec3d(vector3fc: Vector3fc): Vec3;
    static toVec3f(vec3: Vec3): Vec3f;
    /**
     * @deprecated use this.toBlockPos instead Use `this.toBlockPos`.
     */
    static toVec3i(vec3: Vec3): Vec3i;
    static unaryMinus(paramarg0: BlockPos): BlockPos;
    static unaryMinus(paramarg0: Vec3i): Vec3i;
    static unaryMinus(paramarg0: Vec3): Vec3;
    /**
     * `this.normalize().scale(newLength)`
     *
     * @returns a {@link Vec3} with same direction as the receiver and length of {@link newLength}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/9e7b00e677594d328d20ab213c6936c4d553b720/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/MinecraftVectorExtensions.kt#L137 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/MinecraftVectorExtensions.kt:137}
     */
    static withLength(vec3: Vec3, newLength: number): Vec3;
}