import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../java/util/Map$Entry.d.ts'
export class AbstractMap$SimpleImmutableEntry<K extends unknown, V extends unknown> extends Object implements Serializable, Map$Entry<K, V> {
    constructor(arg0: K, arg1: V)
    constructor(arg0: Map$Entry<K, V>)
    readonly key: K;
    readonly key: K;
    readonly value: V;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    setValue(arg0: V): V;
    toString(): string;
}