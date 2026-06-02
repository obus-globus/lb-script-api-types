import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../kotlin/jvm/functions/Function1.d.ts'
import type { Function2 } from '../../../../kotlin/jvm/functions/Function2.d.ts'
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
    static computedOn(paramarg0: EventListener, paramarg1: Object | null, paramarg2: number, paramarg3: Function2<Object, Object, Object>): ReadWriteProperty<EventListener, Object>;
    static handler(paramarg0: EventListener, paramarg1: Class<Object>, paramarg2: number, paramarg3: (param0: Object | null) => void): EventHook<Object>;
    static handler(paramarg0: EventListener, paramarg1: number, paramarg2: (param0: Object | null) => void): EventHook<Object>;
    static newEventHook(paramarg0: EventListener, paramarg1: number, paramarg2: (param0: Object | null) => void): EventHook<Object>;
    static once(paramarg0: EventListener, paramarg1: number, paramarg2: Function1<Object, void>): EventHook<Object>;
    static repeated(paramarg0: EventListener, paramarg1: number, paramarg2: number, paramarg3: Function1<Object, void>): EventHook<Object>;
    static until(paramarg0: EventListener, paramarg1: number, paramarg2: Function1<Object, boolean>): EventHook<Object>;
}