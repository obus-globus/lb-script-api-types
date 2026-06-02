import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { HolderLookup$RegistryLookup } from '../../../../../net/minecraft/core/HolderLookup$RegistryLookup.d.ts'
import type { LootTableSubProvider } from '../../../../../net/minecraft/data/loot/LootTableSubProvider.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { Enchantment } from '../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
import type { ArmorTrim } from '../../../../../net/minecraft/world/item/equipment/trim/ArmorTrim.d.ts'
import type { LootTable } from '../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { LootTable$Builder } from '../../../../../net/minecraft/world/level/storage/loot/LootTable$Builder.d.ts'
export class VanillaEquipmentLoot extends Record implements LootTableSubProvider {
    static trialChamberEquipment(paramhelmet: Item, paramchestplate: Item, paramtrim: ArmorTrim, paramenchantments: HolderLookup$RegistryLookup<Enchantment>): LootTable$Builder;
    constructor(registries: HolderLookup$Provider)
    // private registries: HolderLookup$Provider;
    equals(o: Object | null): boolean;
    generate(output: (param0: ResourceKey<LootTable>, param1: LootTable$Builder) => void): void;
    hashCode(): number;
    registries(): HolderLookup$Provider;
    toString(): string;
}