import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DataComponentPatch } from '../../../../../../../net/minecraft/core/component/DataComponentPatch.d.ts'
import type { DataComponentType } from '../../../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { LootItemConditionalFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction$Builder.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class SetComponentsFunction extends LootItemConditionalFunction {
    static MAP_CODEC: MapCodec<SetComponentsFunction>;
    static setComponent<T extends unknown>(paramtype: DataComponentType<T>, paramvalue: T): LootItemConditionalFunction$Builder<any>;
    private constructor(predicates: LootItemCondition[], components: DataComponentPatch)
    // private components: DataComponentPatch;
    codec(): MapCodec<SetComponentsFunction>;
    run(itemStack: ItemStack, context: LootContext): ItemStack;
}