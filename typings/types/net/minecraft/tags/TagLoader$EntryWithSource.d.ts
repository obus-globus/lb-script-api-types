import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { TagEntry } from '../../../net/minecraft/tags/TagEntry.d.ts'
export class TagLoader$EntryWithSource extends Record {
    constructor(entry: TagEntry, source: string)
    // private entry: TagEntry;
    // private source: string;
    entry(): TagEntry;
    equals(o: Object | null): boolean;
    hashCode(): number;
    source(): string;
    toString(): string;
}