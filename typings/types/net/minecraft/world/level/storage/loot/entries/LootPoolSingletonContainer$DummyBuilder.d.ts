import type { LootPoolEntryContainer } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer.d.ts'
import type { LootPoolSingletonContainer } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolSingletonContainer.d.ts'
import type { LootPoolSingletonContainer$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolSingletonContainer$Builder.d.ts'
import type { LootPoolSingletonContainer$EntryConstructor } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolSingletonContainer$EntryConstructor.d.ts'
import type { LootItemFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class LootPoolSingletonContainer$DummyBuilder extends LootPoolSingletonContainer$Builder<LootPoolSingletonContainer$DummyBuilder> {
    constructor(constructor: (param0: number, param1: number, param2: LootItemCondition[], param3: LootItemFunction[]) => LootPoolSingletonContainer)
    // private constructor: (param0: number, param1: number, param2: LootItemCondition[], param3: LootItemFunction[]) => LootPoolSingletonContainer;
    build(): LootPoolEntryContainer;
    getThis(): LootPoolSingletonContainer$DummyBuilder;
}