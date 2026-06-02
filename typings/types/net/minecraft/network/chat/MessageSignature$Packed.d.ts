import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { MessageSignature } from '../../../../net/minecraft/network/chat/MessageSignature.d.ts'
import type { MessageSignatureCache } from '../../../../net/minecraft/network/chat/MessageSignatureCache.d.ts'
export class MessageSignature$Packed extends Record {
    static FULL_SIGNATURE: number;
    static read(paraminput: FriendlyByteBuf): MessageSignature$Packed;
    static write(paramoutput: FriendlyByteBuf, parampacked: MessageSignature$Packed): void;
    // private fullSignature: MessageSignature;
    // private id: number;
    equals(o: Object | null): boolean;
    fullSignature(): MessageSignature;
    hashCode(): number;
    id(): number;
    toString(): string;
    unpack(cache: MessageSignatureCache): Optional<MessageSignature>;
}