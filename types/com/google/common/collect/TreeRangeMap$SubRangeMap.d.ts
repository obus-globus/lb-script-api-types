import type { Range } from '../../../../com/google/common/collect/Range.d.ts'
import type { RangeMap } from '../../../../com/google/common/collect/RangeMap.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class TreeRangeMap$SubRangeMap extends Object implements RangeMap<K, V> {
    constructor(null_: TreeRangeMap$SubRangeMap)
    // private subRange: Range<K>;
    asDescendingMapOfRanges(): Map<Range<K>, V>;
    asMapOfRanges(): Map<Range<K>, V>;
    clear(): void;
    equals(o: Object | null): boolean;
    get<V extends Object | number | string | boolean, K extends Comparable<Object>>(key: K): V;
    getEntry<K extends Comparable<Object>>(key: K): Map$Entry<Range<K>, V>;
    hashCode(): number;
    merge<V extends Object | number | string | boolean>(range: Range<K>, value: V, remappingFunction: (param0: V, param1: V) => V): void;
    put<V extends Object | number | string | boolean>(range: Range<K>, value: V): void;
    putAll(rangeMap: RangeMap<K, V>): void;
    putCoalescing<V extends Object | number | string | boolean>(range: Range<K>, value: V): void;
    remove(range: Range<K>): void;
    span(): Range<K>;
    subRangeMap(range: Range<K>): RangeMap<K, V>;
    toString(): string;
}