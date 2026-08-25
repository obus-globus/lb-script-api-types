import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MutableSharedFlow } from '../../../../kotlinx/coroutines/flow/MutableSharedFlow.d.ts'
import type { SharedFlow } from '../../../../kotlinx/coroutines/flow/SharedFlow.d.ts'
import type { Event } from '../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { EventHook } from '../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventHookRegistry } from '../../../../net/ccbluex/liquidbounce/event/EventHookRegistry.d.ts'
import type { EventListener } from '../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
/**
 * A modern and fast event handler using lambda handlers
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt#L285 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt:285}
 */
export class EventManager extends Object {
    static INSTANCE: EventManager;
    // private flows: JavaMap<Class<Event>, MutableSharedFlow<Event>>;
    // private registry: JavaMap<Class<Event>, EventHookRegistry<Event>>;
    /**
     * Call event to listeners
     *
     * @param event to call
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt#L337 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt:337}
     */
    callEvent<T extends Event>(event: T): T;
    /**
     * Gets a {@link SharedFlow} for the given event class.
     * The flow receives the event instances after all {@link EventHook}s are executed.
     * So the {@link Event.isCompleted} will be true when the event is emitted.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt#L383 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt:383}
     */
    eventFlow<T extends Event>(eventClass: Class<T>): SharedFlow<T>;
    /**
     * Used by handler methods
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt#L300 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt:300}
     */
    registerEventHook<T extends Event>(eventClass: Class<Event>, eventHook: EventHook<T>): EventHook<T>;
    unregisterAll(): void;
    unregisterEventHandler(eventListener: EventListener): void;
    /**
     * Unregisters a handler.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt#L315 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt:315}
     */
    unregisterEventHook<T extends Event>(eventClass: Class<Event>, eventHook: EventHook<T>): void;
}