import type { ImmutableMap$Builder } from '../../../../com/google/common/collect/ImmutableMap$Builder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MobEffectsPredicate } from '../../../../net/minecraft/advancements/predicates/MobEffectsPredicate.d.ts'
import type { MobEffectsPredicate$MobEffectInstancePredicate } from '../../../../net/minecraft/advancements/predicates/MobEffectsPredicate$MobEffectInstancePredicate.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { MobEffect } from '../../../../net/minecraft/world/effect/MobEffect.d.ts'
export class MobEffectsPredicate$Builder extends Object {
    static effects(): MobEffectsPredicate$Builder;
    constructor()
    // private effectMap: ImmutableMap$Builder<Holder<MobEffect>, MobEffectsPredicate$MobEffectInstancePredicate>;
    and(effect: Holder<MobEffect>): MobEffectsPredicate$Builder;
    and(effect: Holder<MobEffect>, predicate: MobEffectsPredicate$MobEffectInstancePredicate): MobEffectsPredicate$Builder;
    build(): MobEffectsPredicate;
}