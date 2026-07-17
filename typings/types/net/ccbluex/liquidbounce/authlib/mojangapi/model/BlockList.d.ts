import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BlockList extends Record {
    constructor(blockedProfiles?: string[])
    // private blockedProfiles: string[];
    /*not mapped: */ blockedProfiles(): string[];
    component1(): string[];
    copy(blockedProfiles: string[]): BlockList;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}