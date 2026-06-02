import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MessageSignature } from '../../../../net/minecraft/network/chat/MessageSignature.d.ts'
export interface ArgumentSignatures$Signer extends Object{
    sign(content: string): MessageSignature;
}