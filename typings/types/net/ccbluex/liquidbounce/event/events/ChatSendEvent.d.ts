import type { CancellableEvent } from '../../../../../net/ccbluex/liquidbounce/event/CancellableEvent.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
/**
 * Fires when the player sends a chat message, exposing the message text. Cancellable - cancelling stops the message from being sent.
 */
export class ChatSendEvent extends CancellableEvent implements WebSocketEvent {
    constructor(message: string)
    readonly message: string;
}