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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt#L281 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt:281}
 */
export class EventManager extends Object {
    static INSTANCE: EventManager;
    // private flows: Map<Class<Event>, MutableSharedFlow<Event>>;
    // private registry: Map<Class<Event>, EventHookRegistry<Event>>;
    /**
     * Call event to listeners
     *
     * @param event to call
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt#L333 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt:333}
     */
    callEvent<T extends Event>(event: T): T;
    /**
     * Gets a {@link SharedFlow} for the given event class.
     * The flow receives the event instances after all {@link EventHook}s are executed.
     * So the {@link Event.isCompleted} will be true when the event is emitted.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt#L379 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt:379}
     */
    eventFlow<T extends Event>(eventClass: Class<T>): SharedFlow<T>;
    /**
     * Used by handler methods
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt#L296 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt:296}
     */
    registerEventHook<T extends Event>(eventClass: Class<Event>, eventHook: EventHook<T>): EventHook<T>;
    unregisterAll(): void;
    unregisterEventHandler(eventListener: EventListener): void;
    /**
     * Unregisters a handler.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt#L311 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt:311}
     */
    unregisterEventHook<T extends Event>(eventClass: Class<Event>, eventHook: EventHook<T>): void;
}