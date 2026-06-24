import type { FriendsService$PlayerData } from '../../../../../com/mojang/authlib/yggdrasil/FriendsService$PlayerData.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FriendRequestsResponse extends Record {
    constructor(requests: FriendsService$PlayerData[])
    // private requests: FriendsService$PlayerData[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    requests(): FriendsService$PlayerData[];
    toString(): string;
}