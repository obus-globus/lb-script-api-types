import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SharedFlow } from '../../../../kotlinx/coroutines/flow/SharedFlow.d.ts'
export class EventManagerKt extends Object {
    /**
     * Contains all classes of events. Used to create lookup tables ahead of time
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt#L147 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventManager.kt:147}
     */
    static ALL_EVENT_CLASSES: Object | null;
    static eventFlow(): SharedFlow<Object>;
}