import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class LocalCache$WriteThroughEntry extends Object implements Map$Entry<K, V> {
    constructor(null_: Map<Object, Object>, key: Object, value: Object)
    readonly key: K;
    readonly key: K;
    value: V;
    readonly value: V;
    equals(object: Object | null): boolean;
    hashCode(): number;
    setValue<V extends unknown>(newValue: V): V;
    toString(): string;
}