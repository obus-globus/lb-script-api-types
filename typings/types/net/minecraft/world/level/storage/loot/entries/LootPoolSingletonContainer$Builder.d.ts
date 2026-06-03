import type { ImmutableList$Builder } from '../../../../../../../com/google/common/collect/ImmutableList$Builder.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { LootPoolEntryContainer$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer$Builder.d.ts'
import type { FunctionUserBuilder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/FunctionUserBuilder.d.ts'
import type { LootItemFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
import type { LootItemFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction$Builder.d.ts'
export abstract class LootPoolSingletonContainer$Builder<T extends LootPoolSingletonContainer$Builder<T>> extends LootPoolEntryContainer$Builder<T> implements FunctionUserBuilder<T> {
    constructor()
    // private functions: ImmutableList$Builder<LootItemFunction>;
    // private quality: number;
    // private weight: number;
    apply(collection: E[], functionProvider: (param0: E) => LootItemFunction$Builder): T;
    apply(collection: E[], functionProvider: (param0: E) => LootItemFunction$Builder): T;
    apply(function_: LootItemFunction$Builder): T;
    apply(collection: E[], functionProvider: (param0: E) => LootItemFunction$Builder): T;
    apply(collection: E[], functionProvider: (param0: E) => LootItemFunction$Builder): T;
    getFunctions(): LootItemFunction[];
    setQuality(quality: number): T;
    setWeight(weight: number): T;
}