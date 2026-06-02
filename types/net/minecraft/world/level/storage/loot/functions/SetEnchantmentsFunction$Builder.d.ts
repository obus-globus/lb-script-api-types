import type { ImmutableMap$Builder } from '../../../../../../../com/google/common/collect/ImmutableMap$Builder.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { Enchantment } from '../../../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
import type { LootItemConditionalFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction$Builder.d.ts'
import type { LootItemFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
import type { NumberProvider } from '../../../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export class SetEnchantmentsFunction$Builder extends LootItemConditionalFunction$Builder<SetEnchantmentsFunction$Builder> {
    constructor()
    constructor(add: boolean)
    // private add: boolean;
    // private enchantments: ImmutableMap$Builder<Holder<Enchantment>, NumberProvider>;
    build(): LootItemFunction;
    getThis(): SetEnchantmentsFunction$Builder;
    withEnchantment(enchantment: Holder<Enchantment>, levelProvider: NumberProvider): SetEnchantmentsFunction$Builder;
}