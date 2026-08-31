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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt#L287 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt:287}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt#L339 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt:339}
     */
    callEvent<T extends Event>(event: T): T;
    /**
     * Gets a {@link SharedFlow} for the given event class.
     * The flow receives the event instances after all {@link EventHook}s are executed.
     * So the {@link Event.isCompleted} will be true when the event is emitted.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt#L385 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt:385}
     */
    eventFlow<T extends Event>(eventClass: Class<T>): SharedFlow<T>;
    /**
     * Used by handler methods
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt#L302 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt:302}
     */
    registerEventHook<T extends Event>(eventClass: Class<Event>, eventHook: EventHook<T>): EventHook<T>;
    unregisterAll(): void;
    unregisterEventHandler(eventListener: EventListener): void;
    /**
     * Unregisters a handler.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt#L317 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt:317}
     */
    unregisterEventHook<T extends Event>(eventClass: Class<Event>, eventHook: EventHook<T>): void;
}