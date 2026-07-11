import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameTickEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { SilentHotbarState } from '../../../../../net/ccbluex/liquidbounce/utils/client/SilentHotbarState.d.ts'
import type { HotbarItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
/**
 * Manages things like {@link ModuleScaffold}'s silent mode.
 * Not thread safe, please only use this on the main-thread of minecraft
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/SilentHotbar.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/SilentHotbar.kt:34}
 */
export class SilentHotbar extends Object implements EventListener {
    static INSTANCE: SilentHotbar;
    readonly clientsideSlot: number;
    // private hotbarState: SilentHotbarState | null;
    /**
     * Returns the slot that interactions would take place with
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/SilentHotbar.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/SilentHotbar.kt:42}
     */
    readonly serversideSlot: number;
    // private tickHandler: EventHook<GameTickEvent>;
    // private ticksSinceLastUpdate: number;
    children(): EventListener[];
    isSlotModified(): boolean;
    /**
     * Returns if the slot is currently getting modified by a given requester
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/SilentHotbar.kt#L79 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/SilentHotbar.kt:79}
     */
    isSlotModifiedBy(requester: Object | null): boolean;
    parent(): EventListener | null;
    resetSlot(requester: Object | null): void;
    /**
     * Silently selects a main-hand hotbar slot for duration of {@link ticksUntilReset}.
     * Offhand is ignored because it is not selected through held-item changes.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/SilentHotbar.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/SilentHotbar.kt:52}
     */
    selectSlotSilently(requester: Object | null, slot: number, ticksUntilReset: number): void;
    selectSlotSilently(requester: Object | null, slot: HotbarItemSlot, ticksUntilReset: number): void;
    unregister(): void;
}