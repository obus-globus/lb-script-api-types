import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PlayerSimulation } from '../../../../../net/ccbluex/liquidbounce/utils/entity/PlayerSimulation.d.ts'
import type { SimulatedPlayer$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/entity/SimulatedPlayer$Companion.d.ts'
import type { SimulatedPlayer$SimulatedPlayerInput } from '../../../../../net/ccbluex/liquidbounce/utils/entity/SimulatedPlayer$SimulatedPlayerInput.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { TagKey } from '../../../../../net/minecraft/tags/TagKey.d.ts'
import type { MobEffect } from '../../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { MobEffectInstance } from '../../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
import type { EntityFluidInteraction } from '../../../../../net/minecraft/world/entity/EntityFluidInteraction.d.ts'
import type { Attribute } from '../../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Fluid } from '../../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class SimulatedPlayer extends Object implements PlayerSimulation {
    static Companion: SimulatedPlayer$Companion;
    static fromClientPlayer(input: SimulatedPlayer$SimulatedPlayerInput): SimulatedPlayer;
    static fromOtherPlayer(player: Player, input: SimulatedPlayer$SimulatedPlayerInput): SimulatedPlayer;
    constructor(player: Player, input: SimulatedPlayer$SimulatedPlayerInput, pos: Vec3, deltaMovement: Vec3, boundingBox: AABB, yRot: number, xRot: number, isSprinting: boolean, fallDistance: number, jumpTriggerTime: number, jumping: boolean, fallFlying: boolean, onGround: boolean, horizontalCollision: boolean, verticalCollision: boolean, wasTouchingWater: boolean, isSwimming: boolean, wasUnderwater: boolean, fluidInteraction: EntityFluidInteraction)
    boundingBox: AABB;
    readonly clipLedged: boolean;
    deltaMovement: Vec3;
    fallDistance: number;
    // private fallFlying: boolean;
    // private fluidInteraction: EntityFluidInteraction;
    horizontalCollision: boolean;
    input: SimulatedPlayer$SimulatedPlayerInput;
    // private isSprinting: boolean;
    /*not mapped: */ isSprinting(): boolean;
    // private isSwimming: boolean;
    // private jumpTriggerTime: number;
    // private jumping: boolean;
    // private /*not mapped: */ getLevel(): Level;
    onGround: boolean;
    // private player: Player;
    pos: Vec3;
    // private simulatedTicks: number;
    // private verticalCollision: boolean;
    // private wasTouchingWater: boolean;
    // private wasUnderwater: boolean;
    // private xRot: number;
    /*not mapped: */ getXRot(): number;
    // private yRot: number;
    /*not mapped: */ getYRot(): number;
    // private adjustMovementForCollisions(movement: Vec3): Vec3;
    // private applyMovementInput(movementInput: Vec3, slipperiness: number): Vec3;
    // private applyWebSpeed(motion: Vec3): Vec3;
    // private calculateViewVector(xRot: number, yRot: number): Vec3;
    clone(): SimulatedPlayer;
    // private doesNotCollide(offsetX: number, offsetY: number, offsetZ: number): boolean;
    // private doesNotCollide(box: AABB): boolean;
    // private getAirStrafingSpeed(): number;
    getAttributeValue(attribute: Holder<Attribute>): number;
    // private getBlockPosBelowThatAffectsMyMovement(): BlockPos;
    // private getFluidHeight(tags: TagKey<Fluid>): number;
    // private getFluidJumpThreshold(): number;
    // private getFrictionInfluencedSpeed(slipperiness: number): number;
    // private getJumpBoostPower(): number;
    // private getJumpPower(): number;
    // private getJumpVelocityMultiplier(): number;
    // private getSpeed(): number;
    // private getStatusEffect(effect: Holder<MobEffect>): MobEffectInstance | null;
    // private getViewVector(): Vec3;
    // private handleOnClimbable(motion: Vec3): Vec3;
    // private hasStatusEffect(effect: Holder<MobEffect>): boolean;
    // private isAboveGround(): boolean;
    // private isClimbing(): boolean;
    // private isEyeInWater(): boolean;
    // private isInLava(): boolean;
    // private isInWater(): boolean;
    // private isSubmergedInWater(): boolean;
    jump(): void;
    /**
     * @see net.minecraft.world.entity.LivingEntity.jumpFromGround()
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/SimulatedPlayer.kt#L565 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/SimulatedPlayer.kt:565}
     */
    jumpFromGround(): void;
    // private maybeBackOffFromEdge(movement: Vec3): Vec3;
    // private move(input: Vec3): void;
    // private onLanding(): void;
    // private shouldClipAtLedge(): boolean;
    // private swimUpward(fluid: TagKey<Fluid>): void;
    tick(): void;
    // private trapdoorUsableAsLadder(pos: BlockPos, state: BlockState): boolean;
    // private travel(movementInput: Vec3): void;
    // private updateFluidInteraction(): boolean;
    // private updateIsUnderwater(): boolean;
    // private updateSwimming(): void;
    // private updateVelocity(speed: number, movementInput: Vec3): void;
}