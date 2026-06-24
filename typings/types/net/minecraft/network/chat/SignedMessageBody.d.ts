import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LastSeenMessages } from '../../../../net/minecraft/network/chat/LastSeenMessages.d.ts'
import type { MessageSignatureCache } from '../../../../net/minecraft/network/chat/MessageSignatureCache.d.ts'
import type { SignedMessageBody$Packed } from '../../../../net/minecraft/network/chat/SignedMessageBody$Packed.d.ts'
import type { SignatureUpdater$Output } from '../../../../net/minecraft/util/SignatureUpdater$Output.d.ts'
export class SignedMessageBody extends Record {
    static MAP_CODEC: MapCodec<SignedMessageBody>;
    static unsigned(paramcontent: string): SignedMessageBody;
    constructor(content: string, timeStamp: Instant, salt: number, lastSeen: LastSeenMessages)
    // private content: string;
    // private lastSeen: LastSeenMessages;
    // private salt: number;
    // private timeStamp: Instant;
    content(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    lastSeen(): LastSeenMessages;
    pack(cache: MessageSignatureCache): SignedMessageBody$Packed;
    salt(): number;
    timeStamp(): Instant;
    toString(): string;
    updateSignature(output: (param0: number[]) => void): void;
}