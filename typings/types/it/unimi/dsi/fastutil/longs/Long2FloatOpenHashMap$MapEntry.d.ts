import type { Long2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatMap$Entry.d.ts'
import type { LongFloatPair } from '../../../../../it/unimi/dsi/fastutil/longs/LongFloatPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Long2FloatOpenHashMap$MapEntry extends Object implements Long2FloatMap$Entry, LongFloatPair, Map$Entry<number, number> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: LongFloatPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): LongFloatPair;
    constructor(null_: Long2FloatOpenHashMap$MapEntry)
    constructor(null_: Long2FloatOpenHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongFloatPair;
    first(arg0: number): LongFloatPair;
    firstLong(): number;
    getFloatValue(): number;
    getLongKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongFloatPair;
    key(arg0: number): LongFloatPair;
    keyLong(): number;
    left(): number;
    left(arg0: number): LongFloatPair;
    left(arg0: number): LongFloatPair;
    leftLong(): number;
    right(arg0: number): LongFloatPair;
    right(): number;
    right(arg0: number): LongFloatPair;
    right(arg0: number): LongFloatPair;
    rightFloat(): number;
    second(): number;
    second(arg0: number): LongFloatPair;
    second(arg0: number): LongFloatPair;
    secondFloat(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): LongFloatPair;
    value(arg0: number): LongFloatPair;
    valueFloat(): number;
}