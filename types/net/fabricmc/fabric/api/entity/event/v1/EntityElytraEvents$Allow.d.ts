import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export interface EntityElytraEvents$Allow extends Object{
    allowElytraFlight(arg0: LivingEntity): boolean;
}