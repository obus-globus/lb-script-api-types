import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SharedFlow } from '../../../../kotlinx/coroutines/flow/SharedFlow.d.ts'
import type { Event } from '../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
export class EventManagerKt extends Object {
    /**
     * Contains all classes of events. Used to create lookup tables ahead of time
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt#L151 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt:151}
     */
    static ALL_EVENT_CLASSES: Class<Event>[];
    static eventFlow<E extends Event>(): SharedFlow<E>;
}