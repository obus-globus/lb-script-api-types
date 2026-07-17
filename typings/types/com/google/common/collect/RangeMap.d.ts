import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Range } from '../../../../com/google/common/collect/Range.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export interface RangeMap<K extends Comparable<Object>, V extends unknown> extends Object {
    asDescendingMapOfRanges(): JavaMap<Range<K>, V>;
    asMapOfRanges(): JavaMap<Range<K>, V>;
    clear(): void;
    get(key: K): V;
    getEntry(key: K): Map$Entry<Range<K>, V>;
    merge(range: Range<K>, value: V, remappingFunction: (param0: V, param1: V) => V): void;
    put(range: Range<K>, value: V): void;
    putAll(rangeMap: RangeMap<K, V>): void;
    putCoalescing(range: Range<K>, value: V): void;
    remove(range: Range<K>): void;
    span(): Range<K>;
    subRangeMap(range: Range<K>): RangeMap<K, V>;
}