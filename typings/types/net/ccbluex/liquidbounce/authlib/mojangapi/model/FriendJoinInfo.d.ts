import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FriendJoinInfo extends Record {
    constructor(value: string | null, invited: boolean)
    // private invited: boolean;
    /*not mapped: */ invited(): boolean;
    // private value: string | null;
    /*not mapped: */ value(): string | null;
    component1(): string | null;
    component2(): boolean;
    copy(value: string | null, invited: boolean): FriendJoinInfo;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}