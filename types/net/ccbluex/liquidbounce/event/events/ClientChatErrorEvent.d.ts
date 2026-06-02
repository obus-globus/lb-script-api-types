import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
export class ClientChatErrorEvent extends Event implements WebSocketEvent {
    constructor(error: string)
    readonly error: string;
}