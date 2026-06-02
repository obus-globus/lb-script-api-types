import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EnchantmentSource } from '../../../../../../net/fabricmc/fabric/api/item/v1/EnchantmentSource.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Enchantment } from '../../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
import type { Enchantment$Builder } from '../../../../../../net/minecraft/world/item/enchantment/Enchantment$Builder.d.ts'
export interface EnchantmentEvents$Modify extends Object{
    modify(arg0: ResourceKey<Enchantment>, arg1: Enchantment$Builder, arg2: EnchantmentSource): void;
}