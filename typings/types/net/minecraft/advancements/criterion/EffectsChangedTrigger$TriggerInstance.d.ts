import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/Criterion.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/criterion/ContextAwarePredicate.d.ts'
import type { EntityPredicate$Builder } from '../../../../net/minecraft/advancements/criterion/EntityPredicate$Builder.d.ts'
import type { MobEffectsPredicate } from '../../../../net/minecraft/advancements/criterion/MobEffectsPredicate.d.ts'
import type { MobEffectsPredicate$Builder } from '../../../../net/minecraft/advancements/criterion/MobEffectsPredicate$Builder.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { LootContext } from '../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export class EffectsChangedTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<EffectsChangedTrigger$TriggerInstance>;
    static gotEffectsFrom(paramsource: EntityPredicate$Builder): Criterion<EffectsChangedTrigger$TriggerInstance>;
    static hasEffects(parameffects: MobEffectsPredicate$Builder): Criterion<EffectsChangedTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>, effects: Optional<MobEffectsPredicate>, source: Optional<ContextAwarePredicate>)
    // private effects: Optional<MobEffectsPredicate>;
    // private player: Optional<ContextAwarePredicate>;
    // private source: Optional<ContextAwarePredicate>;
    effects(): Optional<MobEffectsPredicate>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(player: ServerPlayer, source: LootContext): boolean;
    player(): Optional<ContextAwarePredicate>;
    source(): Optional<ContextAwarePredicate>;
    toString(): string;
    validate(validator: ValidationContextSource): void;
}