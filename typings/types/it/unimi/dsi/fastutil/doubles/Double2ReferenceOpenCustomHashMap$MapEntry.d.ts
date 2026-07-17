import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Double2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceMap$Entry.d.ts'
import type { DoubleReferencePair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleReferencePair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Double2ReferenceOpenCustomHashMap$MapEntry extends Object implements Double2ReferenceMap$Entry<V>, DoubleReferencePair<V>, Map$Entry<number, V> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private index: number;
    getKey(): number;
    readonly value: V;
    getValue(): V;
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