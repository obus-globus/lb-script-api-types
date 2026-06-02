import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Filterable } from '../../../../../../../net/minecraft/server/network/Filterable.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { WrittenBookContent } from '../../../../../../../net/minecraft/world/item/component/WrittenBookContent.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class SetBookCoverFunction extends LootItemConditionalFunction {
    static MAP_CODEC: MapCodec<SetBookCoverFunction>;
    constructor(predicates: LootItemCondition[], title: Optional<Filterable<string>>, author: Optional<string>, generation: Optional<number>)
    // private author: Optional<string>;
    // private generation: Optional<number>;
    // private title: Optional<Filterable<string>>;
    // private apply(original: WrittenBookContent): WrittenBookContent;
    codec(): MapCodec<SetBookCoverFunction>;
    run(itemStack: ItemStack, context: LootContext): ItemStack;
}