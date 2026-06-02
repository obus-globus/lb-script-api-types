import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PlayerChatMessage } from '../../../../net/minecraft/network/chat/PlayerChatMessage.d.ts'
export interface SignedMessageValidator extends Object{
    updateAndValidate(message: PlayerChatMessage): PlayerChatMessage;
}