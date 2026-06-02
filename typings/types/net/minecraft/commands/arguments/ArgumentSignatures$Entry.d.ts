import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { MessageSignature } from '../../../../net/minecraft/network/chat/MessageSignature.d.ts'
export class ArgumentSignatures$Entry extends Record {
    constructor(name: string, signature: MessageSignature)
    constructor(input: FriendlyByteBuf)
    // private name: string;
    // private signature: MessageSignature;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): string;
    signature(): MessageSignature;
    toString(): string;
    write(output: FriendlyByteBuf): void;
}