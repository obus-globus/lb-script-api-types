import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LootTableSource } from '../../../../../../net/fabricmc/fabric/api/loot/v3/LootTableSource.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { LootTable } from '../../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { LootTable$Builder } from '../../../../../../net/minecraft/world/level/storage/loot/LootTable$Builder.d.ts'
export interface LootTableEvents$Modify extends Object{
    modifyLootTable(arg0: ResourceKey<LootTable>, arg1: LootTable$Builder, arg2: LootTableSource, arg3: HolderLookup$Provider): void;
}