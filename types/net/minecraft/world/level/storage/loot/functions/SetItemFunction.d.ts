import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { Item } from '../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class SetItemFunction extends LootItemConditionalFunction {
    static MAP_CODEC: MapCodec<SetItemFunction>;
    private constructor(predicates: LootItemCondition[], item: Holder<Item>)
    // private item: Holder<Item>;
    codec(): MapCodec<SetItemFunction>;
    run(itemStack: ItemStack, context: LootContext): ItemStack;
}