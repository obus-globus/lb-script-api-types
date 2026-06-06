import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ModuleAutoShop } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/ModuleAutoShop.d.ts'
import type { ItemStack } from '../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class AutoShopInventoryManager extends Object implements EventListener {
    static INSTANCE: AutoShopInventoryManager;
    // private currentInventoryItems: Object2IntOpenHashMap<string>;
    readonly inventoryItems: ItemStack[];
    // private onTick: EventHook<GameTickEvent>;
    // private pendingItems: Object2IntOpenHashMap<string>;
    // private prevInventoryItems: Object2IntOpenHashMap<string>;
    addPendingItems(items: Object2IntMap<string>): void;
    children(): EventListener[];
    clearPendingItems(): void;
    getInventoryItems(): Object2IntMap<string>;
    parent(): EventListener | null;
    parent(): ModuleAutoShop;
    unregister(): void;
    // private update(newItems: Object2IntMap<string>): void;
    // private updatePendingItems(): void;
}