import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { ClientChatStateChange$State } from '../../../../../net/ccbluex/liquidbounce/event/events/ClientChatStateChange$State.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
export class ClientChatStateChange extends Event implements WebSocketEvent {
    constructor(state: ClientChatStateChange$State)
    readonly state: ClientChatStateChange$State;
}