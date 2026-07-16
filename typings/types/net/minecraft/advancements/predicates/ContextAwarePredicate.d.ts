import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../../com/mojang/serialization/DataResult.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ContextKeySet } from '../../../../net/minecraft/util/context/ContextKeySet.d.ts'
import type { LootContext } from '../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { Validatable } from '../../../../net/minecraft/world/level/storage/loot/Validatable.d.ts'
import type { ValidationContext } from '../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { LootItemCondition } from '../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class ContextAwarePredicate extends Object implements Validatable {
    static CODEC: Codec<ContextAwarePredicate>;
    static create(...paramconditions: LootItemCondition[]): ContextAwarePredicate;
    static listValidatorForContext<T extends Validatable>(paramparams: ContextKeySet): (param0: T[]) => DataResult<T[]>;
    static validate(paramcontext: ValidationContext, paramname: string, paramlist: Validatable[]): void;
    static validate(paramcontext: ValidationContext, paramname: string, paramoptional: Optional<Validatable>): void;
    static validate(paramcontext: ValidationContext, paramname: string, paramv: Validatable): void;
    static validate(paramcontext: ValidationContext, paramlist: Validatable[]): void;
    static validateReference<T extends Validatable>(paramcontext: ValidationContext, paramid: ResourceKey<T>): void;
    static validatorForContext<T extends Validatable>(paramparams: ContextKeySet): (param0: T) => DataResult<T>;
    constructor(conditions: LootItemCondition[])
    // private compositePredicates: (param0: LootContext) => boolean;
    // private conditions: LootItemCondition[];
    matches(context: LootContext): boolean;
    validate(context: ValidationContext): void;
}