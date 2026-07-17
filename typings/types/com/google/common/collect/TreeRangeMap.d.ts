import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Cut } from '../../../../com/google/common/collect/Cut.d.ts'
import type { Range } from '../../../../com/google/common/collect/Range.d.ts'
import type { RangeMap } from '../../../../com/google/common/collect/RangeMap.d.ts'
import type { TreeRangeMap$RangeMapEntry } from '../../../../com/google/common/collect/TreeRangeMap$RangeMapEntry.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class TreeRangeMap<K extends Comparable<Object>, V extends unknown> extends Object implements RangeMap<K, V> {
    static copyOf<K extends Comparable<Object>, V extends unknown>(paramrangeMap: RangeMap<K, V>): TreeRangeMap<K, V>;
    static create<K extends Comparable<Object>, V extends unknown>(): TreeRangeMap<K, V>;
    private constructor()
    private constructor(entriesByLowerBound: JavaMap<Cut<K>, TreeRangeMap$RangeMapEntry<K, V>>)
    // private entriesByLowerBound: JavaMap<Cut<K>, TreeRangeMap$RangeMapEntry<K, V>>;
    asDescendingMapOfRanges(): JavaMap<Range<K>, V>;
    asMapOfRanges(): JavaMap<Range<K>, V>;
    clear(): void;
    // private coalescedRange(range: Range<K>, value: V): Range<K>;
    // private emptySubRangeMap(): RangeMap<K, V>;
    equals(o: Object | null): boolean;
    get(key: K): V;
    getEntry(key: K): Map$Entry<Range<K>, V>;
    hashCode(): number;
    merge(range: Range<K>, value: V, remappingFunction: (param0: V, param1: V) => V): void;
    put(range: Range<K>, value: V): void;
    putAll(rangeMap: RangeMap<K, V>): void;
    putCoalescing(range: Range<K>, value: V): void;
    // private putRangeMapEntry(lowerBound: Cut<K>, upperBound: Cut<K>, value: V): void;
    remove(rangeToRemove: Range<K>): void;
    span(): Range<K>;
    // private split(cut: Cut<K>): void;
    subRangeMap(subRange: Range<K>): RangeMap<K, V>;
    toString(): string;
}