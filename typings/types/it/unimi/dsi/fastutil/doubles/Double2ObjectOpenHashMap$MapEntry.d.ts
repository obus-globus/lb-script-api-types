import type { Double2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectMap$Entry.d.ts'
import type { DoubleObjectPair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleObjectPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Double2ObjectOpenHashMap$MapEntry extends Object implements Double2ObjectMap$Entry<V>, DoubleObjectPair<V>, Map$Entry<number, V> {
    static comparingByKey(): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByKey(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByValue(): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByValue(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: DoubleObjectPair<Object>, param1: DoubleObjectPair<Object>) => number;
    static of(paramarg0: number, paramarg1: Object | null): DoubleObjectPair<Object>;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first<V extends unknown>(arg0: number): DoubleObjectPair<V>;
    firstDouble(): number;
    getDoubleKey(): number;
    hashCode(): number;
    key(): number;
    key<V extends unknown>(arg0: number): DoubleObjectPair<V>;
    keyDouble(): number;
    left(): number;
    left<V extends unknown>(arg0: number): DoubleObjectPair<V>;
    leftDouble(): number;
    right<V extends unknown>(): V;
    right<V extends unknown>(arg0: V): DoubleObjectPair<V>;
    setValue<V extends unknown>(arg0: V): V;
    toString(): string;
}