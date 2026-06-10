import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { Enchantment } from '../../../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
import type { LootItemConditionalFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction$Builder.d.ts'
import type { LootItemFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
export class EnchantRandomlyFunction$Builder extends LootItemConditionalFunction$Builder<EnchantRandomlyFunction$Builder> {
    constructor()
    // private includeAdditionalCostComponent: boolean;
    // private onlyCompatible: boolean;
    // private options: Optional<Holder<Enchantment>[]>;
    allowingIncompatibleEnchantments(): EnchantRandomlyFunction$Builder;
    build(): LootItemFunction;
    getThis(): EnchantRandomlyFunction$Builder;
    includeAdditionalCostComponent(): EnchantRandomlyFunction$Builder;
    withEnchantment(enchantment: Holder<Enchantment>): EnchantRandomlyFunction$Builder;
    withOneOf(enchantments: Holder<Enchantment>[]): EnchantRandomlyFunction$Builder;
    withOptions(enchantments: Optional<Holder<Enchantment>[]>): EnchantRandomlyFunction$Builder;
}