import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class LinkedTreeMap$Node<K extends unknown, V extends unknown> extends Object implements Map$Entry<K, V> {
    static comparingByKey<K extends Comparable<Object>, V extends unknown>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByKey<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends Comparable<Object>>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static copyOf<K extends unknown, V extends unknown>(paramarg0: Map$Entry<K, V>): Map$Entry<K, V>;
    constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: LinkedTreeMap$Node<K, V>, arg2: K, arg3: LinkedTreeMap$Node<K, V>, arg4: LinkedTreeMap$Node<K, V>)
    // private allowNullValue: boolean;
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