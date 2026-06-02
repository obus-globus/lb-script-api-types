import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export interface Attackable extends Object{
    getLastAttacker(): LivingEntity;
}