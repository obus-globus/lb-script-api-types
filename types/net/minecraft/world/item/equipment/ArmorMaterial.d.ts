import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { TagKey } from '../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemAttributeModifiers } from '../../../../../net/minecraft/world/item/component/ItemAttributeModifiers.d.ts'
import type { ArmorType } from '../../../../../net/minecraft/world/item/equipment/ArmorType.d.ts'
import type { EquipmentAsset } from '../../../../../net/minecraft/world/item/equipment/EquipmentAsset.d.ts'
export class ArmorMaterial extends Record {
    // private assetId: ResourceKey<EquipmentAsset>;
    // private defense: { [key in ArmorType]: number };
    // private durability: number;
    // private enchantmentValue: number;
    // private equipSound: Holder<SoundEvent>;
    // private knockbackResistance: number;
    // private repairIngredient: TagKey<Item>;
    // private toughness: number;
    assetId(): ResourceKey<EquipmentAsset>;
    createAttributes(type: ArmorType): ItemAttributeModifiers;
    defense(): { [key in ArmorType]: number };
    durability(): number;
    enchantmentValue(): number;
    equals(o: Object | null): boolean;
    equipSound(): Holder<SoundEvent>;
    hashCode(): number;
    knockbackResistance(): number;
    repairIngredient(): TagKey<Item>;
    toString(): string;
    toughness(): number;
}