import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ContextKeySet } from '../../../../../../../net/minecraft/util/context/ContextKeySet.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { Validatable } from '../../../../../../../net/minecraft/world/level/storage/loot/Validatable.d.ts'
import type { ValidationContext } from '../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { ComposableEntryContainer } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/ComposableEntryContainer.d.ts'
import type { LootPoolEntry } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntry.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export abstract class LootPoolEntryContainer extends Object implements Validatable, ComposableEntryContainer {
    static ALWAYS_FALSE: (param0: LootContext, param1: (param0: LootPoolEntry) => void) => kotlin.Boolean;
    static ALWAYS_TRUE: (param0: LootContext, param1: (param0: LootPoolEntry) => void) => kotlin.Boolean;
    static listValidatorForContext(paramparams: ContextKeySet): (param0: Object | null) => Object | null;
    static validate(paramcontext: ValidationContext, paramname: string, paramlist: (Object | null)[]): void;
    static validate(paramcontext: ValidationContext, paramname: string, paramoptional: Optional<Object>): void;
    static validate(paramcontext: ValidationContext, paramname: string, paramv: Validatable): void;
    static validate(paramcontext: ValidationContext, paramlist: (Object | null)[]): void;
    static validateReference(paramcontext: ValidationContext, paramid: ResourceKey<Object>): void;
    static validatorForContext(paramparams: ContextKeySet): (param0: Object | null) => Object | null;
    constructor(conditions: LootItemCondition[])
    // private compositeCondition: (param0: LootContext) => kotlin.Boolean;
    // private conditions: LootItemCondition[];
    and(other: (param0: LootContext, param1: (param0: LootPoolEntry) => void) => kotlin.Boolean): (param0: LootContext, param1: (param0: LootPoolEntry) => void) => kotlin.Boolean;
    canRun(context: LootContext): boolean;
    codec(): MapCodec<LootPoolEntryContainer>;
    or(other: (param0: LootContext, param1: (param0: LootPoolEntry) => void) => kotlin.Boolean): (param0: LootContext, param1: (param0: LootPoolEntry) => void) => kotlin.Boolean;
    validate(output: ValidationContext): void;
}