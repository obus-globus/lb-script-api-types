import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class TierItemUtilsKt extends Object {
    static actualTierItem(item: string, itemsWithTiers: { [key: string]: Object | null }): string;
    static autoShopItemTier(string: string): number;
    static generalTiersName(string: string): string;
    static getAllTierItems(item: string, itemsWithTiers: { [key: string]: Object | null }): string[];
    /**
     * Checks if there is a better item so that it's not necessary to buy the current item
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoshop/TierItemUtils.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoshop/TierItemUtils.kt:39}
     */
    static hasBetterTierItem(item: string, items: { [key: string]: number }): boolean;
    static isItemWithTiers(string: string): boolean;
}