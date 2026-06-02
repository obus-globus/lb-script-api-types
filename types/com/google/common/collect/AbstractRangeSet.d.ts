import type { Range } from '../../../../com/google/common/collect/Range.d.ts'
import type { RangeSet } from '../../../../com/google/common/collect/RangeSet.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export abstract class AbstractRangeSet<C extends Comparable<Object>> extends Object implements RangeSet<C> {
    constructor()
    add(range: Range<C>): void;
    addAll(other: RangeSet<C>): void;
    addAll(ranges: Range<C>[]): void;
    clear(): void;
    contains(value: C): boolean;
    encloses(otherRange: Range<C>): boolean;
    enclosesAll(other: RangeSet<C>): boolean;
    enclosesAll(other: Range<C>[]): boolean;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    intersects(otherRange: Range<C>): boolean;
    isEmpty(): boolean;
    rangeContaining(value: C): Range<C>;
    remove(range: Range<C>): void;
    removeAll(other: RangeSet<C>): void;
    removeAll(ranges: Range<C>[]): void;
    toString(): string;
}