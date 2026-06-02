import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientSendMessageEvents$AllowChat } from '../../../../../../../net/fabricmc/fabric/api/client/message/v1/ClientSendMessageEvents$AllowChat.d.ts'
import type { ClientSendMessageEvents$AllowCommand } from '../../../../../../../net/fabricmc/fabric/api/client/message/v1/ClientSendMessageEvents$AllowCommand.d.ts'
import type { ClientSendMessageEvents$Chat } from '../../../../../../../net/fabricmc/fabric/api/client/message/v1/ClientSendMessageEvents$Chat.d.ts'
import type { ClientSendMessageEvents$ChatCanceled } from '../../../../../../../net/fabricmc/fabric/api/client/message/v1/ClientSendMessageEvents$ChatCanceled.d.ts'
import type { ClientSendMessageEvents$Command } from '../../../../../../../net/fabricmc/fabric/api/client/message/v1/ClientSendMessageEvents$Command.d.ts'
import type { ClientSendMessageEvents$CommandCanceled } from '../../../../../../../net/fabricmc/fabric/api/client/message/v1/ClientSendMessageEvents$CommandCanceled.d.ts'
import type { ClientSendMessageEvents$ModifyChat } from '../../../../../../../net/fabricmc/fabric/api/client/message/v1/ClientSendMessageEvents$ModifyChat.d.ts'
import type { ClientSendMessageEvents$ModifyCommand } from '../../../../../../../net/fabricmc/fabric/api/client/message/v1/ClientSendMessageEvents$ModifyCommand.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
export class ClientSendMessageEvents extends Object {
    static ALLOW_CHAT: Event<(param0: string) => kotlin.Boolean>;
    static ALLOW_COMMAND: Event<(param0: string) => kotlin.Boolean>;
    static CHAT: Event<(param0: string) => void>;
    static CHAT_CANCELED: Event<(param0: string) => void>;
    static COMMAND: Event<(param0: string) => void>;
    static COMMAND_CANCELED: Event<(param0: string) => void>;
    static MODIFY_CHAT: Event<(param0: string) => kotlin.String>;
    static MODIFY_COMMAND: Event<(param0: string) => kotlin.String>;
    private constructor()
}