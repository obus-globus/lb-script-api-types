import type { Int2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectMap$Entry.d.ts'
import type { IntObjectPair } from '../../../../../it/unimi/dsi/fastutil/ints/IntObjectPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Int2ObjectOpenCustomHashMap$MapEntry extends Object implements Int2ObjectMap$Entry<V>, IntObjectPair<V>, Map$Entry<number, V> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: Object | null) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: Object | null): IntObjectPair<Object>;
    constructor(null_: Int2ObjectOpenCustomHashMap$MapEntry)
    constructor(null_: Int2ObjectOpenCustomHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): IntObjectPair<V>;
    first(arg0: number): IntObjectPair<V>;
    firstInt(): number;
    getIntKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): IntObjectPair<V>;
    key(arg0: number): IntObjectPair<V>;
    keyInt(): number;
    left(): number;
    left(arg0: number): IntObjectPair<V>;
    left(arg0: number): IntObjectPair<V>;
    leftInt(): number;
    right<V extends Object | number | string | boolean>(): V;
    right<V extends Object | number | string | boolean>(arg0: V): IntObjectPair<V>;
    setValue<V extends Object | number | string | boolean>(arg0: V): V;
    toString(): string;
}