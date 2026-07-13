import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FriendPresence } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/FriendPresence.d.ts'
export class PresenceResponse extends Record {
    constructor(presence: FriendPresence[])
    // private presence: FriendPresence[];
    /*not mapped: */ presence(): FriendPresence[];
    component1(): FriendPresence[];
    copy(presence: FriendPresence[]): PresenceResponse;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}