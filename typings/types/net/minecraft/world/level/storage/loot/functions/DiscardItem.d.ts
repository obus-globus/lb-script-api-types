import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { LootItemConditionalFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction$Builder.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class DiscardItem extends LootItemConditionalFunction {
    static MAP_CODEC: MapCodec<DiscardItem>;
    static discardItem(): LootItemConditionalFunction$Builder<any>;
    constructor(predicates: LootItemCondition[])
    codec(): MapCodec<DiscardItem>;
    run(itemStack: ItemStack, context: LootContext): ItemStack;
}