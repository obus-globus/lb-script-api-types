import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { LootItemConditionalFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction$Builder.d.ts'
import type { LootItemFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
import type { NumberProvider } from '../../../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export class EnchantWithLevelsFunction$Builder extends LootItemConditionalFunction$Builder<EnchantWithLevelsFunction$Builder> {
    constructor(levels: NumberProvider)
    // private includeAdditionalCostComponent: boolean;
    // private levels: NumberProvider;
    // private options: Optional<Holder<T>[]>;
    build(): LootItemFunction;
    getThis(): EnchantWithLevelsFunction$Builder;
    includeAdditionalCostComponent(): EnchantWithLevelsFunction$Builder;
    withOptions(options: Optional<Holder<T>[]>): EnchantWithLevelsFunction$Builder;
    withOptions(tag: Holder<T>[]): EnchantWithLevelsFunction$Builder;
}