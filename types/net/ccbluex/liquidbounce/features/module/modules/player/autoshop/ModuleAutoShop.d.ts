import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../../../kotlin/Pair.d.ts'
import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ShopConfigPreset } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/ShopConfigPreset.d.ts'
import type { ItemInfo } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/serializable/ItemInfo.d.ts'
import type { ShopConfig } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/serializable/ShopConfig.d.ts'
import type { ShopElement } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/serializable/ShopElement.d.ts'
/**
 * AutoShop module
 *
 * Automatically buys specific items in a BedWars shop.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoshop/ModuleAutoShop.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoshop/ModuleAutoShop.kt:55}
 */
export class ModuleAutoShop extends ClientModule {
    static INSTANCE: ModuleAutoShop;
    // private autoClose: boolean;
    // private /*not mapped: */ getAutoClose(): boolean;
    // private canAutoClose: boolean;
    currentConfig: ShopConfig;
    // private extraCategorySwitchDelay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getExtraCategorySwitchDelay(): { start: number; endInclusive: number; step: number };
    // private prevCategorySlot: number;
    readonly purchaseMode: ModeValueGroup<Mode>;
    // private recordedClicks: (Object | null)[];
    // private repeatable: EventHook<GameTickEvent>;
    // private shopConfig: ShopConfigPreset;
    // private /*not mapped: */ getShopConfig(): ShopConfigPreset;
    // private startDelay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getStartDelay(): { start: number; endInclusive: number; step: number };
    // private startMilliseconds: number;
    // private waitedBeforeTheFirstClick: boolean;
    // private buyAllItemsInCategory(remainingElements: ShopElement[]): void;
    // private buyItem(itemSlot: number, shopElement: ShopElement): void;
    // private checkElement(shopElement: ShopElement, remainingElements: ShopElement[] | null, items: Object2IntMap<string>): Object2IntMap<string> | null;
    // private checkPrice(price: ItemInfo, items: Object2IntMap<string>): boolean;
    // private doClicks(remainingElements: ShopElement[]): void;
    // private getRequiredClicks(shopElement: ShopElement, items: Object2IntMap<string>, requiredLimitedItems: Object2IntMap<string>): number;
    // private hasItemCategoryChanged(prevShopStacks: string[]): boolean;
    // private hasReceivedItems(prevInventory: Object2IntMap<string>, expectedItems: Object2IntMap<string>): boolean;
    // private isShopOpen(): boolean;
    // private reset(): void;
    // private simulateNextPurchases(remainingElements: ShopElement[], onlySameCategory: boolean): Pair<(Object | null)[], Object2IntMap<string>>;
    // private switchCategory(nextCategorySlot: number): void;
}