import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectMap$Entry.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Object2ObjectLinkedOpenCustomHashMap$MapEntry extends Object implements Pair<K, V>, Object2ObjectMap$Entry<K, V>, Map$Entry<K, V> {
    static comparingByKey(): (param0: Object) => boolean;
    static comparingByKey(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingByValue(): (param0: Object) => boolean;
    static comparingByValue(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: Object | null, paramarg1: Object | null): Pair<Object, Object>;
    constructor(null_: Map<K, V>)
    constructor(null_: Map<K, V>, arg1: number)
    // private index: number;
    equals(arg0: Object | null): boolean;
    first<K extends unknown>(): K;
    first<K extends unknown, V extends unknown>(arg0: K): Pair<K, V>;
    hashCode(): number;
    key<K extends unknown>(): K;
    key<K extends unknown, V extends unknown>(arg0: K): Pair<K, V>;
    left<K extends unknown, V extends unknown>(arg0: K): Pair<K, V>;
    left<K extends unknown>(): K;
    right<K extends unknown, V extends unknown>(arg0: V): Pair<K, V>;
    right<V extends unknown>(): V;
    second<V extends unknown>(): V;
    second<K extends unknown, V extends unknown>(arg0: V): Pair<K, V>;
    setValue<V extends unknown>(arg0: V): V;
    toString(): string;
    value<V extends unknown>(): V;
    value<K extends unknown, V extends unknown>(arg0: V): Pair<K, V>;
}