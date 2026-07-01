import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ReadWriteProperty } from '../../../../kotlin/properties/ReadWriteProperty.d.ts'
import type { Event } from '../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
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
     * @author MukjepScarlet
     *
     * @since 0.30.1
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/event/EventListener.kt#L151 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventListener.kt:151}
     */
    static computedOn(eventListener: EventListener, initialValue: Object | null, priority: number, accumulator: (param0: Object, param1: Object) => Object | null): ReadWriteProperty<EventListener, Object>;
    static handler(eventListener: EventListener, eventClass: Class<Event>, priority: number, handler: (param0: Event | null) => void): EventHook<Event>;
    static handler(eventListener: EventListener, priority: number, handler: (param0: Event | null) => void): EventHook<Event>;
    static newEventHook(eventListener: EventListener, priority: number, handler: (param0: Event | null) => void): EventHook<Event>;
    static once(eventListener: EventListener, priority: number, handler: (param0: Object) => void): EventHook<Event>;
    static repeated(eventListener: EventListener, times: number, priority: number, handler: (param0: Object) => void): EventHook<Event>;
    static until(eventListener: EventListener, priority: number, handler: (param0: Object) => boolean): EventHook<Event>;
}