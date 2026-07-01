import type { AbstractRangeSet } from '../../../../com/google/common/collect/AbstractRangeSet.d.ts'
import type { DiscreteDomain } from '../../../../com/google/common/collect/DiscreteDomain.d.ts'
import type { ImmutableRangeSet$Builder } from '../../../../com/google/common/collect/ImmutableRangeSet$Builder.d.ts'
import type { Range } from '../../../../com/google/common/collect/Range.d.ts'
import type { RangeSet } from '../../../../com/google/common/collect/RangeSet.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class ImmutableRangeSet<C extends Comparable<Object>> extends AbstractRangeSet<C> implements Serializable {
    static builder(): ImmutableRangeSet$Builder<any>;
    static copyOf(paramranges: Range<any>[]): ImmutableRangeSet<any>;
    static copyOf(paramrangeSet: RangeSet<any>): ImmutableRangeSet<any>;
    static of(): ImmutableRangeSet<any>;
    static of(paramrange: Range<any>): ImmutableRangeSet<any>;
    static toImmutableRangeSet(): Collector<Range<any>, Object, ImmutableRangeSet<any>>;
    static unionOf(paramranges: Range<any>[]): ImmutableRangeSet<any>;
    constructor(ranges: Range<C>[])
    // private complement: ImmutableRangeSet<C>;
    // private lazyComplement: ImmutableRangeSet<C>;
    // private ranges: Range<C>[];
    add(range: Range<C>): void;
    addAll(other: RangeSet<C>): void;
    addAll(other: Range<C>[]): void;
    asDescendingSetOfRanges(): Range<C>[];
    asRanges(): Range<C>[];
    asSet(domain: DiscreteDomain<C>): C[];
    complement(): ImmutableRangeSet<C>;
    difference(other: RangeSet<C>): ImmutableRangeSet<C>;
    encloses(otherRange: Range<C>): boolean;
    // private intersectRanges(range: Range<C>): Range<C>[];
    intersection(other: RangeSet<C>): ImmutableRangeSet<C>;
    intersects(otherRange: Range<C>): boolean;
    isEmpty(): boolean;
    isPartialView(): boolean;
    // private lazyComplement(): ImmutableRangeSet<C>;
    rangeContaining(value: C): Range<C>;
    // private readObject(stream: ObjectInputStream): void;
    remove(range: Range<C>): void;
    removeAll(other: RangeSet<C>): void;
    removeAll(other: Range<C>[]): void;
    span(): Range<C>;
    subRangeSet(range: Range<C>): ImmutableRangeSet<C>;
    union(other: RangeSet<C>): ImmutableRangeSet<C>;
    writeReplace(): Object;
}