import type { Range } from '../../../../com/google/common/collect/Range.d.ts'
import type { RangeMap } from '../../../../com/google/common/collect/RangeMap.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class TreeRangeMap$SubRangeMap extends Object implements RangeMap<K, V> {
    constructor(null_: TreeRangeMap$SubRangeMap)
    // private subRange: Range<K>;
    asDescendingMapOfRanges<K extends Comparable<Object>, V extends unknown>(): Map<Range<K>, V>;
    asMapOfRanges<K extends Comparable<Object>, V extends unknown>(): Map<Range<K>, V>;
    clear(): void;
    equals(o: Object | null): boolean;
    get<V extends unknown, K extends Comparable<Object>>(key: K): V;
    getEntry<K extends Comparable<Object>, V extends unknown>(key: K): Map$Entry<Range<K>, V>;
    hashCode(): number;
    merge<K extends Comparable<Object>, V extends unknown>(range: Range<K>, value: V, remappingFunction: (param0: V, param1: V) => V): void;
    put<K extends Comparable<Object>, V extends unknown>(range: Range<K>, value: V): void;
    putAll<K extends Comparable<Object>, V extends unknown>(rangeMap: RangeMap<K, V>): void;
    putCoalescing<K extends Comparable<Object>, V extends unknown>(range: Range<K>, value: V): void;
    remove<K extends Comparable<Object>>(range: Range<K>): void;
    span<K extends Comparable<Object>>(): Range<K>;
    subRangeMap<K extends Comparable<Object>, V extends unknown>(range: Range<K>): RangeMap<K, V>;
    toString(): string;
}