import type { Record } from '../../../../java/lang/Record.d.ts'
import type { BitSet } from '../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { LastSeenMessages } from '../../../../net/minecraft/network/chat/LastSeenMessages.d.ts'
export class LastSeenMessages$Update extends Record {
    static IGNORE_CHECKSUM: number;
    constructor(offset: number, acknowledged: BitSet, checksum: number)
    constructor(input: FriendlyByteBuf)
    // private acknowledged: BitSet;
    // private checksum: number;
    // private offset: number;
    acknowledged(): BitSet;
    checksum(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    offset(): number;
    toString(): string;
    verifyChecksum(lastSeen: LastSeenMessages): boolean;
    write(output: FriendlyByteBuf): void;
}