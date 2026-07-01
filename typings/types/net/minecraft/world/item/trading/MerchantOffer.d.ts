import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemCost } from '../../../../../net/minecraft/world/item/trading/ItemCost.d.ts'
export class MerchantOffer extends Object {
    static CODEC: Codec<MerchantOffer>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, MerchantOffer>;
    static createFromStream(paraminput: RegistryFriendlyByteBuf): MerchantOffer;
    constructor(baseCostA: ItemCost, costB: Optional<ItemCost>, result: ItemStack, maxUses: number, xp: number, priceMultiplier: number)
    constructor(baseCostA: ItemCost, costB: Optional<ItemCost>, result: ItemStack, uses: number, maxUses: number, xp: number, priceMultiplier: number)
    constructor(baseCostA: ItemCost, costB: Optional<ItemCost>, result: ItemStack, uses: number, maxUses: number, xp: number, priceMultiplier: number, demand: number)
    constructor(buy: ItemCost, result: ItemStack, maxUses: number, xp: number, priceMultiplier: number)
    readonly baseCostA: ItemCost;
    readonly costB: Optional<ItemCost>;
    readonly demand: number;
    readonly maxUses: number;
    readonly priceMultiplier: number;
    readonly result: ItemStack;
    // private rewardExp: boolean;
    readonly specialPriceDiff: number;
    readonly uses: number;
    readonly xp: number;
    addToSpecialPriceDiff(add: number): void;
    assemble(): ItemStack;
    copy(): MerchantOffer;
    getBaseCostA(): ItemStack;
    getCostA(): ItemStack;
    getCostB(): ItemStack;
    getDemand(): number;
    getItemCostA(): ItemCost;
    getItemCostB(): Optional<ItemCost>;
    getMaxUses(): number;
    // private getModifiedCostCount(cost: ItemCost): number;
    getPriceMultiplier(): number;
    getResult(): ItemStack;
    getSpecialPriceDiff(): number;
    getUses(): number;
    getXp(): number;
    increaseUses(): void;
    isOutOfStock(): boolean;
    needsRestock(): boolean;
    resetSpecialPriceDiff(): void;
    resetUses(): void;
    satisfiedBy(buyA: ItemStack, buyB: ItemStack): boolean;
    setSpecialPriceDiff(value: number): void;
    setToOutOfStock(): void;
    shouldRewardExp(): boolean;
    take(buyA: ItemStack, buyB: ItemStack): boolean;
    updateDemand(): void;
}