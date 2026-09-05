import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
export class EventKt extends Object {
    static EVENT_NAME_TO_CLASS: JavaMap<string, Class<Event>>;
    /**
     * Retrieves the name that the event is supposed to be associated with in JavaScript.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt#L68 | src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt:68}
     */
    static getEventName(paramarg0: Class<Event>): string;
}