import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/predicates/ContextAwarePredicate.d.ts'
import type { EntityPredicate$Builder } from '../../../../net/minecraft/advancements/predicates/entity/EntityPredicate$Builder.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/triggers/Criterion.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/triggers/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { LootContext } from '../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export class SummonedEntityTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<SummonedEntityTrigger$TriggerInstance>;
    static summonedEntity(parampredicate: EntityPredicate$Builder): Criterion<SummonedEntityTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>, entity: Optional<ContextAwarePredicate>)
    // private entity: Optional<ContextAwarePredicate>;
    // private player: Optional<ContextAwarePredicate>;
    entity(): Optional<ContextAwarePredicate>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(entity: LootContext): boolean;
    player(): Optional<ContextAwarePredicate>;
    toString(): string;
    validate(validator: ValidationContextSource): void;
}