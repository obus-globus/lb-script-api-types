import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DamageSource } from '../../../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export interface ServerLivingEntityEvents$AfterDamage extends Object{
    afterDamage(arg0: LivingEntity, arg1: DamageSource, arg2: number, arg3: number, arg4: boolean): void;
}