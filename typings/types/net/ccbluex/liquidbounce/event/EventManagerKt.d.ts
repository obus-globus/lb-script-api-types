import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SharedFlow } from '../../../../kotlinx/coroutines/flow/SharedFlow.d.ts'
import type { Event } from '../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
export class EventManagerKt extends Object {
    /**
     * Contains all classes of events. Used to create lookup tables ahead of time
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt#L151 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt:151}
     */
    static ALL_EVENT_CLASSES: Class<Event>[];
    static eventFlow<E extends Event>(): SharedFlow<E>;
}