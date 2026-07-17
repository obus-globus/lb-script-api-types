import type { Object } from '../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../java/util/Map$Entry.d.ts'
export class HashMap$Node<K extends unknown, V extends unknown> extends Object implements Map$Entry<K, V> {
    constructor(arg0: number, arg1: K, arg2: V, arg3: HashMap$Node<K, V>)
    // private hash: number;
    readonly key: K;
    readonly key: K;
    // private next: HashMap$Node<K, V>;
    value: V;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    setValue(arg0: V): V;
    toString(): string;
}