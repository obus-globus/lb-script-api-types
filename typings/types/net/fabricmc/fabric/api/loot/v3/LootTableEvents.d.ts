import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { LootTableEvents$Loaded } from '../../../../../../net/fabricmc/fabric/api/loot/v3/LootTableEvents$Loaded.d.ts'
import type { LootTableEvents$Modify } from '../../../../../../net/fabricmc/fabric/api/loot/v3/LootTableEvents$Modify.d.ts'
import type { LootTableEvents$ModifyDrops } from '../../../../../../net/fabricmc/fabric/api/loot/v3/LootTableEvents$ModifyDrops.d.ts'
import type { LootTableEvents$Replace } from '../../../../../../net/fabricmc/fabric/api/loot/v3/LootTableEvents$Replace.d.ts'
import type { LootTableSource } from '../../../../../../net/fabricmc/fabric/api/loot/v3/LootTableSource.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ResourceManager } from '../../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootTable } from '../../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { LootTable$Builder } from '../../../../../../net/minecraft/world/level/storage/loot/LootTable$Builder.d.ts'
export class LootTableEvents extends Object {
    static ALL_LOADED: Event<(param0: ResourceManager, param1: LootTable[]) => void>;
    static MODIFY: Event<(param0: ResourceKey<LootTable>, param1: LootTable$Builder, param2: LootTableSource, param3: HolderLookup$Provider) => void>;
    static MODIFY_DROPS: Event<(param0: Holder<LootTable>, param1: LootContext, param2: ItemStack[]) => void>;
    static REPLACE: Event<(param0: ResourceKey<LootTable>, param1: LootTable, param2: LootTableSource, param3: HolderLookup$Provider) => LootTable>;
    private constructor()
}