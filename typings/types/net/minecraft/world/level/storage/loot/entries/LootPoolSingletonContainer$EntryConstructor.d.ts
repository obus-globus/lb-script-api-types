import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LootPoolSingletonContainer } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolSingletonContainer.d.ts'
import type { LootItemFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export interface LootPoolSingletonContainer$EntryConstructor extends Object{
    build(weight: number, quality: number, conditions: LootItemCondition[], functions: LootItemFunction[]): LootPoolSingletonContainer;
}