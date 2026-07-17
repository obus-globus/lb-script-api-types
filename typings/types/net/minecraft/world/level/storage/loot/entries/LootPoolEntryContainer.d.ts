import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { Validatable } from '../../../../../../../net/minecraft/world/level/storage/loot/Validatable.d.ts'
import type { ValidationContext } from '../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { ComposableEntryContainer } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/ComposableEntryContainer.d.ts'
import type { LootPoolEntry } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntry.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export abstract class LootPoolEntryContainer extends Object implements Validatable, ComposableEntryContainer {
    static ALWAYS_FALSE: (param0: LootContext, param1: (param0: LootPoolEntry) => void) => boolean;
    static ALWAYS_TRUE: (param0: LootContext, param1: (param0: LootPoolEntry) => void) => boolean;
    constructor(conditions: LootItemCondition[])
    // private compositeCondition: (param0: LootContext) => boolean;
    // private conditions: LootItemCondition[];
    and(other: (param0: LootContext, param1: (param0: LootPoolEntry) => void) => boolean): (param0: LootContext, param1: (param0: LootPoolEntry) => void) => boolean;
    canRun(context: LootContext): boolean;
    codec(): MapCodec<LootPoolEntryContainer>;
    or(other: (param0: LootContext, param1: (param0: LootPoolEntry) => void) => boolean): (param0: LootContext, param1: (param0: LootPoolEntry) => void) => boolean;
    validate(output: ValidationContext): void;
}