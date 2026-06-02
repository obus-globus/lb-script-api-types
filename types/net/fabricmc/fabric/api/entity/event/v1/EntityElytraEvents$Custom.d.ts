import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export interface EntityElytraEvents$Custom extends Object{
    useCustomElytra(arg0: LivingEntity, arg1: boolean): boolean;
}