import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CriterionTriggerInstance } from '../../../../net/minecraft/advancements/CriterionTriggerInstance.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/predicates/ContextAwarePredicate.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export interface SimpleCriterionTrigger$SimpleInstance extends Object, CriterionTriggerInstance{
    player(): Optional<ContextAwarePredicate>;
    validate(validator: ValidationContextSource): void;
}