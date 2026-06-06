import type { CancellationException } from '../../../../java/util/concurrent/CancellationException.d.ts'
import type { EventListener } from '../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
/**
 * Occurs when the running {@link Job} is canceled because {@link EventListener.running} is false
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/event/EventListenerScope.kt#L88 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventListenerScope.kt:88}
 */
export class EventListenerNotListeningException extends CancellationException {
    constructor(eventListener: EventListener)
    readonly eventListener: EventListener;
}