import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { HolderLookup$Provider } from '../../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { ContextKey } from '../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Enchantment } from '../../../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { EnchantRandomlyFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/EnchantRandomlyFunction$Builder.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class EnchantRandomlyFunction extends LootItemConditionalFunction {
    static MAP_CODEC: MapCodec<EnchantRandomlyFunction>;
    static randomApplicableEnchantment(paramregistries: HolderLookup$Provider): EnchantRandomlyFunction$Builder;
    static randomEnchantment(): EnchantRandomlyFunction$Builder;
    private constructor(predicates: LootItemCondition[], options: Optional<Holder<T>[]>, onlyCompatible: boolean, includeAdditionalCostComponent: boolean)
    // private includeAdditionalCostComponent: boolean;
    // private onlyCompatible: boolean;
    // private options: Optional<Holder<T>[]>;
    codec(): MapCodec<EnchantRandomlyFunction>;
    // private enchantItem(itemStack: ItemStack, enchantment: Holder<Enchantment>, context: LootContext): ItemStack;
    getReferencedContextParams(): ContextKey<Object>[];
    run(itemStack: ItemStack, context: LootContext): ItemStack;
}