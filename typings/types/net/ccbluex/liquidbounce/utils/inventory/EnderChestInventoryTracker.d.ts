import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MutableStateFlow } from '../../../../../kotlinx/coroutines/flow/MutableStateFlow.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { DisconnectEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/DisconnectEvent.d.ts'
import type { PacketEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ScreenEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/ScreenEvent.d.ts'
import type { MinecraftShortcuts } from '../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class EnderChestInventoryTracker extends Object implements EventListener, MinecraftShortcuts {
    static INSTANCE: EnderChestInventoryTracker;
    // private DEFAULT: ItemStack[];
    // private disconnectHandler: EventHook<DisconnectEvent>;
    // private flow: MutableStateFlow<ItemStack[]>;
    // private isInEnderChestScreen: boolean;
    // private packetHandler: EventHook<PacketEvent>;
    // private screenHandler: EventHook<ScreenEvent>;
    readonly stacks: ItemStack[];
    children(): EventListener[];
    parent(): EventListener | null;
    // private track(): void;
    unregister(): void;
}