import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Potion } from '../../../../../../../net/minecraft/world/item/alchemy/Potion.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { LootItemConditionalFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction$Builder.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class SetPotionFunction extends LootItemConditionalFunction {
    static MAP_CODEC: MapCodec<SetPotionFunction>;
    static setPotion(paramvalue: Holder<Potion>): LootItemConditionalFunction$Builder<Object>;
    private constructor(predicates: LootItemCondition[], potion: Holder<Potion>)
    // private potion: Holder<Potion>;
    codec(): MapCodec<SetPotionFunction>;
    run(itemStack: ItemStack, context: LootContext): ItemStack;
}