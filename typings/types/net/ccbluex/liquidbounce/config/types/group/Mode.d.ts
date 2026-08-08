import type { GpuDevice } from '../../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { ToIntFunction } from '../../../../../../java/util/function/ToIntFunction.d.ts'
import type { ModeValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { Tagged } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventListener } from '../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { MinecraftShortcuts } from '../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export abstract class Mode extends ValueGroup implements Tagged, EventListener, MinecraftShortcuts {
    static Companion: Tagged$Companion;
    constructor(name: string, aliases: string[])
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    readonly gpuDevice: GpuDevice;
    readonly interaction: MultiPlayerGameMode;
    /*not mapped: */ isSelected$net_ccbluex_liquidbounce(): boolean;
    readonly mc: Minecraft;
    readonly network: ClientPacketListener;
    getParent(): ModeValueGroup<any>;
    readonly player: LocalPlayer;
    /**
     * We check if the parent is active and if the mode is active, if so
     * we handle the events.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.kt#L132 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.kt:132}
     */
    readonly running: boolean;
    readonly tag: string;
    readonly tagAliases: string[];
    readonly world: ClientLevel;
    children(): EventListener[];
    disable(): void;
    enable(): void;
    modes<T extends Mode>(eventListener: EventListener | null, name: string, activeCallback: (param0: T[]) => number, modesCallback: (param0: ModeValueGroup<T>) => T[]): ModeValueGroup<T>;
    parent(): EventListener | null;
    unregister(): void;
}