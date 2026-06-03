import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { ToggleableValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { MinecraftShortcuts } from '../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { ModuleCategory } from '../../../../../net/ccbluex/liquidbounce/features/module/ModuleCategory.d.ts'
import type { InputBind } from '../../../../../net/ccbluex/liquidbounce/utils/input/InputBind.d.ts'
import type { InputBind$BindAction } from '../../../../../net/ccbluex/liquidbounce/utils/input/InputBind$BindAction.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Logger } from '../../../../../org/apache/logging/log4j/Logger.d.ts'
/**
 * A module also called 'hack' can be enabled and handle events
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt:52}
 */
export class ClientModule extends ToggleableValueGroup implements EventListener, MinecraftShortcuts {
    constructor(name: string, category: ModuleCategory, bind: number, bindAction: InputBind$BindAction, state: boolean, notActivatable: boolean, disableActivation: boolean, disableOnQuit: boolean, aliases: string[], hide: boolean)
    readonly baseKey: string;
    readonly bind: InputBind;
    // private bindValue: Value<InputBind>;
    /*not mapped: */ getBindValue$liquidbounce(): Value<InputBind>;
    // private calledSinceStartup: boolean;
    /*not mapped: */ getCalledSinceStartup$liquidbounce(): boolean;
    readonly category: ModuleCategory;
    readonly debugDisplayName: Component;
    readonly disableActivation: boolean;
    readonly disableOnQuit: boolean;
    hidden: boolean;
    // private logger: Logger;
    // private /*not mapped: */ getLogger(): Logger;
    readonly notActivatable: boolean;
    /**
     * If a module is running or not is separated from the enabled state. A module can be paused even when
     * it is enabled, or it can be running when it is not enabled.
     *
     * Note: This overwrites {@link ToggleableValueGroup} declaration of {@link running}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt#L74 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt:74}
     */
    readonly running: boolean;
    /**
     * Allows the user to access values by typing module.settings.<valuename>
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt#L112 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt:112}
     */
    readonly settings: { [key: string]: Value<Object> };
    readonly tag: string | null;
    readonly tagValue: Value<Object> | null;
    children(): EventListener[];
    /**
     * Launches an async task on {@link eventListenerScope} when module is turned on.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt#L146 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt:146}
     */
    enabledEffect(): void;
    message(key: string, args: Object[]): MutableComponent;
    onEnabledValueRegistration(value: Value<boolean>): Value<boolean>;
    /**
     * Called when the module is registered in the module manager.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt#L125 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt:125}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt#L190 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt:190}
     */
    verifyFallbackDescription(): void;
}