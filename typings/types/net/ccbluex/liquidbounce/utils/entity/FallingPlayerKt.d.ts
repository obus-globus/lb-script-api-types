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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/FallingPlayer.kt#L341 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/FallingPlayer.kt:341}
     */
    static resolveStepUpMovement(movement: Vec3, directMovement: Vec3, boundingBox: AABB, groundedBox: AABB, maxUpStep: number, colliders: VoxelShape[]): Vec3;
    /**
     * Mirrors Minecraft 26.2 {@code CollisionGetter.findSupportingBlock()}: nearest first,
     * then the greater {@code BlockPos.compareTo()} position on an exact distance tie.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/FallingPlayer.kt#L403 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/FallingPlayer.kt:403}
     */
    static selectSupportingBlock(candidates: Iterator<BlockPos>, position: Vec3): BlockPos | null;
}