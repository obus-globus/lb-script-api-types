import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { ItemStackTemplate } from '../../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { Enchantment } from '../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
import type { MerchantOffer } from '../../../../../net/minecraft/world/item/trading/MerchantOffer.d.ts'
import type { TradeCost } from '../../../../../net/minecraft/world/item/trading/TradeCost.d.ts'
import type { LootContext } from '../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { Validatable } from '../../../../../net/minecraft/world/level/storage/loot/Validatable.d.ts'
import type { ValidationContext } from '../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { LootItemFunction } from '../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
import type { LootItemCondition } from '../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { NumberProvider } from '../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export class VillagerTrade extends Object implements Validatable {
    static CODEC: Codec<VillagerTrade>;
    constructor(wants: TradeCost, additionalWants: Optional<TradeCost>, gives: ItemStackTemplate, maxUses: number, xp: number, reputationDiscount: number, merchantPredicate: Optional<LootItemCondition>, givenItemModifiers: LootItemFunction[])
    constructor(wants: TradeCost, additionalWants: Optional<TradeCost>, gives: ItemStackTemplate, maxUses: number, xp: number, reputationDiscount: number, merchantPredicate: Optional<LootItemCondition>, givenItemModifiers: LootItemFunction[], doubleTradePriceEnchantments: Holder<Enchantment>[])
    constructor(wants: TradeCost, gives: ItemStackTemplate, maxUses: number, xp: number, reputationDiscount: number, merchantPredicate: Optional<LootItemCondition>, givenItemModifiers: LootItemFunction[])
    // private additionalWants: Optional<TradeCost>;
    // private doubleTradePriceEnchantments: Optional<Holder<Enchantment>[]>;
    // private givenItemModifiers: LootItemFunction[];
    // private gives: ItemStackTemplate;
    // private maxUses: NumberProvider;
    // private merchantPredicate: Optional<LootItemCondition>;
    // private reputationDiscount: NumberProvider;
    // private wants: TradeCost;
    // private xp: NumberProvider;
    getOffer(lootContext: LootContext): MerchantOffer;
    validate(context: ValidationContext): void;
}