import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MobEffectInstance } from '../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class MobEffectInstance$BlendState extends Object {
    private constructor()
    // private factor: number;
    // private factorPreviousFrame: number;
    copyFrom(other: MobEffectInstance$BlendState): void;
    getFactor(livingEntity: LivingEntity, partialTickTime: number): number;
    setImmediate(instance: MobEffectInstance): void;
    tick(instance: MobEffectInstance): void;
}