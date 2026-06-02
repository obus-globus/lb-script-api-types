import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EventKt extends Object {
    static EVENT_NAME_TO_CLASS: { [key: string]: Object | null };
    /**
     * Retrieves the name that the event is supposed to be associated with in JavaScript.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt#L65 | src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt:65}
     */
    static getEventName(paramarg0: Class<Object>): string;
}