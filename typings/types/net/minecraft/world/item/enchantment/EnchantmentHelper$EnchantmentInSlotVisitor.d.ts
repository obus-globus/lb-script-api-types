import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { EnchantedItemInUse } from '../../../../../net/minecraft/world/item/enchantment/EnchantedItemInUse.d.ts'
import type { Enchantment } from '../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
export interface EnchantmentHelper$EnchantmentInSlotVisitor extends Object{
    accept(enchantment: Holder<Enchantment>, level: number, item: EnchantedItemInUse): void;
}