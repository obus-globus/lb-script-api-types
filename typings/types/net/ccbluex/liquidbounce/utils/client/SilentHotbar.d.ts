import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameTickEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { SilentHotbarState } from '../../../../../net/ccbluex/liquidbounce/utils/client/SilentHotbarState.d.ts'
import type { HotbarItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * Manages things like {@link ModuleScaffold}'s silent mode.
 * Not thread safe, please only use this on the main-thread of minecraft
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/SilentHotbar.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/SilentHotbar.kt:37}
 */
export class SilentHotbar extends Object implements EventListener {
    static INSTANCE: SilentHotbar;
    readonly clientsideSlot: number;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    // private hotbarState: SilentHotbarState | null;
    readonly running: boolean;
    /**
     * Returns the slot that interactions would take place with
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/SilentHotbar.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/SilentHotbar.kt:45}
     */
    readonly serversideSlot: number;
    // private tickHandler: EventHook<GameTickEvent>;
    // private ticksSinceLastUpdate: number;
    // private worldChangeHandler: EventHook<WorldChangeEvent>;
    children(): EventListener[];
    isSlotModified(): boolean;
    /**
     * Returns if the slot is currently getting modified by a given requester
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/SilentHotbar.kt#L91 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/SilentHotbar.kt:91}
     */
    isSlotModifiedBy(requester: Object | null): boolean;
    parent(): EventListener | null;
    resetSlot(requester: Object | null): void;
    /**
     * Silently selects a main-hand hotbar slot for duration of {@link ticksUntilReset}.
     * Offhand is ignored because it is not selected through held-item changes.
     *
     * @returns `true` when the slot is selected or no selection is required, `false` when the request is cancelled
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/SilentHotbar.kt#L57 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/SilentHotbar.kt:57}
     */
    selectSlotSilently(requester: Object | null, slot: number, ticksUntilReset: number): boolean;
    selectSlotSilently(requester: Object | null, slot: HotbarItemSlot, ticksUntilReset: number): boolean;
    unregister(): void;
}