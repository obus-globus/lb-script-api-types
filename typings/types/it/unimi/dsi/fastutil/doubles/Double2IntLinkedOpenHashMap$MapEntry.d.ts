import type { Double2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntMap$Entry.d.ts'
import type { DoubleIntPair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleIntPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Double2IntLinkedOpenHashMap$MapEntry extends Object implements Double2IntMap$Entry, DoubleIntPair, Map$Entry<number, number> {
    static comparingByKey(): (param0: Object) => boolean;
    static comparingByKey(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingByValue(): (param0: Object) => boolean;
    static comparingByValue(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: number, paramarg1: number): DoubleIntPair;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): DoubleIntPair;
    firstDouble(): number;
    getDoubleKey(): number;
    getIntValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): DoubleIntPair;
    keyDouble(): number;
    left(): number;
    left(arg0: number): DoubleIntPair;
    leftDouble(): number;
    right(): number;
    right(arg0: number): DoubleIntPair;
    rightInt(): number;
    second(): number;
    second(arg0: number): DoubleIntPair;
    secondInt(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): DoubleIntPair;
    valueInt(): number;
}