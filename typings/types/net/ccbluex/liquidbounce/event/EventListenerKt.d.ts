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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/event/EventListener.kt#L168 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventListener.kt:168}
     */
    static computedOn<V extends unknown, E extends Event>(self: EventListener, initialValue: V, priority: number, accumulator: (param0: E, param1: V) => V): ReadWriteProperty<EventListener, V>;
    static handler<T extends Event>(self: EventListener, eventClass: Class<T>, priority: number, handler: (param0: T) => void): EventHook<T>;
    static handler<T extends Event>(self: EventListener, priority: number, handler: (param0: T) => void): EventHook<T>;
    static newEventHook<E extends Event>(self: EventListener, priority: number, handler: (param0: E) => void): EventHook<E>;
    static once<T extends Event>(self: EventListener, priority: number, handler: (param0: T) => void): EventHook<T>;
    static repeated<T extends Event>(self: EventListener, times: number, priority: number, handler: (param0: T) => void): EventHook<T>;
    static until<T extends Event>(self: EventListener, priority: number, handler: (param0: T) => boolean): EventHook<T>;
}