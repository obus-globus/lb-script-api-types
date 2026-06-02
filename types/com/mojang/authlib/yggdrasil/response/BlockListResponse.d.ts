import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BlockListResponse extends Record {
    constructor(blockedProfiles: UUID[])
    // private blockedProfiles: UUID[];
    blockedProfiles(): UUID[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}