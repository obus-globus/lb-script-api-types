import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ModuleAutoShop } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/ModuleAutoShop.d.ts'
import type { Component } from '../../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ItemStack } from '../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class AutoShopInventoryManager extends Object implements EventListener {
    static INSTANCE: AutoShopInventoryManager;
    // private currentInventoryItems: { [key: string]: any };
    readonly debugDisplayName: Component;
    readonly inventoryItems: ItemStack[];
    // private onTick: EventHook<GameTickEvent>;
    // private pendingItems: { [key: string]: any };
    // private prevInventoryItems: { [key: string]: any };
    readonly running: boolean;
    addPendingItems(items: { [key: string]: any }): void;
    children(): EventListener[];
    clearPendingItems(): void;
    getInventoryItems(): { [key: string]: any };
    parent(): EventListener | null;
    parent(): ModuleAutoShop;
    unregister(): void;
    // private update(newItems: { [key: string]: any }): void;
    // private updatePendingItems(): void;
}