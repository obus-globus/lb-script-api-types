import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class FriendsUpdateRequest extends Record {
    constructor(name: string | null, profileId: string | null, updateType: string)
    // private name: string | null;
    /*not mapped: */ name(): string | null;
    // private profileId: string | null;
    /*not mapped: */ profileId(): string | null;
    // private updateType: string;
    /*not mapped: */ updateType(): string;
    component1(): string | null;
    component2(): string | null;
    component3(): string;
    copy(name: string | null, profileId: string | null, updateType: string): FriendsUpdateRequest;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}