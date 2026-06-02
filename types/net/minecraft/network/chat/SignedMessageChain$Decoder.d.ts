import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MessageSignature } from '../../../../net/minecraft/network/chat/MessageSignature.d.ts'
import type { PlayerChatMessage } from '../../../../net/minecraft/network/chat/PlayerChatMessage.d.ts'
import type { SignedMessageBody } from '../../../../net/minecraft/network/chat/SignedMessageBody.d.ts'
export interface SignedMessageChain$Decoder extends Object{
    setChainBroken(): void;
    unpack(signature: MessageSignature, body: SignedMessageBody): PlayerChatMessage;
}