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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/144cde7d640da47d1d98dbd04cfd7a29440805b4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt:55}
 */
export class ClientModule extends ToggleableValueGroup implements EventListener, MinecraftShortcuts {
    constructor(name: string, category: ModuleCategory, bind: number, bindAction: InputBind$BindAction, state: boolean, notActivatable: boolean, disableActivation: boolean, disableOnQuit: boolean, aliases: string[], hide: boolean)
    readonly baseKey: string;
    readonly bind: InputBind;
    // private bindValue: Value<InputBind>;
    /*not mapped: */ getBindValue$net_ccbluex_liquidbounce(): Value<InputBind>;
    // private calledSinceStartup: boolean;
    /*not mapped: */ getCalledSinceStartup$net_ccbluex_liquidbounce(): boolean;
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/144cde7d640da47d1d98dbd04cfd7a29440805b4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt#L80 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt:80}
     */
    readonly running: boolean;
    /**
     * Allows the user to access values by typing module.settings.<valuename>
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/144cde7d640da47d1d98dbd04cfd7a29440805b4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt#L115 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt:115}
     */
    readonly settings: { [key: string]: Value<Object> };
    readonly tag: string | null;
    readonly tagValue: Value<Object> | null;
    children(): EventListener[];
    /**
     * Launches an async task on {@link eventListenerScope} when module is turned on.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/144cde7d640da47d1d98dbd04cfd7a29440805b4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt#L149 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt:149}
     */
    enabledEffect(): void;
    message(key: string, args: Object[]): MutableComponent;
    onEnabledValueRegistration(value: Value<boolean>): Value<boolean>;
    /**
     * Called when the module is registered in the module manager.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/144cde7d640da47d1d98dbd04cfd7a29440805b4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt#L128 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt:128}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/144cde7d640da47d1d98dbd04cfd7a29440805b4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt#L195 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/ClientModule.kt:195}
     */
    verifyFallbackDescription(): void;
}