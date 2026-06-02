import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DamageSource } from '../../../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export interface ServerLivingEntityEvents$AllowDamage extends Object{
    allowDamage(arg0: LivingEntity, arg1: DamageSource, arg2: number): boolean;
}