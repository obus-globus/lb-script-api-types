import type { Range } from '../../../../com/google/common/collect/Range.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export interface RangeSet<C extends Comparable<Object>> extends Object{
    add(range: Range<C>): void;
    addAll(other: RangeSet<C>): void;
    addAll(ranges: Range<C>[]): void;
    asDescendingSetOfRanges(): Range<C>[];
    asRanges(): Range<C>[];
    clear(): void;
    complement(): RangeSet<C>;
    contains(value: C): boolean;
    encloses(otherRange: Range<C>): boolean;
    enclosesAll(other: RangeSet<C>): boolean;
    enclosesAll(other: Range<C>[]): boolean;
    intersects(otherRange: Range<C>): boolean;
    isEmpty(): boolean;
    rangeContaining(value: C): Range<C>;
    remove(range: Range<C>): void;
    removeAll(other: RangeSet<C>): void;
    removeAll(ranges: Range<C>[]): void;
    span(): Range<C>;
    subRangeSet(view: Range<C>): RangeSet<C>;
}