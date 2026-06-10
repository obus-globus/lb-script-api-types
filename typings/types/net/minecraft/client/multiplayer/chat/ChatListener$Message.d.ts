import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { BooleanSupplier } from '../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MessageSignature } from '../../../../../net/minecraft/network/chat/MessageSignature.d.ts'
export class ChatListener$Message extends Record {
    private constructor(signature: MessageSignature, handler: () => boolean)
    // private handler: () => boolean;
    // private signature: MessageSignature;
    accept(): boolean;
    equals(o: Object | null): boolean;
    handler(): () => boolean;
    hashCode(): number;
    signature(): MessageSignature;
    toString(): string;
}