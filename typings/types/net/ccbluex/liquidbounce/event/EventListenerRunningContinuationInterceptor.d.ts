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
 * @param original @author MukjepScarlet
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/event/EventListenerScope.kt#L106 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventListenerScope.kt:106}
 */
export class EventListenerRunningContinuationInterceptor extends AbstractCoroutineContextElement implements ContinuationInterceptor {
    static Key: ContinuationInterceptor$Key;
    constructor(original: ContinuationInterceptor | null, eventListener: EventListener)
    // private eventListener: EventListener;
    // private original: ContinuationInterceptor | null;
    get<E extends CoroutineContext$Element>(key: CoroutineContext$Key<E>): E | null;
    interceptContinuation<T extends unknown>(continuation: Continuation<T>): Continuation<T>;
    minusKey(key: CoroutineContext$Key<any>): CoroutineContext;
    releaseInterceptedContinuation(continuation: Continuation<Object>): void;
}