import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
export class EventKt extends Object {
    static EVENT_NAME_TO_CLASS: JavaMap<string, Class<Event>>;
    /**
     * Retrieves the name that the event is supposed to be associated with in JavaScript.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt#L68 | src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt:68}
     */
    static getEventName(paramarg0: Class<Event>): string;
}