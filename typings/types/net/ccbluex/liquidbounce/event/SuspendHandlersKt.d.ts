import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Duration } from '../../../../kotlin/time/Duration.d.ts'
import type { CoroutineDispatcher } from '../../../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { Event } from '../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { EventHook } from '../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { SuspendHandlerBehavior } from '../../../../net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.d.ts'
import type { GameTickEvent } from '../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
export class SuspendHandlersKt extends Object {
    /**
     * Registers an event hook for events of type {@link T} and launches a sequence
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlers.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlers.kt:42}
     */
    static sequenceHandler<T extends Event>(self: EventListener, priority: number, dispatcher: CoroutineDispatcher | null, onCancellation: (() => void) | null, eventHandler: (param0: CoroutineScope, param1: T) => void): EventHook<T>;
    /**
     * Start a {@link Job} on event.
     *
     * It's fully async, so modifying the {@link Event} instance makes no sense.
     *
     * @param context the coroutine context to use for the job, defaults to {@link EmptyCoroutineContext}.
     * @param priority the priority of the event hook, defaults to 0.
     * @param behavior the behavior of the event handler, defaults to {@link SuspendHandlerBehavior.Parallel}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlers.kt#L78 | src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlers.kt:78}
     */
    static suspendHandler<T extends Event>(self: EventListener, context: CoroutineContext, priority: number, behavior: SuspendHandlerBehavior, handler: (param0: CoroutineScope, param1: T) => void): EventHook<T>;
    /**
     * Registers a repeatable sequence which repeats the execution of code on {@link GameTickEvent}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlers.kt#L58 | src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlers.kt:58}
     */
    static tickHandler(self: EventListener, dispatcher: CoroutineDispatcher | null, onCancellation: (() => void) | null, eventHandler: (param0: CoroutineScope) => void): EventHook<GameTickEvent>;
    /**
     * Wait an event of type {@link T} which matches given {@link predicate}.
     *
     * The continuation resumes on the event handler thread. For example:
     * - {@link net.ccbluex.liquidbounce.event.events.PacketEvent}: client Netty IO (EventLoopGroup)
     * - {@link net.ccbluex.liquidbounce.event.events.GameTickEvent}: client render thread
     *
     * @param priority The priority of the event hook.
     * @param predicate The predicate to match the event. If it throws a {@link Throwable}, the continuation will be resumed with {@link Result.failure}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlers.kt#L136 | src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlers.kt:136}
     */
    static waitMatches<T extends Event>(self: EventListener, eventClass: Class<T>, priority: number, predicate: (param0: T) => boolean): T;
    static waitMatches<T extends Event>(self: EventListener, priority: number, predicate: (param0: T) => boolean): T;
// (invalid TS: name contains '-')     static waitMatchesWithTimeout-WPwdCS8<T extends Event>(self: EventListener, timeout: Duration, priority: number, predicate: (param0: T) => boolean): T | null;
}