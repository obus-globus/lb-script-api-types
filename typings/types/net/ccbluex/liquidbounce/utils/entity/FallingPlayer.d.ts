import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FallingPlayer$CollisionResult } from '../../../../../net/ccbluex/liquidbounce/utils/entity/FallingPlayer$CollisionResult.d.ts'
import type { FallingPlayer$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/entity/FallingPlayer$Companion.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { MobEffect } from '../../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class FallingPlayer extends Object {
    static Companion: FallingPlayer$Companion;
    static fromPlayer(paramarg0: LocalPlayer): FallingPlayer;
    static fromPlayer(player: LocalPlayer, movementYaw: number): FallingPlayer;
    constructor(player: LocalPlayer, x: number, y: number, z: number, motionX: number, motionY: number, motionZ: number, yRot: number)
    // private boundingBox: AABB;
    // private lastResolvedMovement: Vec3;
    // private motionX: number;
    // private motionY: number;
    // private motionZ: number;
    // private player: LocalPlayer;
    // private simulatedTicks: number;
    x: number;
    y: number;
    // private yRot: number;
    z: number;
    // private advanceSimulation(rotationVec: Vec3, forceDescending: boolean): boolean;
    // private applyAirInput(): void;
    // private applyCollisionResponse(intendedMovement: Vec3, resolvedMovement: Vec3): void;
    // private applyFreeFallForces(): void;
    // private calculateElytraTick(rotationVec: Vec3): void;
    // private calculateMovementForTick(rotationVec: Vec3): Vec3;
    // private collidePlayer(movement: Vec3): Vec3;
    // private effectiveGravity(): number;
    findCollision(ticks: number): FallingPlayer$CollisionResult | null;
    // private findSupportingBlock(testArea: AABB): BlockPos | null;
    // private findSupportingBlock(boundingBox: AABB, movement: Vec3): BlockPos | null;
    // private hasStatusEffect(effect: Holder<MobEffect>): boolean;
    // private playerMovementInput(): Vec3;
    /**
     * Checks whether a future movement tick starts with the player's feet in {@link targetPos} before landing.
     * This matches the block-position lookup in Minecraft 26.2 {@code LivingEntity.onClimbable()}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7419c75563c98eff050759c8dc8d8c35ed59d950/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/FallingPlayer.kt#L199 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/FallingPlayer.kt:199}
     */
    willStartTickInBlockBeforeCollision(targetPos: BlockPos, ticks: number, forceDescending: boolean): boolean;
}