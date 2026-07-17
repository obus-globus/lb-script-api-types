import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MobEffectsPredicate$MobEffectInstancePredicate } from '../../../../net/minecraft/advancements/predicates/MobEffectsPredicate$MobEffectInstancePredicate.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { MobEffect } from '../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { MobEffectInstance } from '../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class MobEffectsPredicate extends Record {
    static CODEC: Codec<MobEffectsPredicate>;
    constructor(effectMap: JavaMap<Holder<MobEffect>, MobEffectsPredicate$MobEffectInstancePredicate>)
    // private effectMap: JavaMap<Holder<MobEffect>, MobEffectsPredicate$MobEffectInstancePredicate>;
    effectMap(): JavaMap<Holder<MobEffect>, MobEffectsPredicate$MobEffectInstancePredicate>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(effects: JavaMap<Holder<MobEffect>, MobEffectInstance>): boolean;
    matches(entity: Entity): boolean;
    matches(entity: LivingEntity): boolean;
    toString(): string;
}