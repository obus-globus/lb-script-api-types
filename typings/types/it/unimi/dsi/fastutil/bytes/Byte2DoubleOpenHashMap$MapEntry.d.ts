import type { Byte2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleMap$Entry.d.ts'
import type { ByteDoublePair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteDoublePair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Byte2DoubleOpenHashMap$MapEntry extends Object implements Byte2DoubleMap$Entry, ByteDoublePair, Map$Entry<number, number> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: ByteDoublePair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): ByteDoublePair;
    constructor(null_: Byte2DoubleOpenHashMap$MapEntry)
    constructor(null_: Byte2DoubleOpenHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ByteDoublePair;
    first(arg0: number): ByteDoublePair;
    firstByte(): number;
    getByteKey(): number;
    getDoubleValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ByteDoublePair;
    key(arg0: number): ByteDoublePair;
    keyByte(): number;
    left(): number;
    left(arg0: number): ByteDoublePair;
    left(arg0: number): ByteDoublePair;
    leftByte(): number;
    right(): number;
    right(arg0: number): ByteDoublePair;
    right(arg0: number): ByteDoublePair;
    right(): number;
    right(arg0: number): ByteDoublePair;
    right(arg0: number): ByteDoublePair;
    rightDouble(): number;
    second(): number;
    second(arg0: number): ByteDoublePair;
    second(arg0: number): ByteDoublePair;
    secondDouble(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): ByteDoublePair;
    value(arg0: number): ByteDoublePair;
    valueDouble(): number;
}