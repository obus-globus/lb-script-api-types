import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../../../../kotlin/coroutines/Continuation.d.ts'
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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoshop/ModuleAutoShop.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoshop/ModuleAutoShop.kt:60}
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
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private buyAllItemsInCategory(remainingElements: ShopElement[], $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private buyItem(itemSlot: number, shopElement: ShopElement, $completion: Continuation<void>): any;
    // private checkElement(shopElement: ShopElement, remainingElements: ShopElement[] | null, items: JavaMap<any, any>): JavaMap<any, any> | null;
    // private checkPrice(price: ItemInfo, items: JavaMap<any, any>): boolean;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private doClicks(remainingElements: ShopElement[], $completion: Continuation<void>): any;
    // private getRequiredClicks(shopElement: ShopElement, items: JavaMap<any, any>, requiredLimitedItems: JavaMap<any, any>): number;
    // private hasItemCategoryChanged(prevShopStacks: string[]): boolean;
    // private hasReceivedItems(prevInventory: JavaMap<any, any>, expectedItems: JavaMap<any, any>): boolean;
    // private isShopOpen(): boolean;
    // private reset(): void;
    // private simulateNextPurchases(remainingElements: ShopElement[], onlySameCategory: boolean): ModuleAutoShop$PurchaseSimulationResult;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private switchCategory(nextCategorySlot: number, $completion: Continuation<void>): any;
}