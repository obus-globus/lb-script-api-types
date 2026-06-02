import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LootPool$Builder } from '../../../../../../net/minecraft/world/level/storage/loot/LootPool$Builder.d.ts'
import type { LootPoolEntryContainer } from '../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer.d.ts'
import type { LootItemFunction } from '../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
import type { LootItemCondition } from '../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export interface FabricLootPoolBuilder extends Object{
    add(arg0: E[]): LootPool$Builder;
    add(arg0: LootPoolEntryContainer): LootPool$Builder;
    apply(arg0: E[]): LootPool$Builder;
    apply(arg0: LootItemFunction): LootPool$Builder;
    when(arg0: E[]): LootPool$Builder;
    when(arg0: LootItemCondition): LootPool$Builder;
}