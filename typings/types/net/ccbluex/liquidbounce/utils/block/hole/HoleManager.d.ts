import type { GpuDevice } from '../../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { PlayerPostTickEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/PlayerPostTickEvent.d.ts'
import type { MinecraftShortcuts } from '../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { MovableRegionScanner } from '../../../../../../net/ccbluex/liquidbounce/utils/block/MovableRegionScanner.d.ts'
import type { HoleManagerSubscriber } from '../../../../../../net/ccbluex/liquidbounce/utils/block/hole/HoleManagerSubscriber.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class HoleManager extends Object implements EventListener, MinecraftShortcuts {
    static INSTANCE: HoleManager;
    // private activeModules: HoleManagerSubscriber[];
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    readonly gpuDevice: GpuDevice;
    readonly interaction: MultiPlayerGameMode;
    readonly mc: Minecraft;
    // private movableRegionScanner: MovableRegionScanner;
    /*not mapped: */ getMovableRegionScanner$net_ccbluex_liquidbounce(): MovableRegionScanner;
    // private movementHandler: EventHook<PlayerPostTickEvent>;
    readonly network: ClientPacketListener;
    readonly player: LocalPlayer;
    // private playerPos: BlockPos$MutableBlockPos;
    readonly running: boolean;
    readonly world: ClientLevel;
    children(): EventListener[];
    parent(): EventListener | null;
    subscribe(subscriber: HoleManagerSubscriber): void;
    unregister(): void;
    unsubscribe(subscriber: HoleManagerSubscriber): void;
    // private updateScanRegion(newPlayerPos: BlockPos): void;
}