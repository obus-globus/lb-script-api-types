import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MessageSignature } from '../../../../../net/minecraft/network/chat/MessageSignature.d.ts'
export class ChatComponent$DelayedMessageDeletion extends Record {
    private constructor(signature: MessageSignature, deletableAfter: number)
    // private deletableAfter: number;
    // private signature: MessageSignature;
    deletableAfter(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    signature(): MessageSignature;
    toString(): string;
}