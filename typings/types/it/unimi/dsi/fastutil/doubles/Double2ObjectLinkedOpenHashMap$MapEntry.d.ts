import type { Double2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectMap$Entry.d.ts'
import type { DoubleObjectPair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleObjectPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Double2ObjectLinkedOpenHashMap$MapEntry extends Object implements Double2ObjectMap$Entry<V>, DoubleObjectPair<V>, Map$Entry<number, V> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: Object | null) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: Object | null): DoubleObjectPair<Object>;
    constructor(null_: Double2ObjectLinkedOpenHashMap$MapEntry)
    constructor(null_: Double2ObjectLinkedOpenHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): DoubleObjectPair<V>;
    first(arg0: number): DoubleObjectPair<V>;
    firstDouble(): number;
    getDoubleKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): DoubleObjectPair<V>;
    key(arg0: number): DoubleObjectPair<V>;
    keyDouble(): number;
    left(): number;
    left(arg0: number): DoubleObjectPair<V>;
    left(arg0: number): DoubleObjectPair<V>;
    leftDouble(): number;
    right<V extends Object | number | string | boolean>(): V;
    right<V extends Object | number | string | boolean>(arg0: V): DoubleObjectPair<V>;
    setValue<V extends Object | number | string | boolean>(arg0: V): V;
    toString(): string;
}