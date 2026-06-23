import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../../java/util/Map$Entry.d.ts'
export class LinkedTreeMap$Node<K extends unknown, V extends unknown> extends Object implements Map$Entry<K, V> {
    static comparingByKey(): (param0: Object) => boolean;
    static comparingByKey(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingByValue(): (param0: Object) => boolean;
    static comparingByValue(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    constructor()
    constructor(arg0: LinkedTreeMap$Node<K, V>, arg1: K, arg2: LinkedTreeMap$Node<K, V>, arg3: LinkedTreeMap$Node<K, V>)
    // private height: number;
    readonly key: K;
    readonly key: K;
    // private left: LinkedTreeMap$Node<K, V>;
    // private next: LinkedTreeMap$Node<K, V>;
    // private parent: LinkedTreeMap$Node<K, V>;
    // private prev: LinkedTreeMap$Node<K, V>;
    // private right: LinkedTreeMap$Node<K, V>;
    value: V;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    first(): LinkedTreeMap$Node<K, V>;
    hashCode(): number;
    last(): LinkedTreeMap$Node<K, V>;
    setValue(arg0: V): V;
    toString(): string;
}