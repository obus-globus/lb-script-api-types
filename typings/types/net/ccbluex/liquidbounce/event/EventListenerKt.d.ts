import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ReadWriteProperty } from '../../../../kotlin/properties/ReadWriteProperty.d.ts'
import type { EventHook } from '../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
export class EventListenerKt extends Object {
    /**
     * Returns computed {@link ReadWriteProperty} based on the {@link accumulator} of specific event.
     *
     * The value of property will be updated on event received with {@link accumulator}.
     *
     * Example:
     * ```kotlin
     * var ticksSinceEnabled by computedOn<GameTickEvent, Int>(0) { _, prev -> prev + 1 }
     *
     * fun enabled() { ticksSinceEnabled = 0 }
     * ```
     *
     * @since 0.30.1
     * @author MukjepScarlet
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/event/EventListener.kt#L136 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventListener.kt:136}
     */
    static computedOn(eventListener: EventListener, initialValue: Object | null, priority: number, accumulator: (param0: Object | null, param1: Object | null) => Object | null): ReadWriteProperty<EventListener, Object>;
    static handler(eventListener: EventListener, eventClass: Class<Object>, priority: number, handler: (param0: Object | null) => void): EventHook<Object>;
    static handler(eventListener: EventListener, priority: number, handler: (param0: Object | null) => void): EventHook<Object>;
    static newEventHook(eventListener: EventListener, priority: number, handler: (param0: Object | null) => void): EventHook<Object>;
    static once(eventListener: EventListener, priority: number, handler: (param0: Object | null) => void): EventHook<Object>;
    static repeated(eventListener: EventListener, times: number, priority: number, handler: (param0: Object | null) => void): EventHook<Object>;
    static until(eventListener: EventListener, priority: number, handler: (param0: Object | null) => boolean): EventHook<Object>;
}