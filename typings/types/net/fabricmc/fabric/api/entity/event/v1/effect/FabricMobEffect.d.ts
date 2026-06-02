import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MobEffectInstance } from '../../../../../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export interface FabricMobEffect extends Object{
    onEffectAdded(arg0: MobEffectInstance, arg1: LivingEntity): void;
    onEffectRemoved(arg0: MobEffectInstance, arg1: LivingEntity): void;
    onEffectStarted(arg0: MobEffectInstance, arg1: LivingEntity): void;
}