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
/**
 * A fairly simple module manager
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/ModuleManager.kt#L274 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/ModuleManager.kt:274}
 */
export class ModuleManager extends Object implements EventListener {
    static INSTANCE: ModuleManager;
    // private SMART_MOUSE_HOLD_THRESHOLD_MS: number;
    // private handleDisconnect: EventHook<DisconnectEvent>;
    // private handleWorldChange: EventHook<WorldChangeEvent>;
    // private keyboardKeyHandler: EventHook<KeyboardKeyEvent>;
    readonly modulesConfig: Config;
    // private mouseButtonHandler: EventHook<MouseButtonEvent>;
    readonly size: number;
    // private smartKeyboardStates: Map<ClientModule, ModuleManager$SmartBindKeyboardState>;
    // private smartMouseStates: Map<ClientModule, ModuleManager$SmartBindMouseState>;
    addModule(module: ClientModule): void;
    children(): EventListener[];
    clear(): void;
    contains(element: ClientModule): boolean;
    containsAll(elements: E[]): boolean;
    get(moduleName: string): ClientModule | null;
    /**
     * This is being used by UltralightJS for the implementation of the ClickGUI. DO NOT REMOVE!
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/ModuleManager.kt#L732 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/ModuleManager.kt:732}
     */
    getCategories(): string[];
    getModuleByName(module: string): ClientModule | null;
    getModules(): E[];
    isEmpty(): boolean;
    iterator(): Iterator<ClientModule>;
    parent(): EventListener | null;
    /**
     * Register inbuilt client modules
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/ModuleManager.kt#L451 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/ModuleManager.kt:451}
     */
    registerInbuilt(): void;
    removeModule(module: ClientModule): void;
    unregister(): void;
}