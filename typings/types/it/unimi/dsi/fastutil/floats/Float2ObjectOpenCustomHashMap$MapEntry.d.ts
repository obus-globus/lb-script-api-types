import type { Float2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectMap$Entry.d.ts'
import type { FloatObjectPair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatObjectPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Float2ObjectOpenCustomHashMap$MapEntry extends Object implements Float2ObjectMap$Entry<V>, FloatObjectPair<V>, Map$Entry<number, V> {
    static comparingByKey<K extends Comparable<Object>, V extends unknown>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByKey<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends Comparable<Object>>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static copyOf<K extends unknown, V extends unknown>(paramarg0: Map$Entry<K, V>): Map$Entry<K, V>;
    static lexComparator<V extends unknown>(): (param0: FloatObjectPair<V>, param1: FloatObjectPair<V>) => number;
    static of<V extends unknown>(paramarg0: number, paramarg1: V): FloatObjectPair<V>;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first<V extends unknown>(arg0: number): FloatObjectPair<V>;
    firstFloat(): number;
    getFloatKey(): number;
    hashCode(): number;
    key(): number;
    key<V extends unknown>(arg0: number): FloatObjectPair<V>;
    keyFloat(): number;
    left(): number;
    left<V extends unknown>(arg0: number): FloatObjectPair<V>;
    leftFloat(): number;
    right<V extends unknown>(): V;
    right<V extends unknown>(arg0: V): FloatObjectPair<V>;
    setValue<V extends unknown>(arg0: V): V;
    toString(): string;
}