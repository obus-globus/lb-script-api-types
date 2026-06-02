import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class LocalCache$WriteThroughEntry extends Object implements Map$Entry<K, V> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    constructor(null_: LocalCache$WriteThroughEntry, value: V)
    readonly key: K;
    readonly key: K;
    value: V;
    readonly value: V;
    equals(object: Object | null): boolean;
    hashCode(): number;
    setValue<V extends Object | number | string | boolean>(newValue: V): V;
    toString(): string;
}