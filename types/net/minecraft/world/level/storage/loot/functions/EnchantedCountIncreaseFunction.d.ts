import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { HolderLookup$Provider } from '../../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { ContextKey } from '../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Enchantment } from '../../../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContext } from '../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { EnchantedCountIncreaseFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/EnchantedCountIncreaseFunction$Builder.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { NumberProvider } from '../../../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export class EnchantedCountIncreaseFunction extends LootItemConditionalFunction {
    static MAP_CODEC: MapCodec<EnchantedCountIncreaseFunction>;
    static NO_LIMIT: number;
    static lootingMultiplier(paramregistries: HolderLookup$Provider, paramcount: NumberProvider): EnchantedCountIncreaseFunction$Builder;
    private constructor(predicates: LootItemCondition[], enchantment: Holder<Enchantment>, count: NumberProvider, limit: number)
    // private count: NumberProvider;
    // private enchantment: Holder<Enchantment>;
    // private limit: number;
    codec(): MapCodec<EnchantedCountIncreaseFunction>;
    getReferencedContextParams(): ContextKey<Object>[];
    // private hasLimit(): boolean;
    run(itemStack: ItemStack, context: LootContext): ItemStack;
    validate(context: ValidationContext): void;
}