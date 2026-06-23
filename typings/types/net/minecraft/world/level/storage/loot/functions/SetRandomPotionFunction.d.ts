import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Potion } from '../../../../../../../net/minecraft/world/item/alchemy/Potion.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { LootItemConditionalFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction$Builder.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class SetRandomPotionFunction extends LootItemConditionalFunction {
    static MAP_CODEC: MapCodec<SetRandomPotionFunction>;
    static fromTagKey(paramtagKey: Optional<Holder<Potion>[]>): LootItemConditionalFunction$Builder<any>;
    private constructor(predicates: LootItemCondition[], options: Optional<Holder<Potion>[]>)
    // private options: Optional<Holder<Potion>[]>;
    codec(): MapCodec<SetRandomPotionFunction>;
    run(itemStack: ItemStack, context: LootContext): ItemStack;
}