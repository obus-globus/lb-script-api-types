import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DataComponentType } from '../../../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class ToggleTooltips extends LootItemConditionalFunction {
    static MAP_CODEC: MapCodec<ToggleTooltips>;
    private constructor(predicates: LootItemCondition[], values: JavaMap<DataComponentType<Object>, boolean>)
    // private values: JavaMap<DataComponentType<Object>, boolean>;
    codec(): MapCodec<ToggleTooltips>;
    run(itemStack: ItemStack, context: LootContext): ItemStack;
}