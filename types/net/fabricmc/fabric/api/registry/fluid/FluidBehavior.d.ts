import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TagKey } from '../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityFluidInteraction } from '../../../../../../net/minecraft/world/entity/EntityFluidInteraction.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Fluid } from '../../../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface FluidBehavior extends Object{
    canDrownInFluid(arg0: TagKey<Fluid>, arg1: LivingEntity): boolean;
    canMoveDownInFluid(arg0: TagKey<Fluid>, arg1: Entity): boolean;
    canSprintInFluid(arg0: TagKey<Fluid>, arg1: LivingEntity): boolean;
    canSupportBoat(arg0: TagKey<Fluid>, arg1: Entity): boolean;
    canSwimInFluid(arg0: TagKey<Fluid>, arg1: Entity): boolean;
    handleFluidInteractionUpdate(arg0: TagKey<Fluid>, arg1: Entity, arg2: EntityFluidInteraction, arg3: boolean): void;
    shouldTryFloatingInFluid(arg0: TagKey<Fluid>, arg1: Entity): boolean;
    travelInFluid(arg0: TagKey<Fluid>, arg1: LivingEntity, arg2: Vec3, arg3: number, arg4: boolean, arg5: number): void;
}