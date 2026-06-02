import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { AbstractMinecart } from '../../../../../../net/minecraft/world/entity/vehicle/minecart/AbstractMinecart.d.ts'
import type { MinecartBehavior } from '../../../../../../net/minecraft/world/entity/vehicle/minecart/MinecartBehavior.d.ts'
import type { NewMinecartBehavior$MinecartStep } from '../../../../../../net/minecraft/world/entity/vehicle/minecart/NewMinecartBehavior$MinecartStep.d.ts'
import type { NewMinecartBehavior$StepPartialTicks } from '../../../../../../net/minecraft/world/entity/vehicle/minecart/NewMinecartBehavior$StepPartialTicks.d.ts'
import type { NewMinecartBehavior$TrackIteration } from '../../../../../../net/minecraft/world/entity/vehicle/minecart/NewMinecartBehavior$TrackIteration.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { RailShape } from '../../../../../../net/minecraft/world/level/block/state/properties/RailShape.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class NewMinecartBehavior extends MinecartBehavior {
    static ON_RAIL_Y_OFFSET: number;
    static OPPOSING_SLOPES_REST_AT_SPEED_THRESHOLD: number;
    static POS_ROT_LERP_TICKS: number;
    constructor(minecart: AbstractMinecart)
    // private cacheIndexAlpha: NewMinecartBehavior$StepPartialTicks;
    // private cachedLerpDelay: number;
    // private cachedPartialTick: number;
    currentLerpSteps: NewMinecartBehavior$MinecartStep[];
    currentLerpStepsTotalWeight: number;
    // private lerpDelay: number;
    lerpSteps: NewMinecartBehavior$MinecartStep[];
    oldLerp: NewMinecartBehavior$MinecartStep;
    adjustToRails(targetBlockPos: BlockPos, currentState: BlockState, instant: boolean): void;
    // private calculateBoostTrackSpeed(deltaMovement: Vec3, pos: BlockPos, state: BlockState): Vec3;
    // private calculateHaltTrackSpeed(deltaMovement: Vec3, state: BlockState): Vec3;
    // private calculatePlayerInputSpeed(deltaMovement: Vec3): Vec3;
    // private calculateSlopeSpeed(deltaMovement: Vec3, shape: RailShape): Vec3;
    // private calculateTrackSpeed(level: ServerLevel, deltaMovement: Vec3, trackIteration: NewMinecartBehavior$TrackIteration, currentPos: BlockPos, currentState: BlockState, shape: RailShape): Vec3;
    cartHasPosRotLerp(): boolean;
    getCartLerpMovements(partialTicks: number): Vec3;
    getCartLerpPosition(partialTicks: number): Vec3;
    getCartLerpXRot(partialTicks: number): number;
    getCartLerpYRot(partialTicks: number): number;
    // private getCurrentLerpStep(partialTick: number): NewMinecartBehavior$StepPartialTicks;
    getMaxSpeed(level: ServerLevel): number;
    getSlowdownFactor(): number;
    // private isDecending(movement: Vec3, shape: RailShape): boolean;
    // private lerpClientPositionAndRotation(): void;
    moveAlongTrack(level: ServerLevel): void;
    pickupEntities(hitbox: AABB): boolean;
    pushAndPickupEntities(): boolean;
    pushEntities(hitbox: AABB): boolean;
    // private restAtVShape(currentRailShape: RailShape, newRailShape: RailShape): boolean;
    setOldLerpValues(): void;
    // private setRotation(yRot: number, xRot: number): void;
    stepAlongTrack(pos: BlockPos, shape: RailShape, movementLeft: number): number;
    tick(): void;
}