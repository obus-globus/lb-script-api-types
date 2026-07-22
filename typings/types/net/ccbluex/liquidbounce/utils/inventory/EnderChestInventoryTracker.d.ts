import type { GpuDevice } from '../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MutableStateFlow } from '../../../../../kotlinx/coroutines/flow/MutableStateFlow.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { DisconnectEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/DisconnectEvent.d.ts'
import type { PacketEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ScreenEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/ScreenEvent.d.ts'
import type { MinecraftShortcuts } from '../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class EnderChestInventoryTracker extends Object implements EventListener, MinecraftShortcuts {
    static INSTANCE: EnderChestInventoryTracker;
    // private DEFAULT: ItemStack[];
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    // private disconnectHandler: EventHook<DisconnectEvent>;
    // private flow: MutableStateFlow<ItemStack[]>;
    readonly gpuDevice: GpuDevice;
    readonly interaction: MultiPlayerGameMode;
    // private isInEnderChestScreen: boolean;
    readonly mc: Minecraft;
    readonly network: ClientPacketListener;
    // private packetHandler: EventHook<PacketEvent>;
    readonly player: LocalPlayer;
    readonly running: boolean;
    // private screenHandler: EventHook<ScreenEvent>;
    readonly stacks: ItemStack[];
    readonly world: ClientLevel;
    children(): EventListener[];
    parent(): EventListener | null;
    // private track(): void;
    unregister(): void;
}