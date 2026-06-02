import type { Byte2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongMap$Entry.d.ts'
import type { ByteLongPair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteLongPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Byte2LongOpenHashMap$MapEntry extends Object implements Byte2LongMap$Entry, ByteLongPair, Map$Entry<number, number> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: ByteLongPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): ByteLongPair;
    constructor(null_: Byte2LongOpenHashMap$MapEntry)
    constructor(null_: Byte2LongOpenHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ByteLongPair;
    first(arg0: number): ByteLongPair;
    firstByte(): number;
    getByteKey(): number;
    getLongValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ByteLongPair;
    key(arg0: number): ByteLongPair;
    keyByte(): number;
    left(): number;
    left(arg0: number): ByteLongPair;
    left(arg0: number): ByteLongPair;
    leftByte(): number;
    right(arg0: number): ByteLongPair;
    right(): number;
    right(arg0: number): ByteLongPair;
    right(arg0: number): ByteLongPair;
    rightLong(): number;
    second(): number;
    second(arg0: number): ByteLongPair;
    second(arg0: number): ByteLongPair;
    secondLong(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): ByteLongPair;
    value(arg0: number): ByteLongPair;
    valueLong(): number;
}