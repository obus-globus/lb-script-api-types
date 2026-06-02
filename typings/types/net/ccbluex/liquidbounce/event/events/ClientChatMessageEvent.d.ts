import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { ClientChatMessageEvent$ChatGroup } from '../../../../../net/ccbluex/liquidbounce/event/events/ClientChatMessageEvent$ChatGroup.d.ts'
import type { AxoUser } from '../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxoUser.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
export class ClientChatMessageEvent extends Event implements WebSocketEvent {
    constructor(user: AxoUser, message: string, chatGroup: ClientChatMessageEvent$ChatGroup)
    readonly chatGroup: ClientChatMessageEvent$ChatGroup;
    readonly message: string;
    readonly user: AxoUser;
}