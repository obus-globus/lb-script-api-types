import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Function2 } from '../../../../kotlin/jvm/functions/Function2.d.ts'
import type { Function3 } from '../../../../kotlin/jvm/functions/Function3.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineDispatcher } from '../../../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { EventHook } from '../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { SuspendHandlerBehavior } from '../../../../net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.d.ts'
import type { GameTickEvent } from '../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
export class SuspendHandlersKt extends Object {
    /**
     * Registers an event hook for events of type {@link T} and launches a sequence
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlers.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlers.kt:38}
     */
    static sequenceHandler(eventListener: EventListener, priority: number, dispatcher: CoroutineDispatcher, onCancellation: () => void, eventHandler: Function3<Object, Object, Object, Object>): EventHook<Object>;
    /**
     * Start a {@link Job} on event.
     *
     * It's fully async, so modifying the {@link Event} instance makes no sense.
     *
     * @param context the coroutine context to use for the job, defaults to {@link EmptyCoroutineContext}.
     * @param priority the priority of the event hook, defaults to 0.
     * @param behavior the behavior of the event handler, defaults to {@link SuspendHandlerBehavior.Parallel}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlers.kt#L68 | src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlers.kt:68}
     */
    static suspendHandler(eventListener: EventListener, context: CoroutineContext, priority: number, behavior: SuspendHandlerBehavior, handler: Function3<Object, Object, Object, Object>): EventHook<Object>;
    /**
     * Registers a repeatable sequence which repeats the execution of code on {@link GameTickEvent}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlers.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlers.kt:54}
     */
    static tickHandler(eventListener: EventListener, dispatcher: CoroutineDispatcher, onCancellation: () => void, eventHandler: Function2<Object, Object, Object>): EventHook<GameTickEvent>;
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlers.kt#L122 | src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlers.kt:122}
     */
    static waitMatches(paramarg0: EventListener, paramarg1: Class<Object>, paramarg2: number, paramarg3: (param0: Object | null) => kotlin.Boolean, paramarg4: Continuation<Object>): Object;
    static waitMatches(paramarg0: EventListener, paramarg1: number, paramarg2: (param0: Object | null) => kotlin.Boolean, paramarg3: Continuation<Object>): Object;
// (invalid TS: name contains '-')     static waitMatchesWithTimeout-WPwdCS8(paramarg0: EventListener, paramarg1: number, paramarg2: number, paramarg3: (param0: Object | null) => kotlin.Boolean, paramarg4: Continuation<Object>): Object;
}