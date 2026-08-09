import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { Config } from '../../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { DisconnectEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/DisconnectEvent.d.ts'
import type { KeyboardKeyEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/KeyboardKeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/MouseButtonEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { ClientModule } from '../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleManager$SmartBindKeyboardState } from '../../../../../net/ccbluex/liquidbounce/features/module/ModuleManager$SmartBindKeyboardState.d.ts'
import type { ModuleManager$SmartBindMouseState } from '../../../../../net/ccbluex/liquidbounce/features/module/ModuleManager$SmartBindMouseState.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * A fairly simple module manager
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/features/module/ModuleManager.kt#L282 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/ModuleManager.kt:282}
 */
export class ModuleManager extends Object implements EventListener {
    static INSTANCE: ModuleManager;
    // private SMART_MOUSE_HOLD_THRESHOLD_MS: number;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    // private handleDisconnect: EventHook<DisconnectEvent>;
    // private handleWorldChange: EventHook<WorldChangeEvent>;
    // private keyboardKeyHandler: EventHook<KeyboardKeyEvent>;
    readonly modulesConfig: Config;
    // private mouseButtonHandler: EventHook<MouseButtonEvent>;
    readonly running: boolean;
    readonly size: number;
    getSize(): number;
    // private smartKeyboardStates: JavaMap<ClientModule, ModuleManager$SmartBindKeyboardState>;
    // private smartMouseStates: JavaMap<ClientModule, ModuleManager$SmartBindMouseState>;
    addModule(module: ClientModule): void;
    children(): EventListener[];
    clear(): void;
    contains(element: ClientModule): boolean;
    containsAll(elements: ClientModule[]): boolean;
    get(moduleName: string): ClientModule | null;
    getCategories(): string[];
    getModuleByName(module: string): ClientModule | null;
    getModules(): ClientModule[];
    isEmpty(): boolean;
    iterator(): Iterator<ClientModule>;
    parent(): EventListener | null;
    registerInbuilt(): void;
    removeModule(module: ClientModule): void;
    unregister(): void;
}