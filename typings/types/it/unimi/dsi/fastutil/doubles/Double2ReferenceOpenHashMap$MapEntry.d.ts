import type { Double2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceMap$Entry.d.ts'
import type { DoubleReferencePair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleReferencePair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Double2ReferenceOpenHashMap$MapEntry extends Object implements Double2ReferenceMap$Entry<V>, DoubleReferencePair<V>, Map$Entry<number, V> {
    static comparingByKey(): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByKey(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByValue(): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByValue(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static of(paramarg0: number, paramarg1: Object | null): DoubleReferencePair<Object>;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first<V extends unknown>(arg0: number): DoubleReferencePair<V>;
    firstDouble(): number;
    getDoubleKey(): number;
    hashCode(): number;
    key(): number;
    key<V extends unknown>(arg0: number): DoubleReferencePair<V>;
    keyDouble(): number;
    left(): number;
    left<V extends unknown>(arg0: number): DoubleReferencePair<V>;
    leftDouble(): number;
    right<V extends unknown>(): V;
    right<V extends unknown>(arg0: V): DoubleReferencePair<V>;
    setValue<V extends unknown>(arg0: V): V;
    toString(): string;
}