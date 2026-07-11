import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameTickEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ScheduleInventoryActionEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/ScheduleInventoryActionEvent.d.ts'
import type { HotbarItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { InventoryAction } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryAction.d.ts'
import type { InventoryConstraints } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryConstraints.d.ts'
import type { ItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
/**
 * Reusable anchored hotbar swap state machine:
 * - keep the first swap as restore anchor
 * - swap selected inventory items into one fixed hotbar slot
 * - restore anchor after no active switching for {@link swapDelayProvider} ticks
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/AnchoredHotbarSwapController.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/AnchoredHotbarSwapController.kt:33}
 */
export class AnchoredHotbarSwapController extends Object implements EventListener {
    constructor(owner: EventListener, inventoryConstraints: InventoryConstraints, swapDelayProvider: () => number, anchorHotbarSlotResolver: () => HotbarItemSlot)
    // private anchorHotbarSlot: HotbarItemSlot | null;
    // private anchorHotbarSlotResolver: () => HotbarItemSlot;
    // private anchorSwapAction: InventoryAction | null;
    // private inventoryConstraints: InventoryConstraints;
    // private inventorySwapHandler: EventHook<ScheduleInventoryActionEvent>;
    // private lastSwitchScheduledEvent: ScheduleInventoryActionEvent | null;
    // private owner: EventListener;
    // private pendingRestore: boolean;
    // private requestedSourceSlot: ItemSlot | null;
    // private restoreDue: boolean;
    // private restoreHandler: EventHook<ScheduleInventoryActionEvent>;
    // private swapDelayProvider: () => number;
    // private tickHandler: EventHook<GameTickEvent>;
    // private waitingTicks: number;
    children(): EventListener[];
    /**
     * Clear a pending swap request when no inventory swap is needed this tick.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/AnchoredHotbarSwapController.kt#L65 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/AnchoredHotbarSwapController.kt:65}
     */
    clearRequestedSwap(): void;
    parent(): EventListener | null;
    parent(): EventListener;
    /**
     * Request swapping {@link sourceSlot} into the anchored hotbar slot on next inventory scheduling pass.
     *
     * Call this whenever the desired item is currently in inventory (not hotbar).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/AnchoredHotbarSwapController.kt#L57 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/AnchoredHotbarSwapController.kt:57}
     */
    requestSwapFromInventory(sourceSlot: ItemSlot): void;
    /**
     * Drop all controller state immediately without restoring.
     *
     * Intended for module/feature disable paths.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/AnchoredHotbarSwapController.kt#L85 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/AnchoredHotbarSwapController.kt:85}
     */
    reset(): void;
    /**
     * Mark switching as still active, delaying restore countdown.
     *
     * Call this while your module is actively using the temporarily swapped item.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/AnchoredHotbarSwapController.kt#L74 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/AnchoredHotbarSwapController.kt:74}
     */
    touchActiveSwitching(): void;
    unregister(): void;
}