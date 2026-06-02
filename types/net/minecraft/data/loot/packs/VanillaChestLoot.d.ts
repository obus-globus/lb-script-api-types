import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { LootTableSubProvider } from '../../../../../net/minecraft/data/loot/LootTableSubProvider.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { LootTable } from '../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { LootTable$Builder } from '../../../../../net/minecraft/world/level/storage/loot/LootTable$Builder.d.ts'
export class VanillaChestLoot extends Record implements LootTableSubProvider {
    constructor(registries: HolderLookup$Provider)
    // private registries: HolderLookup$Provider;
    ancientCityLootTable(): LootTable$Builder;
    bastionBridgeLootTable(): LootTable$Builder;
    bastionHoglinStableLootTable(): LootTable$Builder;
    bastionOtherLootTable(): LootTable$Builder;
    bastionTreasureLootTable(): LootTable$Builder;
    desertPyramidLootTable(): LootTable$Builder;
    endCityTreasureLootTable(): LootTable$Builder;
    equals(o: Object | null): boolean;
    generate(output: (param0: ResourceKey<LootTable>, param1: LootTable$Builder) => void): void;
    hashCode(): number;
    jungleTempleLootTable(): LootTable$Builder;
    netherBridgeLootTable(): LootTable$Builder;
    pillagerOutpostLootTable(): LootTable$Builder;
    registries(): HolderLookup$Provider;
    shipwreckMapLootTable(): LootTable$Builder;
    shipwreckSupplyLootTable(): LootTable$Builder;
    shipwreckTreasureLootTable(): LootTable$Builder;
    spawnerLootTables(output: (param0: ResourceKey<LootTable>, param1: LootTable$Builder) => void): void;
    strongholdCorridorLootTable(): LootTable$Builder;
    strongholdLibraryLootTable(): LootTable$Builder;
    toString(): string;
    woodlandMansionLootTable(): LootTable$Builder;
}