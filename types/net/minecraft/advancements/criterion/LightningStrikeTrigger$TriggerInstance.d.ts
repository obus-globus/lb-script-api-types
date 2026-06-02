import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/Criterion.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/criterion/ContextAwarePredicate.d.ts'
import type { EntityPredicate } from '../../../../net/minecraft/advancements/criterion/EntityPredicate.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { LootContext } from '../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export class LightningStrikeTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<LightningStrikeTrigger$TriggerInstance>;
    static lightningStrike(paramlightning: Optional<EntityPredicate>, parambystander: Optional<EntityPredicate>): Criterion<LightningStrikeTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>, lightning: Optional<ContextAwarePredicate>, bystander: Optional<ContextAwarePredicate>)
    // private bystander: Optional<ContextAwarePredicate>;
    // private lightning: Optional<ContextAwarePredicate>;
    // private player: Optional<ContextAwarePredicate>;
    bystander(): Optional<ContextAwarePredicate>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    lightning(): Optional<ContextAwarePredicate>;
    matches(bolt: LootContext, entitiesAround: LootContext[]): boolean;
    player(): Optional<ContextAwarePredicate>;
    toString(): string;
    validate(validator: ValidationContextSource): void;
    validate(validator: ValidationContextSource): void;
}