import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { ContextKey } from '../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Enchantment } from '../../../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ApplyBonusCount$Formula } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/ApplyBonusCount$Formula.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { LootItemConditionalFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction$Builder.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class ApplyBonusCount extends LootItemConditionalFunction {
    static MAP_CODEC: MapCodec<ApplyBonusCount>;
    static addBonusBinomialDistributionCount(paramenchantment: Holder<Enchantment>, paramprobability: number, paramextraRounds: number): LootItemConditionalFunction$Builder<Object>;
    static addOreBonusCount(paramenchantment: Holder<Enchantment>): LootItemConditionalFunction$Builder<Object>;
    static addUniformBonusCount(paramenchantment: Holder<Enchantment>): LootItemConditionalFunction$Builder<Object>;
    static addUniformBonusCount(paramenchantment: Holder<Enchantment>, parambonusMultiplier: number): LootItemConditionalFunction$Builder<Object>;
    private constructor(predicates: LootItemCondition[], enchantment: Holder<Enchantment>, formula: ApplyBonusCount$Formula)
    // private enchantment: Holder<Enchantment>;
    // private formula: ApplyBonusCount$Formula;
    codec(): MapCodec<ApplyBonusCount>;
    getReferencedContextParams(): ContextKey<Object>[];
    run(itemStack: ItemStack, context: LootContext): ItemStack;
}