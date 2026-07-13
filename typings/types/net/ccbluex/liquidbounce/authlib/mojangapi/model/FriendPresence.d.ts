import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FriendJoinInfo } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/FriendJoinInfo.d.ts'
export class FriendPresence extends Record {
    constructor(profileId: string, pmid: string, status: string, joinInfo: FriendJoinInfo | null, lastUpdated: string)
    // private joinInfo: FriendJoinInfo | null;
    /*not mapped: */ joinInfo(): FriendJoinInfo | null;
    // private lastUpdated: string;
    /*not mapped: */ lastUpdated(): string;
    // private pmid: string;
    /*not mapped: */ pmid(): string;
    // private profileId: string;
    /*not mapped: */ profileId(): string;
    // private status: string;
    /*not mapped: */ status(): string;
    component1(): string;
    component2(): string;
    component3(): string;
    component4(): FriendJoinInfo | null;
    component5(): string;
    copy(profileId: string, pmid: string, status: string, joinInfo: FriendJoinInfo | null, lastUpdated: string): FriendPresence;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}