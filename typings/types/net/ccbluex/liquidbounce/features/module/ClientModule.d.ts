import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { GpuDevice } from '../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
import type { Value } from '../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { ToggleableValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { MinecraftShortcuts } from '../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { ModuleCategory } from '../../../../../net/ccbluex/liquidbounce/features/module/ModuleCategory.d.ts'
import type { InputBind } from '../../../../../net/ccbluex/liquidbounce/utils/input/InputBind.d.ts'
import type { InputBind$BindAction } from '../../../../../net/ccbluex/liquidbounce/utils/input/InputBind$BindAction.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Logger } from '../../../../../org/apache/logging/log4j/Logger.d.ts'
/**
 * A module also called 'hack' can be enabled and handle events
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt:55}
 */
export class ClientModule extends ToggleableValueGroup implements EventListener, MinecraftShortcuts {
    constructor(name: string, category: ModuleCategory, bind: number, bindAction: InputBind$BindAction, state: boolean, notActivatable: boolean, disableActivation: boolean, disableOnQuit: boolean, aliases: string[], hide: boolean)
    readonly baseKey: string;
    readonly bind: InputBind;
    getBind(): InputBind;
    // private bindValue: Value<InputBind>;
    /*not mapped: */ getBindValue$net_ccbluex_liquidbounce(): Value<InputBind>;
    // private calledSinceStartup: boolean;
    /*not mapped: */ getCalledSinceStartup$net_ccbluex_liquidbounce(): boolean;
    readonly category: ModuleCategory;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    readonly disableActivation: boolean;
    readonly disableOnQuit: boolean;
    readonly gpuDevice: GpuDevice;
    hidden: boolean;
    readonly interaction: MultiPlayerGameMode;
    // private logger: Logger;
    // private /*not mapped: */ getLogger(): Logger;
    readonly mc: Minecraft;
    readonly network: ClientPacketListener;
    readonly notActivatable: boolean;
    readonly player: LocalPlayer;
    /**
     * If a module is running or not is separated from the enabled state. A module can be paused even when
     * it is enabled, or it can be running when it is not enabled.
     *
     * Note: This overwrites {@link ToggleableValueGroup} declaration of {@link running}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt#L83 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt:83}
     */
    readonly running: boolean;
    /**
     * Allows the user to access values by typing module.settings.<valuename>
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt#L118 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt:118}
     */
    readonly settings: JavaMap<string, Value<Object>>;
    readonly tag: string | null;
    readonly tagValue: Value<Object> | null;
    readonly world: ClientLevel;
    children(): EventListener[];
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    enabledEffect($completion: Continuation<void>): any;
    message(key: string, ...args: Object[]): MutableComponent;
    onEnabledValueRegistration(value: Value<boolean>): Value<boolean>;
    /**
     * Called when the module is registered in the module manager.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt#L131 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt:131}
     */
    onRegistration(): void;
    onToggled(state: boolean): boolean;
    onToggled(state: boolean, isParentUpdate: boolean): boolean;
    parent(): EventListener | null;
    tagBy(setting: Value<Object>): void;
    toString(): string;
    unregister(): void;
    /**
     * Warns when no module description is set in the main translation file.
     *
     * Requires that {@link ValueGroup.walkKeyPath} has previously been run.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt#L198 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt:198}
     */
    verifyFallbackDescription(): void;
}