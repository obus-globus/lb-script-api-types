import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { EffectEventContext } from '../../../../../../../../net/fabricmc/fabric/api/entity/event/v1/effect/EffectEventContext.d.ts'
import type { MobEffectInstance } from '../../../../../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export interface ServerMobEffectEvents$AfterRemove extends Object{
    afterRemove(arg0: MobEffectInstance, arg1: LivingEntity, arg2: EffectEventContext): void;
}