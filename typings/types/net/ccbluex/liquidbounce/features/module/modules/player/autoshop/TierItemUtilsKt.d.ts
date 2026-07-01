import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class TierItemUtilsKt extends Object {
    static actualTierItem(item: string, itemsWithTiers: { [key: string]: string[] }): string;
    static autoShopItemTier(string: string): number;
    static generalTiersName(string: string): string;
    static getAllTierItems(item: string, itemsWithTiers: { [key: string]: string[] }): string[];
    /**
     * Checks if there is a better item so that it's not necessary to buy the current item
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoshop/TierItemUtils.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoshop/TierItemUtils.kt:45}
     */
    static hasBetterTierItem(item: string, items: { [key: string]: number }): boolean;
    static isItemWithTiers(string: string): boolean;
}