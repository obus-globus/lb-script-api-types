import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { ItemPredicate } from '../../../../../../../net/minecraft/advancements/predicates/ItemPredicate.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContext } from '../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { FilteredFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/FilteredFunction$Builder.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { LootItemFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class FilteredFunction extends LootItemConditionalFunction {
    static MAP_CODEC: MapCodec<FilteredFunction>;
    static filtered(parampredicate: ItemPredicate): FilteredFunction$Builder;
    private constructor(predicates: LootItemCondition[], filter: ItemPredicate, onPass: Optional<LootItemFunction>, onFail: Optional<LootItemFunction>)
    // private filter: ItemPredicate;
    // private onFail: Optional<LootItemFunction>;
    // private onPass: Optional<LootItemFunction>;
    codec(): MapCodec<FilteredFunction>;
    run(itemStack: ItemStack, context: LootContext): ItemStack;
    validate(context: ValidationContext): void;
}