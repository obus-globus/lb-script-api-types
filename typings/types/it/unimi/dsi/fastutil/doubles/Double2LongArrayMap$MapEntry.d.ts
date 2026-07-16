import type { Double2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongMap$Entry.d.ts'
import type { DoubleLongPair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleLongPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Double2LongArrayMap$MapEntry extends Object implements Double2LongMap$Entry, DoubleLongPair, Map$Entry<number, number> {
    static comparingByKey(): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByKey(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByValue(): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByValue(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: DoubleLongPair, param1: DoubleLongPair) => number;
    static of(paramarg0: number, paramarg1: number): DoubleLongPair;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): DoubleLongPair;
    firstDouble(): number;
    getDoubleKey(): number;
    getLongValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): DoubleLongPair;
    keyDouble(): number;
    left(): number;
    left(arg0: number): DoubleLongPair;
    leftDouble(): number;
    right(): number;
    right(arg0: number): DoubleLongPair;
    rightLong(): number;
    second(): number;
    second(arg0: number): DoubleLongPair;
    secondLong(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): DoubleLongPair;
    valueLong(): number;
}