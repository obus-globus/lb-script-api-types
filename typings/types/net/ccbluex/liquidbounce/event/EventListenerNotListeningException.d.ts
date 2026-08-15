import type { CancellationException } from '../../../../java/util/concurrent/CancellationException.d.ts'
import type { EventListener } from '../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
/**
 * Occurs when the running {@link Job} is canceled because {@link EventListener.running} is false
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/event/EventListenerScope.kt#L91 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventListenerScope.kt:91}
 */
export class EventListenerNotListeningException extends CancellationException {
    constructor(eventListener: EventListener)
    readonly eventListener: EventListener;
}