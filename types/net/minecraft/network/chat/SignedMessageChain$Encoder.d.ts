import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MessageSignature } from '../../../../net/minecraft/network/chat/MessageSignature.d.ts'
import type { SignedMessageBody } from '../../../../net/minecraft/network/chat/SignedMessageBody.d.ts'
export interface SignedMessageChain$Encoder extends Object{
    pack(body: SignedMessageBody): MessageSignature;
}