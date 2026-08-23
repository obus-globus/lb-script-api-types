import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class FriendsPreferences extends Record {
    constructor(friends: string, acceptInvites: string)
    // private acceptInvites: string;
    /*not mapped: */ acceptInvites(): string;
    // private friends: string;
    /*not mapped: */ friends(): string;
    component1(): string;
    component2(): string;
    copy(friends: string, acceptInvites: string): FriendsPreferences;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}