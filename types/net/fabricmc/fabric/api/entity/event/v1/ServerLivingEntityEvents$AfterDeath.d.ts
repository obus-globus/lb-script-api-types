import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DamageSource } from '../../../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export interface ServerLivingEntityEvents$AfterDeath extends Object{
    afterDeath(arg0: LivingEntity, arg1: DamageSource): void;
}