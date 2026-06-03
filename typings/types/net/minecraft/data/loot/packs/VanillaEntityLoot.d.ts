import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { EntityLootSubProvider } from '../../../../../net/minecraft/data/loot/EntityLootSubProvider.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { DyeColor } from '../../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { LootPool$Builder } from '../../../../../net/minecraft/world/level/storage/loot/LootPool$Builder.d.ts'
import type { LootTable } from '../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { LootTable$Builder } from '../../../../../net/minecraft/world/level/storage/loot/LootTable$Builder.d.ts'
export class VanillaEntityLoot extends EntityLootSubProvider {
    static createSheepDispatchPool(paramtableNames: { [key in DyeColor]: Object | null }): LootPool$Builder;
    constructor(registries: HolderLookup$Provider)
    elderGuardianLootTable(): LootTable$Builder;
    generate(): void;
    generate(output: (param0: ResourceKey<LootTable>, param1: LootTable$Builder) => void): void;
}