import type { BiPredicate } from '../../../../../../../java/util/function/BiPredicate.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FluidBehavior } from '../../../../../../../net/fabricmc/fabric/api/registry/fluid/FluidBehavior.d.ts'
import type { FluidBehavior$Builder } from '../../../../../../../net/fabricmc/fabric/api/registry/fluid/FluidBehavior$Builder.d.ts'
import type { FluidBehavior$Builder$MovementSlowdownFunction } from '../../../../../../../net/fabricmc/fabric/api/registry/fluid/FluidBehavior$Builder$MovementSlowdownFunction.d.ts'
import type { TagKey } from '../../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { ToFloatFunction } from '../../../../../../../net/minecraft/util/ToFloatFunction.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Fluid } from '../../../../../../../net/minecraft/world/level/material/Fluid.d.ts'
export class SimpleConfiguredFluidBehavior$Builder extends Object implements FluidBehavior$Builder {
    constructor()
    // private allowBoats: boolean;
    // private allowMovingDown: boolean;
    // private allowSprinting: (param0: TagKey<Fluid>, param1: LivingEntity) => boolean;
    // private allowSwimming: boolean;
    // private drowning: boolean;
    // private fallDistanceModifier: number;
    // private flowingPushScale: number;
    // private gravityMultiplier: number;
    // private makeMobsFloat: boolean;
    // private makeRiddenMobsFloat: boolean;
    // private movementSlowdown: FluidBehavior$Builder$MovementSlowdownFunction;
    // private movementSpeed: (param0: LivingEntity) => number;
    allowBoats(arg0: boolean): FluidBehavior$Builder;
    allowMovingDown(arg0: boolean): FluidBehavior$Builder;
    allowSprinting(arg0: (param0: TagKey<Fluid>, param1: LivingEntity) => boolean): FluidBehavior$Builder;
    allowSprinting(arg0: (param0: LivingEntity) => boolean): FluidBehavior$Builder;
    allowSprinting(arg0: boolean): FluidBehavior$Builder;
    allowSwimming(arg0: boolean): FluidBehavior$Builder;
    build(): FluidBehavior;
    enableDrowning(arg0: boolean): FluidBehavior$Builder;
    fallDistanceModifier(arg0: number): FluidBehavior$Builder;
    flowingPushScale(arg0: number): FluidBehavior$Builder;
    gravityMultiplier(arg0: number): FluidBehavior$Builder;
    makeMobsFloat(arg0: boolean): FluidBehavior$Builder;
    makeRiddenMobsFloat(arg0: boolean): FluidBehavior$Builder;
    movementSlowdown(arg0: number): FluidBehavior$Builder;
    movementSlowdown(arg0: number, arg1: number): FluidBehavior$Builder;
    movementSlowdown(arg0: FluidBehavior$Builder$MovementSlowdownFunction): FluidBehavior$Builder;
    movementSlowdown(arg0: (param0: LivingEntity) => number): FluidBehavior$Builder;
    movementSpeed(arg0: number): FluidBehavior$Builder;
    movementSpeed(arg0: (param0: LivingEntity) => number): FluidBehavior$Builder;
}