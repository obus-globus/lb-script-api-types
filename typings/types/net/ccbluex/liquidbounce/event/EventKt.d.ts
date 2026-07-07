import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
export class EventKt extends Object {
    static EVENT_NAME_TO_CLASS: { [key: string]: Class<Event> };
    /**
     * Retrieves the name that the event is supposed to be associated with in JavaScript.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt#L68 | src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt:68}
     */
    static getEventName(paramarg0: Class<Event>): string;
}