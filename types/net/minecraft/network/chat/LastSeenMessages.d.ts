import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LastSeenMessages$Packed } from '../../../../net/minecraft/network/chat/LastSeenMessages$Packed.d.ts'
import type { MessageSignature } from '../../../../net/minecraft/network/chat/MessageSignature.d.ts'
import type { MessageSignatureCache } from '../../../../net/minecraft/network/chat/MessageSignatureCache.d.ts'
import type { SignatureUpdater$Output } from '../../../../net/minecraft/util/SignatureUpdater$Output.d.ts'
export class LastSeenMessages extends Record {
    static CODEC: Codec<LastSeenMessages>;
    static EMPTY: LastSeenMessages;
    static LAST_SEEN_MESSAGES_MAX_LENGTH: number;
    constructor(entries: MessageSignature[])
    // private entries: MessageSignature[];
    computeChecksum(): number;
    entries(): MessageSignature[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    pack(cache: MessageSignatureCache): LastSeenMessages$Packed;
    toString(): string;
    updateSignature(output: (param0: number[]) => void): void;
}