import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ResourceManager } from '../../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { LootTable } from '../../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
export interface LootTableEvents$Loaded extends Object{
    onLootTablesLoaded(arg0: ResourceManager, arg1: LootTable[]): void;
}