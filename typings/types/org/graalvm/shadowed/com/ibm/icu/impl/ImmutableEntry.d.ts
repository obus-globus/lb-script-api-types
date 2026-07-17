import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../../java/util/Map$Entry.d.ts'
export class ImmutableEntry<K extends unknown, V extends unknown> extends Object implements Map$Entry<K, V> {
    constructor(key: K, value: V)
    // private k: K;
    readonly key: K;
    // private v: V;
    readonly value: V;
    equals(o: Object | null): boolean;
    hashCode(): number;
    setValue(value: V): V;
    toString(): string;
}