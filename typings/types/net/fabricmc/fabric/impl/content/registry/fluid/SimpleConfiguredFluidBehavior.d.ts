import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { BiPredicate } from '../../../../../../../java/util/function/BiPredicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FluidBehavior } from '../../../../../../../net/fabricmc/fabric/api/registry/fluid/FluidBehavior.d.ts'
import type { FluidBehavior$Builder } from '../../../../../../../net/fabricmc/fabric/api/registry/fluid/FluidBehavior$Builder.d.ts'
import type { FluidBehavior$Builder$MovementSlowdownFunction } from '../../../../../../../net/fabricmc/fabric/api/registry/fluid/FluidBehavior$Builder$MovementSlowdownFunction.d.ts'
import type { TagKey } from '../../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { ToFloatFunction } from '../../../../../../../net/minecraft/util/ToFloatFunction.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityFluidInteraction } from '../../../../../../../net/minecraft/world/entity/EntityFluidInteraction.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Fluid } from '../../../../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class SimpleConfiguredFluidBehavior extends Record implements FluidBehavior {
    static WATER_LIKE: FluidBehavior;
    static WATER_LIKE: FluidBehavior;
    static simple(): FluidBehavior$Builder;
    // private allowBoats: boolean;
    // private allowMovingDown: boolean;
    // private allowSprinting: (param0: TagKey<Fluid>, param1: LivingEntity) => boolean;
    // private allowSwimming: boolean;
    // private drowning: boolean;
    // private fallDistanceMultiplier: number;
    // private flowingPushScale: number;
    // private gravityMultiplier: number;
    // private makeMobsFloat: boolean;
    // private makeRiddenMobsFloat: boolean;
    // private movementSlowdown: FluidBehavior$Builder$MovementSlowdownFunction;
    // private movementSpeed: (param0: LivingEntity) => number;
    allowBoats(): boolean;
    allowMovingDown(): boolean;
    allowSprinting(): (param0: TagKey<Fluid>, param1: LivingEntity) => boolean;
    allowSwimming(): boolean;
    canDrownInFluid(arg0: TagKey<Fluid>, arg1: LivingEntity): boolean;
    canMoveDownInFluid(arg0: TagKey<Fluid>, arg1: Entity): boolean;
    canSprintInFluid(arg0: TagKey<Fluid>, arg1: LivingEntity): boolean;
    canSupportBoat(arg0: TagKey<Fluid>, arg1: Entity): boolean;
    canSwimInFluid(arg0: TagKey<Fluid>, arg1: Entity): boolean;
    drowning(): boolean;
    equals(arg0: Object | null): boolean;
    fallDistanceMultiplier(): number;
    flowingPushScale(): number;
    gravityMultiplier(): number;
    handleFluidInteractionUpdate(arg0: TagKey<Fluid>, arg1: Entity, arg2: EntityFluidInteraction, arg3: boolean): void;
    hashCode(): number;
    makeMobsFloat(): boolean;
    makeRiddenMobsFloat(): boolean;
    movementSlowdown(): FluidBehavior$Builder$MovementSlowdownFunction;
    movementSpeed(): (param0: LivingEntity) => number;
    shouldTryFloatingInFluid(arg0: TagKey<Fluid>, arg1: Entity): boolean;
    toString(): string;
    travelInFluid(arg0: TagKey<Fluid>, arg1: LivingEntity, arg2: Vec3, arg3: number, arg4: boolean, arg5: number): void;
}