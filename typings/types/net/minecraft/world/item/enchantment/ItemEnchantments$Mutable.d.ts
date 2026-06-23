import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { Enchantment } from '../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
import type { ItemEnchantments } from '../../../../../net/minecraft/world/item/enchantment/ItemEnchantments.d.ts'
export class ItemEnchantments$Mutable extends Object {
    constructor(enchantments: ItemEnchantments)
    // private enchantments: { [key: string]: any };
    getLevel(enchantment: Holder<Enchantment>): number;
    keySet(): Holder<Enchantment>[];
    removeIf(predicate: (param0: Holder<Enchantment>) => boolean): void;
    set(enchantment: Holder<Enchantment>, level: number): void;
    toImmutable(): ItemEnchantments;
    upgrade(enchantment: Holder<Enchantment>, level: number): void;
}