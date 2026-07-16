import type { Short2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectMap$Entry.d.ts'
import type { ShortObjectPair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortObjectPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Short2ObjectArrayMap$MapEntry extends Object implements Short2ObjectMap$Entry<V>, ShortObjectPair<V>, Map$Entry<number, V> {
    static comparingByKey<K extends Comparable<Object>, V extends unknown>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByKey<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends Comparable<Object>>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static copyOf<K extends unknown, V extends unknown>(paramarg0: Map$Entry<K, V>): Map$Entry<K, V>;
    static lexComparator<V extends unknown>(): (param0: ShortObjectPair<V>, param1: ShortObjectPair<V>) => number;
    static of<V extends unknown>(paramarg0: number, paramarg1: V): ShortObjectPair<V>;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first<V extends unknown>(arg0: number): ShortObjectPair<V>;
    firstShort(): number;
    getShortKey(): number;
    hashCode(): number;
    key(): number;
    key<V extends unknown>(arg0: number): ShortObjectPair<V>;
    keyShort(): number;
    left(): number;
    left<V extends unknown>(arg0: number): ShortObjectPair<V>;
    leftShort(): number;
    right<V extends unknown>(): V;
    right<V extends unknown>(arg0: V): ShortObjectPair<V>;
    setValue<V extends unknown>(arg0: V): V;
    toString(): string;
}