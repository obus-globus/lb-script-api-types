import type { Long2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntMap$Entry.d.ts'
import type { LongIntPair } from '../../../../../it/unimi/dsi/fastutil/longs/LongIntPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Long2IntOpenHashMap$MapEntry extends Object implements Long2IntMap$Entry, LongIntPair, Map$Entry<number, number> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: LongIntPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): LongIntPair;
    constructor(null_: Long2IntOpenHashMap$MapEntry)
    constructor(null_: Long2IntOpenHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongIntPair;
    first(arg0: number): LongIntPair;
    firstLong(): number;
    getIntValue(): number;
    getLongKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongIntPair;
    key(arg0: number): LongIntPair;
    keyLong(): number;
    left(): number;
    left(arg0: number): LongIntPair;
    left(arg0: number): LongIntPair;
    leftLong(): number;
    right(): number;
    right(arg0: number): LongIntPair;
    right(arg0: number): LongIntPair;
    right(): number;
    right(arg0: number): LongIntPair;
    right(arg0: number): LongIntPair;
    rightInt(): number;
    second(): number;
    second(arg0: number): LongIntPair;
    second(arg0: number): LongIntPair;
    secondInt(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): LongIntPair;
    value(arg0: number): LongIntPair;
    valueInt(): number;
}