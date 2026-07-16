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
export class ImmutableRangeMap<K extends Comparable<Object>, V extends unknown> extends Object implements RangeMap<K, V>, Serializable {
    static builder<K extends Comparable<Object>, V extends unknown>(): ImmutableRangeMap$Builder<K, V>;
    static copyOf<K extends Comparable<Object>, V extends unknown>(paramrangeMap: RangeMap<K, V>): ImmutableRangeMap<K, V>;
    static of<K extends Comparable<Object>, V extends unknown>(): ImmutableRangeMap<K, V>;
    static of<K extends Comparable<Object>, V extends unknown>(paramrange: Range<K>, paramvalue: V): ImmutableRangeMap<K, V>;
    static toImmutableRangeMap<T extends unknown, K extends Comparable<Object>, V extends unknown>(paramkeyFunction: (param0: Object) => Range<K>, paramvalueFunction: (param0: Object) => V): Collector<T, Object, ImmutableRangeMap<K, V>>;
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