import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class TierItemUtilsKt extends Object {
    static actualTierItem(item: string, itemsWithTiers: { [key: string]: string[] }): string;
    static autoShopItemTier(string: string): number;
    static generalTiersName(string: string): string;
    static getAllTierItems(item: string, itemsWithTiers: { [key: string]: string[] }): string[];
    /**
     * Checks if there is a better item so that it's not necessary to buy the current item
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoshop/TierItemUtils.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoshop/TierItemUtils.kt:45}
     */
    static hasBetterTierItem(item: string, items: { [key: string]: number }): boolean;
    static isItemWithTiers(string: string): boolean;
}