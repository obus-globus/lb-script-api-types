import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EnchantingContext } from '../../../../../../net/fabricmc/fabric/api/item/v1/EnchantingContext.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { InteractionHand } from '../../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemStackTemplate } from '../../../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { Enchantment } from '../../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
export interface FabricItem extends Object{
    allowComponentsUpdateAnimation(arg0: Player, arg1: InteractionHand, arg2: ItemStack, arg3: ItemStack): boolean;
    allowContinuingBlockBreaking(arg0: Player, arg1: ItemStack, arg2: ItemStack): boolean;
    canBeEnchantedWith(arg0: ItemStack, arg1: Holder<Enchantment>, arg2: EnchantingContext): boolean;
    getCraftingRemainder(arg0: ItemStack): ItemStackTemplate;
    getCreatorNamespace(arg0: ItemStack): string;
}