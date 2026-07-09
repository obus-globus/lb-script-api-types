import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SharedFlow } from '../../../../kotlinx/coroutines/flow/SharedFlow.d.ts'
import type { Event } from '../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
export class EventManagerKt extends Object {
    /**
     * Contains all classes of events. Used to create lookup tables ahead of time
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/beffa1e580bb0cb76b9ba9d386521684cb421b73/src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt#L150 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt:150}
     */
    static ALL_EVENT_CLASSES: Object | null;
    static eventFlow(): SharedFlow<Event>;
}