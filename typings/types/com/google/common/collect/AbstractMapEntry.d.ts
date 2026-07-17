import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export abstract class AbstractMapEntry<K extends unknown, V extends unknown> extends Object implements Map$Entry<K, V> {
    constructor()
    readonly key: K;
    readonly value: V;
    equals(object: Object | null): boolean;
    hashCode(): number;
    setValue(value: V): V;
    toString(): string;
}