import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class FallingPlayerKt extends Object {
    /**
     * Follows Minecraft 26.2 {@code Entity.collectCandidateStepUpHeights()} and
     * {@code Entity.collideWithShapes()} when selecting a step-up movement.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/FallingPlayer.kt#L345 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/FallingPlayer.kt:345}
     */
    static resolveStepUpMovement(movement: Vec3, directMovement: Vec3, boundingBox: AABB, groundedBox: AABB, maxUpStep: number, colliders: VoxelShape[]): Vec3;
    /**
     * Mirrors Minecraft 26.2 {@code CollisionGetter.findSupportingBlock()}: nearest first,
     * then the greater {@code BlockPos.compareTo()} position on an exact distance tie.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/FallingPlayer.kt#L407 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/FallingPlayer.kt:407}
     */
    static selectSupportingBlock(candidates: Iterator<BlockPos>, position: Vec3): BlockPos | null;
}