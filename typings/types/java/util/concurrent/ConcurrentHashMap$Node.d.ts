import type { Comparator } from '../../../java/util/Comparator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export class ConcurrentHashMap$Node<K extends unknown, V extends unknown> extends Object implements Map$Entry<K, V> {
    static comparingByKey(): (param0: Object) => boolean;
    static comparingByKey(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingByValue(): (param0: Object) => boolean;
    static comparingByValue(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    constructor(arg0: number, arg1: K, arg2: V)
    constructor(arg0: number, arg1: K, arg2: V, arg3: ConcurrentHashMap$Node<K, V>)
    // private hash: number;
    readonly key: K;
    readonly key: K;
    // private next: ConcurrentHashMap$Node<K, V>;
    // private val: V;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    find(arg0: number, arg1: Object): ConcurrentHashMap$Node<K, V>;
    hashCode(): number;
    setValue(arg0: V): V;
    toString(): string;
}