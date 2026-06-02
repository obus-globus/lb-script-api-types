import type { Long2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleMap$Entry.d.ts'
import type { LongDoublePair } from '../../../../../it/unimi/dsi/fastutil/longs/LongDoublePair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Long2DoubleOpenCustomHashMap$MapEntry extends Object implements Long2DoubleMap$Entry, LongDoublePair, Map$Entry<number, number> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: LongDoublePair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): LongDoublePair;
    constructor(null_: Long2DoubleOpenCustomHashMap$MapEntry)
    constructor(null_: Long2DoubleOpenCustomHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongDoublePair;
    first(arg0: number): LongDoublePair;
    firstLong(): number;
    getDoubleValue(): number;
    getLongKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongDoublePair;
    key(arg0: number): LongDoublePair;
    keyLong(): number;
    left(): number;
    left(arg0: number): LongDoublePair;
    left(arg0: number): LongDoublePair;
    leftLong(): number;
    right(arg0: number): LongDoublePair;
    right(): number;
    right(arg0: number): LongDoublePair;
    right(arg0: number): LongDoublePair;
    rightDouble(): number;
    second(): number;
    second(arg0: number): LongDoublePair;
    second(arg0: number): LongDoublePair;
    secondDouble(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): LongDoublePair;
    value(arg0: number): LongDoublePair;
    valueDouble(): number;
}