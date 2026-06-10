import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { EquipmentSlot } from '../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { Enchantment$Cost } from '../../../../../net/minecraft/world/item/enchantment/Enchantment$Cost.d.ts'
export class Enchantment$EnchantmentDefinition extends Record {
    static CODEC: MapCodec<Enchantment$EnchantmentDefinition>;
    // private anvilCost: number;
    // private maxCost: Enchantment$Cost;
    // private maxLevel: number;
    // private minCost: Enchantment$Cost;
    // private primaryItems: Optional<Holder<Item>[]>;
    // private slots: EquipmentSlot[][];
    // private supportedItems: Holder<Item>[];
    // private weight: number;
    anvilCost(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    maxCost(): Enchantment$Cost;
    maxLevel(): number;
    minCost(): Enchantment$Cost;
    primaryItems(): Optional<Holder<Item>[]>;
    slots(): EquipmentSlot[][];
    supportedItems(): Holder<Item>[];
    toString(): string;
    weight(): number;
}