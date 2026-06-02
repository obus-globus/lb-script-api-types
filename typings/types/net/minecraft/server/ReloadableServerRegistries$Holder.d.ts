import type { Object } from '../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { LootTable } from '../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
export class ReloadableServerRegistries$Holder extends Object {
    constructor(registries: HolderLookup$Provider)
    // private registries: HolderLookup$Provider;
    getLootTable(id: ResourceKey<LootTable>): LootTable;
    lookup(): HolderLookup$Provider;
}