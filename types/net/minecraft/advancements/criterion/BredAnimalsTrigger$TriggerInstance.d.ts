import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/Criterion.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/criterion/ContextAwarePredicate.d.ts'
import type { EntityPredicate } from '../../../../net/minecraft/advancements/criterion/EntityPredicate.d.ts'
import type { EntityPredicate$Builder } from '../../../../net/minecraft/advancements/criterion/EntityPredicate$Builder.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { LootContext } from '../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export class BredAnimalsTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<BredAnimalsTrigger$TriggerInstance>;
    static bredAnimals(): Criterion<BredAnimalsTrigger$TriggerInstance>;
    static bredAnimals(paramparent1: Optional<EntityPredicate>, paramparent2: Optional<EntityPredicate>, paramchild: Optional<EntityPredicate>): Criterion<BredAnimalsTrigger$TriggerInstance>;
    static bredAnimals(paramchild: EntityPredicate$Builder): Criterion<BredAnimalsTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>, parent: Optional<ContextAwarePredicate>, partner: Optional<ContextAwarePredicate>, child: Optional<ContextAwarePredicate>)
    // private child: Optional<ContextAwarePredicate>;
    // private parent: Optional<ContextAwarePredicate>;
    // private partner: Optional<ContextAwarePredicate>;
    // private player: Optional<ContextAwarePredicate>;
    child(): Optional<ContextAwarePredicate>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(parent: LootContext, partner: LootContext, child: LootContext): boolean;
    parent(): Optional<ContextAwarePredicate>;
    partner(): Optional<ContextAwarePredicate>;
    player(): Optional<ContextAwarePredicate>;
    toString(): string;
    validate(validator: ValidationContextSource): void;
    validate(validator: ValidationContextSource): void;
}