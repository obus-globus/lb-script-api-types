import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { EnchantingContext } from '../../../../../../net/fabricmc/fabric/api/item/v1/EnchantingContext.d.ts'
import type { EnchantmentEvents$AllowEnchanting } from '../../../../../../net/fabricmc/fabric/api/item/v1/EnchantmentEvents$AllowEnchanting.d.ts'
import type { EnchantmentEvents$Modify } from '../../../../../../net/fabricmc/fabric/api/item/v1/EnchantmentEvents$Modify.d.ts'
import type { EnchantmentSource } from '../../../../../../net/fabricmc/fabric/api/item/v1/EnchantmentSource.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Enchantment } from '../../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
import type { Enchantment$Builder } from '../../../../../../net/minecraft/world/item/enchantment/Enchantment$Builder.d.ts'
export class EnchantmentEvents extends Object {
    static ALLOW_ENCHANTING: Event<(param0: Holder<Enchantment>, param1: ItemStack, param2: EnchantingContext) => net.fabricmc.fabric.api.util.TriState>;
    static MODIFY: Event<(param0: ResourceKey<Enchantment>, param1: Enchantment$Builder, param2: EnchantmentSource) => void>;
    private constructor()
}