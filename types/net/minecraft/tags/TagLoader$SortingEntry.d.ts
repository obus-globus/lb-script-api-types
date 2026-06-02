import type { Record } from '../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { TagLoader$EntryWithSource } from '../../../net/minecraft/tags/TagLoader$EntryWithSource.d.ts'
import type { DependencySorter$Entry } from '../../../net/minecraft/util/DependencySorter$Entry.d.ts'
export class TagLoader$SortingEntry extends Record implements DependencySorter$Entry<Identifier> {
    constructor(entries: TagLoader$EntryWithSource[])
    // private entries: TagLoader$EntryWithSource[];
    entries(): TagLoader$EntryWithSource[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    visitOptionalDependencies(output: (param0: Identifier) => void): void;
    visitRequiredDependencies(output: (param0: Identifier) => void): void;
}