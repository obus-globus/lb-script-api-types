import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
/**
 * Fires when the user logs out of their account.
 */
export class UserLoggedOutEvent extends Event implements WebSocketEvent {
    static INSTANCE: UserLoggedOutEvent;
}