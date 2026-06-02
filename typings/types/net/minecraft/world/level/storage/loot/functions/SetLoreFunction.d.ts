import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ContextKey } from '../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemLore } from '../../../../../../../net/minecraft/world/item/component/ItemLore.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootContext$EntityTarget } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext$EntityTarget.d.ts'
import type { ListOperation } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/ListOperation.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { SetLoreFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/SetLoreFunction$Builder.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class SetLoreFunction extends LootItemConditionalFunction {
    static MAP_CODEC: MapCodec<SetLoreFunction>;
    static setLore(): SetLoreFunction$Builder;
    constructor(predicates: LootItemCondition[], lore: Component[], mode: ListOperation, resolutionContext: Optional<LootContext$EntityTarget>)
    // private lore: Component[];
    // private mode: ListOperation;
    // private resolutionContext: Optional<LootContext$EntityTarget>;
    codec(): MapCodec<SetLoreFunction>;
    getReferencedContextParams(): ContextKey<Object>[];
    run(itemStack: ItemStack, context: LootContext): ItemStack;
    // private updateLore(itemLore: ItemLore, context: LootContext): Component[];
}