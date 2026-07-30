import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
export class EventKt extends Object {
    static EVENT_NAME_TO_CLASS: JavaMap<string, Class<Event>>;
    /**
     * Retrieves the name that the event is supposed to be associated with in JavaScript.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt#L68 | src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt:68}
     */
    static getEventName(paramarg0: Class<Event>): string;
}