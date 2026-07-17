import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LootContext } from '../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { Validatable } from '../../../../net/minecraft/world/level/storage/loot/Validatable.d.ts'
import type { ValidationContext } from '../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { LootItemCondition } from '../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class ContextAwarePredicate extends Object implements Validatable {
    static CODEC: Codec<ContextAwarePredicate>;
    static create(...paramconditions: LootItemCondition[]): ContextAwarePredicate;
    constructor(conditions: LootItemCondition[])
    // private compositePredicates: (param0: LootContext) => boolean;
    // private conditions: LootItemCondition[];
    matches(context: LootContext): boolean;
    validate(context: ValidationContext): void;
}