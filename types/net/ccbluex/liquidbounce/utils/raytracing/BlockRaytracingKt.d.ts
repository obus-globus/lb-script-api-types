import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BlockHitResult } from '../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class BlockRaytracingKt extends Object {
    /**
     * Allows you to check if a point is behind a wall
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/raytracing/BlockRaytracing.kt#L73 | src/main/kotlin/net/ccbluex/liquidbounce/utils/raytracing/BlockRaytracing.kt:73}
     */
    static isFacingBlock(paramarg0: Entity, paramarg1: Vec3, paramarg2: Vec3, paramarg3: BlockPos, paramarg4: Direction, paramarg5: number): boolean;
    static rayTraceCollidingBlocks(paramarg0: Vec3, paramarg1: Vec3): BlockHitResult;
    static raytraceBlock(paramarg0: number, paramarg1: Rotation, paramarg2: BlockPos, paramarg3: BlockState): BlockHitResult;
}