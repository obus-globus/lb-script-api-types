import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface FluidBehavior$Builder$MovementSlowdownFunction extends Object{
    apply(arg0: LivingEntity, arg1: Vec3, arg2: boolean, arg3: number, arg4: boolean): Vec3;
}