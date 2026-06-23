import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { CompoundTag } from '../../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { LootItemConditionalFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction$Builder.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class SetCustomDataFunction extends LootItemConditionalFunction {
    static MAP_CODEC: MapCodec<SetCustomDataFunction>;
    static setCustomData(paramvalue: CompoundTag): LootItemConditionalFunction$Builder<any>;
    private constructor(predicates: LootItemCondition[], tag: CompoundTag)
    // private tag: CompoundTag;
    codec(): MapCodec<SetCustomDataFunction>;
    run(itemStack: ItemStack, context: LootContext): ItemStack;
}