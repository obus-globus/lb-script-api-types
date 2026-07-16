import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Enchantment } from '../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
export class EnchantmentUtilsKt extends Object {
    static clearEnchantments(self: ItemStack): void;
    static getEnchantment(self: ItemStack | null, enchantment: ResourceKey<Enchantment>): number;
    static getEnchantmentCount(self: ItemStack | null): number;
    static removeEnchantment(self: ItemStack, enchantment: Holder<Enchantment>): void;
}