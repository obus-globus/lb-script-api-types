import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Filterable } from '../../../../../../../net/minecraft/server/network/Filterable.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { WritableBookContent } from '../../../../../../../net/minecraft/world/item/component/WritableBookContent.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ListOperation } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/ListOperation.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class SetWritableBookPagesFunction extends LootItemConditionalFunction {
    static MAP_CODEC: MapCodec<SetWritableBookPagesFunction>;
    constructor(predicates: LootItemCondition[], pages: Filterable<string>[], pageOperation: ListOperation)
    // private pageOperation: ListOperation;
    // private pages: Filterable<string>[];
    apply(itemStack: ItemStack, context: LootContext): ItemStack;
    apply(original: WritableBookContent): WritableBookContent;
    codec(): MapCodec<SetWritableBookPagesFunction>;
    run(itemStack: ItemStack, context: LootContext): ItemStack;
}