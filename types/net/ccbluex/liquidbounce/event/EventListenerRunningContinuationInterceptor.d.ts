import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractCoroutineContextElement } from '../../../../kotlin/coroutines/AbstractCoroutineContextElement.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { ContinuationInterceptor } from '../../../../kotlin/coroutines/ContinuationInterceptor.d.ts'
import type { ContinuationInterceptor$Key } from '../../../../kotlin/coroutines/ContinuationInterceptor$Key.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineContext$Element } from '../../../../kotlin/coroutines/CoroutineContext$Element.d.ts'
import type { CoroutineContext$Key } from '../../../../kotlin/coroutines/CoroutineContext$Key.d.ts'
import type { EventListener } from '../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
/**
 * Check {@link EventListener.running} on suspend.
 * If true, continue.
 * If false, cancel the job.
 *
 * This means the cancellation will not be **immediate** like {@link Thread.interrupt}.
 *
 * @param original The original {@link ContinuationInterceptor} such as a {@link CoroutineDispatcher}, because one {@link CoroutineContext} can only contain one value for a same key.
 * @author MukjepScarlet
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/event/EventListenerScope.kt#L94 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventListenerScope.kt:94}
 */
export class EventListenerRunningContinuationInterceptor extends AbstractCoroutineContextElement implements ContinuationInterceptor {
    static Key: ContinuationInterceptor$Key;
    constructor(original: ContinuationInterceptor | null, eventListener: EventListener)
    // private eventListener: EventListener;
    // private original: ContinuationInterceptor | null;
    get<E extends CoroutineContext$Element>(key: CoroutineContext$Key<E>): E | null;
    interceptContinuation(continuation: Continuation<T>): Continuation<T>;
    minusKey(key: CoroutineContext$Key<Object>): CoroutineContext;
    releaseInterceptedContinuation(continuation: Continuation<Object>): void;
}