import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { EntityLootSubProvider } from '../../../../../net/minecraft/data/loot/EntityLootSubProvider.d.ts'
import type { DyeColor } from '../../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { LootPool$Builder } from '../../../../../net/minecraft/world/level/storage/loot/LootPool$Builder.d.ts'
import type { LootTable$Builder } from '../../../../../net/minecraft/world/level/storage/loot/LootTable$Builder.d.ts'
export class VanillaEntityLoot extends EntityLootSubProvider {
    static createSheepDispatchPool(paramtableNames: { [key in DyeColor]: Object | null }): LootPool$Builder;
    constructor(registries: HolderLookup$Provider)
    elderGuardianLootTable(): LootTable$Builder;
    generate(): void;
}