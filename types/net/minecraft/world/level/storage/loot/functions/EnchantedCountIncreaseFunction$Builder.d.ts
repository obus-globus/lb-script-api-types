import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { Enchantment } from '../../../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
import type { LootItemConditionalFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction$Builder.d.ts'
import type { LootItemFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
import type { NumberProvider } from '../../../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export class EnchantedCountIncreaseFunction$Builder extends LootItemConditionalFunction$Builder<EnchantedCountIncreaseFunction$Builder> {
    constructor(enchantment: Holder<Enchantment>, count: NumberProvider)
    // private count: NumberProvider;
    // private enchantment: Holder<Enchantment>;
    // private limit: number;
    build(): LootItemFunction;
    getThis(): EnchantedCountIncreaseFunction$Builder;
    setLimit(limit: number): EnchantedCountIncreaseFunction$Builder;
}