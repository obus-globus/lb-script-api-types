import type { ImmutableRangeMap$Builder } from '../../../../com/google/common/collect/ImmutableRangeMap$Builder.d.ts'
import type { Range } from '../../../../com/google/common/collect/Range.d.ts'
import type { RangeMap } from '../../../../com/google/common/collect/RangeMap.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class ImmutableRangeMap<K extends Comparable<Object>, V extends Object | number | string | boolean> extends Object implements RangeMap<K, V>, Serializable {
    static builder(): ImmutableRangeMap$Builder<Object, Object>;
    static copyOf(paramrangeMap: RangeMap<Object, Object>): ImmutableRangeMap<Object, Object>;
    static of(): ImmutableRangeMap<Object, Object>;
    static of(paramrange: Range<Object>, paramvalue: Object | null): ImmutableRangeMap<Object, Object>;
    static toImmutableRangeMap(paramkeyFunction: (param0: Object | null) => Object | null, paramvalueFunction: (param0: Object | null) => Object | null): Collector<Object, Object, Object>;
    constructor(ranges: Range<K>[], values: V[])
    // private ranges: Range<K>[];
    // private values: V[];
    asDescendingMapOfRanges(): Map<Range<K>, V>;
    asMapOfRanges(): Map<Range<K>, V>;
    clear(): void;
    equals(o: Object | null): boolean;
    get(key: K): V;
    getEntry(key: K): Map$Entry<Range<K>, V>;
    hashCode(): number;
    merge(range: Range<K>, value: V, remappingFunction: (param0: V, param1: V) => V): void;
    put(range: Range<K>, value: V): void;
    putAll(rangeMap: RangeMap<K, V>): void;
    putCoalescing(range: Range<K>, value: V): void;
    // private readObject(stream: ObjectInputStream): void;
    remove(range: Range<K>): void;
    span(): Range<K>;
    subRangeMap(range: Range<K>): ImmutableRangeMap<K, V>;
    toString(): string;
    writeReplace(): Object;
}