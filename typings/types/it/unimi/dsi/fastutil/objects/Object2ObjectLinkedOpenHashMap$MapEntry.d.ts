import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectMap$Entry.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Object2ObjectLinkedOpenHashMap$MapEntry extends Object implements Pair<K, V>, Object2ObjectMap$Entry<K, V>, Map$Entry<K, V> {
    static comparingByKey<K extends Comparable<Object>, V extends unknown>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByKey<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends Comparable<Object>>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static copyOf<K extends unknown, V extends unknown>(paramarg0: Map$Entry<K, V>): Map$Entry<K, V>;
    static lexComparator<L extends unknown, R extends unknown>(): (param0: Pair<L, R>, param1: Pair<L, R>) => number;
    static of<L extends unknown, R extends unknown>(paramarg0: L, paramarg1: R): Pair<L, R>;
    constructor(null_: Map<Object, Object>)
    constructor(null_: Map<Object, Object>, arg1: number)
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