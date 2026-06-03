import type { Long2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteMap$Entry.d.ts'
import type { LongBytePair } from '../../../../../it/unimi/dsi/fastutil/longs/LongBytePair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Long2ByteLinkedOpenHashMap$MapEntry extends Object implements Long2ByteMap$Entry, LongBytePair, Map$Entry<number, number> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: LongBytePair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): LongBytePair;
    constructor(null_: Long2ByteLinkedOpenHashMap$MapEntry)
    constructor(null_: Long2ByteLinkedOpenHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongBytePair;
    first(arg0: number): LongBytePair;
    firstLong(): number;
    getByteValue(): number;
    getLongKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongBytePair;
    key(arg0: number): LongBytePair;
    keyLong(): number;
    left(): number;
    left(arg0: number): LongBytePair;
    left(arg0: number): LongBytePair;
    leftLong(): number;
    right(): number;
    right(arg0: number): LongBytePair;
    right(arg0: number): LongBytePair;
    right(): number;
    right(arg0: number): LongBytePair;
    right(arg0: number): LongBytePair;
    rightByte(): number;
    second(): number;
    second(arg0: number): LongBytePair;
    second(arg0: number): LongBytePair;
    secondByte(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): LongBytePair;
    value(arg0: number): LongBytePair;
    valueByte(): number;
}