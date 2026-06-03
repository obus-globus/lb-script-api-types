import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Filterable } from '../../../../../../../net/minecraft/server/network/Filterable.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { WrittenBookContent } from '../../../../../../../net/minecraft/world/item/component/WrittenBookContent.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ListOperation } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/ListOperation.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class SetWrittenBookPagesFunction extends LootItemConditionalFunction {
    static MAP_CODEC: MapCodec<SetWrittenBookPagesFunction>;
    constructor(predicates: LootItemCondition[], pages: Filterable<Component>[], pageOperation: ListOperation)
    // private pageOperation: ListOperation;
    // private pages: Filterable<Component>[];
    apply(itemStack: ItemStack, context: LootContext): ItemStack;
    apply(original: WrittenBookContent): WrittenBookContent;
    codec(): MapCodec<SetWrittenBookPagesFunction>;
    run(itemStack: ItemStack, context: LootContext): ItemStack;
}