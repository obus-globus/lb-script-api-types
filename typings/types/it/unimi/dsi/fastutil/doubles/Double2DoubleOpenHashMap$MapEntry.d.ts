import type { Double2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleMap$Entry.d.ts'
import type { DoubleDoublePair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleDoublePair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Double2DoubleOpenHashMap$MapEntry extends Object implements Double2DoubleMap$Entry, DoubleDoublePair, Map$Entry<number, number> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: DoubleDoublePair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): DoubleDoublePair;
    constructor(null_: Double2DoubleOpenHashMap$MapEntry)
    constructor(null_: Double2DoubleOpenHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): DoubleDoublePair;
    first(arg0: number): DoubleDoublePair;
    firstDouble(): number;
    getDoubleKey(): number;
    getDoubleValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): DoubleDoublePair;
    key(arg0: number): DoubleDoublePair;
    keyDouble(): number;
    left(): number;
    left(arg0: number): DoubleDoublePair;
    left(arg0: number): DoubleDoublePair;
    leftDouble(): number;
    right(): number;
    right(arg0: number): DoubleDoublePair;
    right(arg0: number): DoubleDoublePair;
    right(): number;
    right(arg0: number): DoubleDoublePair;
    right(arg0: number): DoubleDoublePair;
    rightDouble(): number;
    second(): number;
    second(arg0: number): DoubleDoublePair;
    second(arg0: number): DoubleDoublePair;
    secondDouble(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): DoubleDoublePair;
    value(arg0: number): DoubleDoublePair;
    valueDouble(): number;
}