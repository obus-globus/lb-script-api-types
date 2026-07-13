import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FriendInfo } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/FriendInfo.d.ts'
export class FriendsList extends Record {
    constructor(friends: FriendInfo[], incomingRequests: FriendInfo[], outgoingRequests: FriendInfo[], empty: boolean)
    // private empty: boolean;
    /*not mapped: */ empty(): boolean;
    // private friends: FriendInfo[];
    /*not mapped: */ friends(): FriendInfo[];
    // private incomingRequests: FriendInfo[];
    /*not mapped: */ incomingRequests(): FriendInfo[];
    // private outgoingRequests: FriendInfo[];
    /*not mapped: */ outgoingRequests(): FriendInfo[];
    component1(): FriendInfo[];
    component2(): FriendInfo[];
    component3(): FriendInfo[];
    component4(): boolean;
    copy(friends: FriendInfo[], incomingRequests: FriendInfo[], outgoingRequests: FriendInfo[], empty: boolean): FriendsList;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}