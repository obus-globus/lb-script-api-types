import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Enchantment } from '../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
export class EnchantmentValueEstimator$WeightedEnchantment extends Object {
    constructor(enchantment: ResourceKey<Enchantment>, factor: number)
    readonly enchantment: ResourceKey<Enchantment>;
    readonly factor: number;
}