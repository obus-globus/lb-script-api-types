import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { LastSeenMessages$Packed } from '../../../../net/minecraft/network/chat/LastSeenMessages$Packed.d.ts'
import type { MessageSignatureCache } from '../../../../net/minecraft/network/chat/MessageSignatureCache.d.ts'
import type { SignedMessageBody } from '../../../../net/minecraft/network/chat/SignedMessageBody.d.ts'
export class SignedMessageBody$Packed extends Record {
    constructor(content: string, timeStamp: Instant, salt: number, lastSeen: LastSeenMessages$Packed)
    constructor(input: FriendlyByteBuf)
    // private content: string;
    // private lastSeen: LastSeenMessages$Packed;
    // private salt: number;
    // private timeStamp: Instant;
    content(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    lastSeen(): LastSeenMessages$Packed;
    salt(): number;
    timeStamp(): Instant;
    toString(): string;
    unpack(cache: MessageSignatureCache): Optional<SignedMessageBody>;
    write(output: FriendlyByteBuf): void;
}