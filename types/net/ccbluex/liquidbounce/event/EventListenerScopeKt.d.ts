import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ContinuationInterceptor } from '../../../../kotlin/coroutines/ContinuationInterceptor.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { EventListener } from '../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
export class EventListenerScopeKt extends Object {
    /**
     * Get the related {@link CoroutineScope} of receiver {@link EventListener}.
     *
     * All tasks will check {@link EventListener.running} on suspend.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/event/EventListenerScope.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventListenerScope.kt:45}
     */
    static getEventListenerScope(paramarg0: EventListener): CoroutineScope;
    /**
     * Remove cached scope and cancel it.
     *
     * Remember to do this!
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/event/EventListenerScope.kt#L69 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventListenerScope.kt:69}
     */
    static removeEventListenerScope(paramarg0: EventListener): void;
    /**
     * Wrap the {@link original} interceptor and make it auto-detect
     * the listener's running state at suspension
     * to determine whether to resume the continuation.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/event/EventListenerScope.kt#L78 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventListenerScope.kt:78}
     */
    static wrapContinuationInterceptor(paramarg0: EventListener, paramarg1: ContinuationInterceptor): ContinuationInterceptor;
}