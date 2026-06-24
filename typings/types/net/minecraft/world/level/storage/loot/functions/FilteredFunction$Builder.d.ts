import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { ItemPredicate } from '../../../../../../../net/minecraft/advancements/predicates/ItemPredicate.d.ts'
import type { LootItemConditionalFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction$Builder.d.ts'
import type { LootItemFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
export class FilteredFunction$Builder extends LootItemConditionalFunction$Builder<FilteredFunction$Builder> {
    private constructor(itemPredicate: ItemPredicate)
    // private itemPredicate: ItemPredicate;
    // private onFail: Optional<LootItemFunction>;
    // private onPass: Optional<LootItemFunction>;
    build(): LootItemFunction;
    getThis(): FilteredFunction$Builder;
    onFail(onFail: Optional<LootItemFunction>): FilteredFunction$Builder;
    onPass(onPass: Optional<LootItemFunction>): FilteredFunction$Builder;
}