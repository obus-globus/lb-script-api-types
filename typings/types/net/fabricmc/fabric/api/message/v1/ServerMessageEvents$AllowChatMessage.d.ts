import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ChatType$Bound } from '../../../../../../net/minecraft/network/chat/ChatType$Bound.d.ts'
import type { PlayerChatMessage } from '../../../../../../net/minecraft/network/chat/PlayerChatMessage.d.ts'
import type { ServerPlayer } from '../../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export interface ServerMessageEvents$AllowChatMessage extends Object{
    allowChatMessage(arg0: PlayerChatMessage, arg1: ServerPlayer, arg2: ChatType$Bound): boolean;
}