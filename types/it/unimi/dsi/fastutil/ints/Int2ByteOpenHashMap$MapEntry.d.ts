import type { Int2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteMap$Entry.d.ts'
import type { IntBytePair } from '../../../../../it/unimi/dsi/fastutil/ints/IntBytePair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Int2ByteOpenHashMap$MapEntry extends Object implements Int2ByteMap$Entry, IntBytePair, Map$Entry<number, number> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: IntBytePair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): IntBytePair;
    constructor(null_: Int2ByteOpenHashMap$MapEntry)
    constructor(null_: Int2ByteOpenHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): IntBytePair;
    first(arg0: number): IntBytePair;
    firstInt(): number;
    getByteValue(): number;
    getIntKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): IntBytePair;
    key(arg0: number): IntBytePair;
    keyInt(): number;
    left(): number;
    left(arg0: number): IntBytePair;
    left(arg0: number): IntBytePair;
    leftInt(): number;
    right(arg0: number): IntBytePair;
    right(): number;
    right(arg0: number): IntBytePair;
    right(arg0: number): IntBytePair;
    rightByte(): number;
    second(): number;
    second(arg0: number): IntBytePair;
    second(arg0: number): IntBytePair;
    secondByte(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): IntBytePair;
    value(arg0: number): IntBytePair;
    valueByte(): number;
}