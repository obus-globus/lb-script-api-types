import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Enchantment } from '../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
export class EnchantmentUtilsKt extends Object {
    static clearEnchantments(paramarg0: ItemStack): void;
    static getEnchantment(paramarg0: ItemStack, paramarg1: ResourceKey<Enchantment>): number;
    static getEnchantmentCount(paramarg0: ItemStack): number;
    static removeEnchantment(paramarg0: ItemStack, paramarg1: Holder<Enchantment>): void;
}