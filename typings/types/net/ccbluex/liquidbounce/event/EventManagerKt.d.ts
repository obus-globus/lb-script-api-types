import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SharedFlow } from '../../../../kotlinx/coroutines/flow/SharedFlow.d.ts'
import type { Event } from '../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
export class EventManagerKt extends Object {
    /**
     * Contains all classes of events. Used to create lookup tables ahead of time
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt#L150 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt:150}
     */
    static ALL_EVENT_CLASSES: Object | null;
    static eventFlow(): SharedFlow<Event>;
}