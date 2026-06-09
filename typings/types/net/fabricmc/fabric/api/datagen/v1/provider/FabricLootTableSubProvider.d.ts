import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ResourceCondition } from '../../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceCondition.d.ts'
import type { DataProvider } from '../../../../../../../net/minecraft/data/DataProvider.d.ts'
import type { LootTableSubProvider } from '../../../../../../../net/minecraft/data/loot/LootTableSubProvider.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { LootTable } from '../../../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { LootTable$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/LootTable$Builder.d.ts'
export interface FabricLootTableSubProvider extends Object, DataProvider, LootTableSubProvider {
    withConditions(arg0: (param0: ResourceKey<LootTable>, param1: LootTable$Builder) => void, arg1: ResourceCondition[]): (param0: ResourceKey<LootTable>, param1: LootTable$Builder) => void;
}