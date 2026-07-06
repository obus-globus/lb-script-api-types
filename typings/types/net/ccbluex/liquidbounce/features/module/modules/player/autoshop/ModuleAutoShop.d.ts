import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleAutoShop$PurchaseSimulationResult } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/ModuleAutoShop$PurchaseSimulationResult.d.ts'
import type { ShopConfigPreset } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/ShopConfigPreset.d.ts'
import type { ItemInfo } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/serializable/ItemInfo.d.ts'
import type { ShopConfig } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/serializable/ShopConfig.d.ts'
import type { ShopElement } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/serializable/ShopElement.d.ts'
/**
 * AutoShop module
 *
 * Automatically buys specific items in a BedWars shop.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/144cde7d640da47d1d98dbd04cfd7a29440805b4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoshop/ModuleAutoShop.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoshop/ModuleAutoShop.kt:60}
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
    // private checkElement(shopElement: ShopElement, remainingElements: ShopElement[] | null, items: { [key: string]: any }): { [key: string]: any } | null;
    // private checkPrice(price: ItemInfo, items: { [key: string]: any }): boolean;
    // private doClicks(remainingElements: ShopElement[]): void;
    // private getRequiredClicks(shopElement: ShopElement, items: { [key: string]: any }, requiredLimitedItems: { [key: string]: any }): number;
    // private hasItemCategoryChanged(prevShopStacks: string[]): boolean;
    // private hasReceivedItems(prevInventory: { [key: string]: any }, expectedItems: { [key: string]: any }): boolean;
    // private isShopOpen(): boolean;
    // private reset(): void;
    // private simulateNextPurchases(remainingElements: ShopElement[], onlySameCategory: boolean): ModuleAutoShop$PurchaseSimulationResult;
    // private switchCategory(nextCategorySlot: number): void;
}