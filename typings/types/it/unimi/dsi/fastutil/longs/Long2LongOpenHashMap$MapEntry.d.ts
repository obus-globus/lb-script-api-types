import type { Long2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongMap$Entry.d.ts'
import type { LongLongPair } from '../../../../../it/unimi/dsi/fastutil/longs/LongLongPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Long2LongOpenHashMap$MapEntry extends Object implements Long2LongMap$Entry, LongLongPair, Map$Entry<number, number> {
    static comparingByKey(): (param0: Object) => boolean;
    static comparingByKey(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingByValue(): (param0: Object) => boolean;
    static comparingByValue(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: number, paramarg1: number): LongLongPair;
    constructor(null_: Long2LongOpenHashMap$MapEntry)
    constructor(null_: Long2LongOpenHashMap$MapEntry, arg1: number)
    // private index: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongLongPair;
    firstLong(): number;
    getLongKey(): number;
    getLongValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongLongPair;
    keyLong(): number;
    left(): number;
    left(arg0: number): LongLongPair;
    leftLong(): number;
    right(): number;
    right(arg0: number): LongLongPair;
    rightLong(): number;
    second(): number;
    second(arg0: number): LongLongPair;
    secondLong(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): LongLongPair;
    valueLong(): number;
}