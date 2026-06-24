import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
export class EventKt extends Object {
    static EVENT_NAME_TO_CLASS: { [key: string]: Class<Event> };
    /**
     * Retrieves the name that the event is supposed to be associated with in JavaScript.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt#L65 | src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt:65}
     */
    static getEventName(paramarg0: Class<Event>): string;
}