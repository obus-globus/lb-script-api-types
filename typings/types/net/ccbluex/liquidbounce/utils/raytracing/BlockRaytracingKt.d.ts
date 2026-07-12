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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/utils/raytracing/BlockRaytracing.kt#L76 | src/main/kotlin/net/ccbluex/liquidbounce/utils/raytracing/BlockRaytracing.kt:76}
     */
    static isFacingBlock(entity: Entity, eyes: Vec3, targetPoint: Vec3, blockPos: BlockPos, expectedSide: Direction, expectedMaxRange: number): boolean;
    static rayTraceCollidingBlocks(start: Vec3, end: Vec3): BlockHitResult;
    static raytraceBlock(range: number, rotation: Rotation, pos: BlockPos, state: BlockState): BlockHitResult;
}