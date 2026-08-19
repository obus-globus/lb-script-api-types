import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameTickEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ScreenEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/ScreenEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { InventoryAction$Chain } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryAction$Chain.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * Manages the inventory state and timings and schedules inventory actions
 *
 * TODO:
 *  - Progress Bar
 *  - Off-screen actions
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryManager.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryManager.kt:61}
 */
export class InventoryManager extends Object implements EventListener {
    static INSTANCE: InventoryManager;
    /**
     * Called when a click occurs. Can be tracked by listening for {@link ServerboundContainerClickPacket}
     *
     * @see net.ccbluex.liquidbounce.injection.mixins.viaversion.MixinPacketWrapper
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryManager.kt#L230 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryManager.kt:230}
     */
    static onClickOccurs(): void;
    /**
     * Called when the inventory was opened. Can be tracked by listening for {@link ClientboundOpenScreenPacket}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryManager.kt#L239 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryManager.kt:239}
     */
    static onInventoryOpened(): void;
    // private COMPARATOR_ACTION_CHAIN: (param0: InventoryAction$Chain, param1: InventoryAction$Chain) => number;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    // private handleWorldChange: EventHook<WorldChangeEvent>;
    /*not mapped: */ isHandledScreenOpen(): boolean;
    /*not mapped: */ isInventoryOpen(): boolean;
    // private isInventoryOpenServerSide: boolean;
    /*not mapped: */ isInventoryOpenServerSide(): boolean;
    lastClickedSlot: number;
    // private packetHandler: EventHook<PacketEvent>;
    // private recentInventoryOpen: boolean;
    // private repeatingSchedulerExecutor: EventHook<GameTickEvent>;
    // private requiresUpdate: boolean;
    readonly running: boolean;
    // private screenHandler: EventHook<ScreenEvent>;
    children(): EventListener[];
    onClickOccurs(): void;
    onInventoryOpened(): void;
    parent(): EventListener | null;
    unregister(): void;
}