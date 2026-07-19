import type { GpuDevice } from '../../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { Value } from '../../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { Mode } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { EventListener } from '../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { Toggleable } from '../../../../../../net/ccbluex/liquidbounce/features/misc/Toggleable.d.ts'
import type { MinecraftShortcuts } from '../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * A {@link ToggleableValueGroup} has a state that can be toggled on and off. It also allows you
 * to register event handlers that are only active when the state is on,
 * it also features {@link onEnabled} and {@link onDisabled} which are called when the state is toggled.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.kt:39}
 */
export abstract class ToggleableValueGroup extends ValueGroup implements EventListener, Toggleable, MinecraftShortcuts {
    constructor(parent: EventListener | null, name: string, enabled: boolean, aliases: string[])
    readonly debugDisplayName: Component;
    enabled: boolean;
    readonly enabledValue: Value<boolean>;
    readonly gpuDevice: GpuDevice;
    readonly interaction: MultiPlayerGameMode;
    readonly mc: Minecraft;
    readonly network: ClientPacketListener;
    getParent(): EventListener | null;
    readonly player: LocalPlayer;
    /**
     * Because we pass the parent to the Listenable, we can simply
     * call the super.handleEvents() and it will return false if the upper-listenable is disabled.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.kt#L93 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.kt:93}
     */
    readonly running: boolean;
    readonly world: ClientLevel;
    children(): EventListener[];
    protected choices<T extends Mode>(name: string, active: T, choices: T[]): ModeValueGroup<T>;
    protected choices<T extends Mode>(name: string, activeIndex: number, choicesCallback: (param0: ModeValueGroup<T>) => T[]): ModeValueGroup<T>;
    onDisabled(): void;
    onEnabled(): void;
    onEnabledValueRegistration(value: Value<boolean>): Value<boolean>;
    onToggled(state: boolean): boolean;
    onToggled(state: boolean, isParentUpdate: boolean): boolean;
    parent(): EventListener | null;
    unregister(): void;
}