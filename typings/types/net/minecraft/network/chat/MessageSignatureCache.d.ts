import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MessageSignature } from '../../../../net/minecraft/network/chat/MessageSignature.d.ts'
import type { SignedMessageBody } from '../../../../net/minecraft/network/chat/SignedMessageBody.d.ts'
export class MessageSignatureCache extends Object {
    static NOT_FOUND: number;
    static createDefault(): MessageSignatureCache;
    constructor(capacity: number)
    // private entries: MessageSignature[];
    pack(signature: MessageSignature): number;
    // private push(queue: MessageSignature[]): void;
    push(entries: MessageSignature[]): void;
    push(body: SignedMessageBody, signature: MessageSignature): void;
    unpack(id: number): MessageSignature;
}