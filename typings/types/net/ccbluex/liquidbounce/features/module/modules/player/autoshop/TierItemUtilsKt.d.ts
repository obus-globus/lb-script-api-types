import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class TierItemUtilsKt extends Object {
    static actualTierItem(item: string, itemsWithTiers: JavaMap<string, string[]>): string;
    static autoShopItemTier(self: string): number;
    static generalTiersName(self: string): string;
    static getAllTierItems(item: string, itemsWithTiers: JavaMap<string, string[]>): string[];
    /**
     * Checks if there is a better item so that it's not necessary to buy the current item
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoshop/TierItemUtils.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoshop/TierItemUtils.kt:45}
     */
    static hasBetterTierItem(item: string, items: JavaMap<string, number>): boolean;
    static isItemWithTiers(self: string): boolean;
}