import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EnchantingContext } from '../../../../../../net/fabricmc/fabric/api/item/v1/EnchantingContext.d.ts'
import type { TriState } from '../../../../../../net/fabricmc/fabric/api/util/TriState.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Enchantment } from '../../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
export interface EnchantmentEvents$AllowEnchanting extends Object{
    allowEnchanting(arg0: Holder<Enchantment>, arg1: ItemStack, arg2: EnchantingContext): TriState;
}