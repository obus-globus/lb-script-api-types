import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EnchantingContext } from '../../../../../../net/fabricmc/fabric/api/item/v1/EnchantingContext.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { ItemStackTemplate } from '../../../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { Enchantment } from '../../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
export interface FabricItemStack extends Object{
    canBeEnchantedWith(arg0: Holder<Enchantment>, arg1: EnchantingContext): boolean;
    getCraftingRemainder(): ItemStackTemplate;
    getCreatorNamespace(): string;
}