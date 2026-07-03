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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0a21163cac7d7e3736ae038e79bf85f09f24d875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/ModuleManager.kt#L280 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/ModuleManager.kt:280}
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