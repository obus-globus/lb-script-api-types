import type { ImmutableList$Builder } from '../../../../../../../com/google/common/collect/ImmutableList$Builder.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AlternativesEntry$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/AlternativesEntry$Builder.d.ts'
import type { EntryGroup$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/EntryGroup$Builder.d.ts'
import type { LootPoolEntryContainer } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer.d.ts'
import type { SequentialEntry$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/SequentialEntry$Builder.d.ts'
import type { ConditionUserBuilder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/ConditionUserBuilder.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { LootItemCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
export abstract class LootPoolEntryContainer$Builder<T extends LootPoolEntryContainer$Builder<T>> extends Object implements ConditionUserBuilder<T> {
    constructor()
    // private conditions: ImmutableList$Builder<LootItemCondition>;
    append(other: LootPoolEntryContainer$Builder<Object>): EntryGroup$Builder;
    build(): LootPoolEntryContainer;
    getConditions(): LootItemCondition[];
    getThis(): T;
    otherwise(other: LootPoolEntryContainer$Builder<Object>): AlternativesEntry$Builder;
    then(other: LootPoolEntryContainer$Builder<Object>): SequentialEntry$Builder;
    unwrap(): T;
    when(collection: E[], conditionProvider: (param0: E) => () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition): T;
    when(condition: () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition): T;
    when(collection: E[], conditionProvider: (param0: E) => () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition): T;
}