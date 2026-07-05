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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/event/EventListenerScope.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventListenerScope.kt:50}
     */
    static getEventListenerScope(paramarg0: EventListener): CoroutineScope;
    /**
     * Remove cached scope and cancel it.
     *
     * Remember to do this!
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/event/EventListenerScope.kt#L74 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventListenerScope.kt:74}
     */
    static removeEventListenerScope(eventListener: EventListener): void;
    /**
     * Wrap the {@link original} interceptor and make it auto-detect
     * the listener's running state at suspension
     * to determine whether to resume the continuation.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/event/EventListenerScope.kt#L83 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventListenerScope.kt:83}
     */
    static wrapContinuationInterceptor(eventListener: EventListener, original: ContinuationInterceptor): ContinuationInterceptor;
}