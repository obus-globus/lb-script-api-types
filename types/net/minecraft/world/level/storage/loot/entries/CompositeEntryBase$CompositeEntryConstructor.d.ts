import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CompositeEntryBase } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/CompositeEntryBase.d.ts'
import type { LootPoolEntryContainer } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export interface CompositeEntryBase$CompositeEntryConstructor<T extends CompositeEntryBase> extends Object{
    create(children: LootPoolEntryContainer[], conditions: LootItemCondition[]): T;
}