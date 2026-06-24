import type { FriendDto } from '../../../../../com/mojang/authlib/yggdrasil/response/FriendDto.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FriendsListResponse extends Record {
    constructor(friends: FriendDto[], incomingRequests: FriendDto[], outgoingRequests: FriendDto[])
    // private friends: FriendDto[];
    // private incomingRequests: FriendDto[];
    // private outgoingRequests: FriendDto[];
    equals(arg0: Object | null): boolean;
    friends(): FriendDto[];
    hashCode(): number;
    incomingRequests(): FriendDto[];
    outgoingRequests(): FriendDto[];
    toString(): string;
}