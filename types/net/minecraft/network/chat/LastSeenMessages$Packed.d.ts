import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { LastSeenMessages } from '../../../../net/minecraft/network/chat/LastSeenMessages.d.ts'
import type { MessageSignature$Packed } from '../../../../net/minecraft/network/chat/MessageSignature$Packed.d.ts'
import type { MessageSignatureCache } from '../../../../net/minecraft/network/chat/MessageSignatureCache.d.ts'
export class LastSeenMessages$Packed extends Record {
    static EMPTY: LastSeenMessages$Packed;
    constructor(entries: MessageSignature$Packed[])
    constructor(input: FriendlyByteBuf)
    // private entries: MessageSignature$Packed[];
    entries(): MessageSignature$Packed[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    unpack(cache: MessageSignatureCache): Optional<LastSeenMessages>;
    write(output: FriendlyByteBuf): void;
}