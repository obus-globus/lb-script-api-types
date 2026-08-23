import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class FriendInfo extends Record {
    constructor(profileId: string, name: string)
    // private name: string;
    /*not mapped: */ name(): string;
    // private profileId: string;
    /*not mapped: */ profileId(): string;
    component1(): string;
    component2(): string;
    copy(profileId: string, name: string): FriendInfo;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}