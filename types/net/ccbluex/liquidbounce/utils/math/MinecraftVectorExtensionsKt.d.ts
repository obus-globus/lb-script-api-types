import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Vec3f } from '../../../../../net/ccbluex/liquidbounce/render/engine/type/Vec3f.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Position } from '../../../../../net/minecraft/core/Position.d.ts'
import type { Vec3i } from '../../../../../net/minecraft/core/Vec3i.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { BoundingBox } from '../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { Vec2 } from '../../../../../net/minecraft/world/phys/Vec2.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Vector3f } from '../../../../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../../../../org/joml/Vector3fc.d.ts'
export class MinecraftVectorExtensionsKt extends Object {
    static add(paramarg0: Vector3f, paramarg1: Vec3): Vector3f;
    static average(paramarg0: (Object | null)[]): Vec3;
    static component1(paramarg0: Vec3): number;
    static component1(paramarg0: Vec2): number;
    static component1(paramarg0: Vec3i): number;
    static component2(paramarg0: Vec3): number;
    static component2(paramarg0: Vec2): number;
    static component2(paramarg0: Vec3i): number;
    static component3(paramarg0: Vec3): number;
    static component3(paramarg0: Vec3i): number;
    static contains(paramarg0: ChunkPos, paramarg1: number): boolean;
    static copy(paramarg0: BlockPos, paramarg1: number, paramarg2: number, paramarg3: number): BlockPos;
    static copy(paramarg0: Vec2, paramarg1: number, paramarg2: number): Vec2;
    static copy(paramarg0: Vec3, paramarg1: number, paramarg2: number, paramarg3: number): Vec3;
    static dot(paramarg0: Vec3, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static equals(paramarg0: Vec3, paramarg1: Vec3, paramarg2: number): boolean;
    /**
     * @returns {@link this} + {@link scale} * {@link other}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/MinecraftVectorExtensions.kt#L100 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/MinecraftVectorExtensions.kt:100}
     */
    static fma(paramarg0: Vec3, paramarg1: number, paramarg2: Vec3): Vec3;
    static getAbsoluteValue(paramarg0: Vec3): Vec3;
    static horizontalDistanceTo(paramarg0: Vec3, paramarg1: Vec3): number;
    static isLikelyZero(paramarg0: Vec2): boolean;
    static isLikelyZero(paramarg0: Vec3): boolean;
    static isNormalized(paramarg0: Vec3): boolean;
    static isNormalized(paramarg0: Vec3, paramarg1: number): boolean;
    static lengthSqr(paramarg0: Vec3i): number;
    static minus(paramarg0: Vec3i, paramarg1: Vec3i): Vec3i;
    static minus(paramarg0: Vec3, paramarg1: Position): Vec3;
    static minus(paramarg0: Vec3, paramarg1: Vec3i): Vec3;
    static move(paramarg0: Vec3, paramarg1: number, paramarg2: number, paramarg3: number): Vec3;
    static move(paramarg0: Vec3, paramarg1: Vec3): Vec3;
    static multiply(paramarg0: Vec3, paramarg1: number, paramarg2: number, paramarg3: number): Vec3;
    static multiply(paramarg0: Vec3, paramarg1: number, paramarg2: number, paramarg3: number): Vec3;
    static normalizeIfNeeded(paramarg0: Vec3): Vec3;
    static normalizeIfNeeded(paramarg0: Vec3, paramarg1: number): Vec3;
    static plus(paramarg0: BlockPos, paramarg1: Vec3i): BlockPos;
    static plus(paramarg0: Vec3i, paramarg1: Vec3i): Vec3i;
    static plus(paramarg0: Vec3, paramarg1: Position): Vec3;
    static plus(paramarg0: Vec3, paramarg1: Vec3i): Vec3;
    static preferOver(paramarg0: Vec3, paramarg1: Vec3): Vec3;
    static rangeTo(paramarg0: BlockPos, paramarg1: BlockPos): BoundingBox;
    static scaleMut(paramarg0: Vec3, paramarg1: number): Vec3;
    static scaleMut(paramarg0: Vec3, paramarg1: number, paramarg2: number, paramarg3: number): Vec3;
    static set(paramarg0: BlockPos$MutableBlockPos, paramarg1: Position): BlockPos$MutableBlockPos;
    static set(paramarg0: Vec3, paramarg1: number, paramarg2: number, paramarg3: number): Vec3;
    static set(paramarg0: Vec3, paramarg1: Vec3): Vec3;
    static set(paramarg0: Vector3f, paramarg1: Vec3): Vector3f;
    static sub(paramarg0: Vector3f, paramarg1: Vec3): Vector3f;
    static times(paramarg0: Vec3i, paramarg1: number): Vec3i;
    static times(paramarg0: Vec3, paramarg1: number): Vec3;
    static toBlockPos(paramarg0: Vec3, paramarg1: number, paramarg2: number, paramarg3: number): BlockPos;
    static toVec3d(paramarg0: Vec3i, paramarg1: number, paramarg2: number, paramarg3: number): Vec3;
    static toVec3d(paramarg0: Vector3fc): Vec3;
    static toVec3f(paramarg0: Vec3): Vec3f;
    static toVec3i(paramarg0: Vec3): Vec3i;
    static unaryMinus(paramarg0: BlockPos): BlockPos;
    static unaryMinus(paramarg0: Vec3i): Vec3i;
    static unaryMinus(paramarg0: Vec3): Vec3;
    /**
     * `this.normalize().scale(newLength)`
     *
     * @returns a {@link Vec3} with same direction as the receiver and length of {@link newLength}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/MinecraftVectorExtensions.kt#L120 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/MinecraftVectorExtensions.kt:120}
     */
    static withLength(paramarg0: Vec3, paramarg1: number): Vec3;
}