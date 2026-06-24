import type { Int2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectMap$Entry.d.ts'
import type { IntObjectPair } from '../../../../../it/unimi/dsi/fastutil/ints/IntObjectPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Int2ObjectOpenCustomHashMap$MapEntry extends Object implements Int2ObjectMap$Entry<V>, IntObjectPair<V>, Map$Entry<number, V> {
    static comparingByKey(): (param0: Object) => boolean;
    static comparingByKey(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingByValue(): (param0: Object) => boolean;
    static comparingByValue(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: number, paramarg1: Object | null): IntObjectPair<Object>;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first<V extends unknown>(arg0: number): IntObjectPair<V>;
    firstInt(): number;
    getIntKey(): number;
    hashCode(): number;
    key(): number;
    key<V extends unknown>(arg0: number): IntObjectPair<V>;
    keyInt(): number;
    left(): number;
    left<V extends unknown>(arg0: number): IntObjectPair<V>;
    leftInt(): number;
    right<V extends unknown>(): V;
    right<V extends unknown>(arg0: V): IntObjectPair<V>;
    setValue<V extends unknown>(arg0: V): V;
    toString(): string;
}