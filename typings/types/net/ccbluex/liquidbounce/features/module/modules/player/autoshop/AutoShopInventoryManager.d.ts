import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ModuleAutoShop } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/ModuleAutoShop.d.ts'
import type { Component } from '../../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ItemStack } from '../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class AutoShopInventoryManager extends Object implements EventListener {
    static INSTANCE: AutoShopInventoryManager;
    // private currentInventoryItems: JavaMap<any, any>;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    readonly inventoryItems: ItemStack[];
    // private onTick: EventHook<GameTickEvent>;
    // private pendingItems: JavaMap<any, any>;
    // private prevInventoryItems: JavaMap<any, any>;
    readonly running: boolean;
    addPendingItems(items: JavaMap<any, any>): void;
    children(): EventListener[];
    clearPendingItems(): void;
    getInventoryItems(): JavaMap<any, any>;
    parent(): EventListener | null;
    parent(): ModuleAutoShop;
    unregister(): void;
    // private update(newItems: JavaMap<any, any>): void;
    // private updatePendingItems(): void;
}