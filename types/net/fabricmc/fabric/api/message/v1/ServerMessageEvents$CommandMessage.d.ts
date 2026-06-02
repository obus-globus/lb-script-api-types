import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { ChatType$Bound } from '../../../../../../net/minecraft/network/chat/ChatType$Bound.d.ts'
import type { PlayerChatMessage } from '../../../../../../net/minecraft/network/chat/PlayerChatMessage.d.ts'
export interface ServerMessageEvents$CommandMessage extends Object{
    onCommandMessage(arg0: PlayerChatMessage, arg1: CommandSourceStack, arg2: ChatType$Bound): void;
}