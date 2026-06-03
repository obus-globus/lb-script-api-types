import type { Byte2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatMap$Entry.d.ts'
import type { ByteFloatPair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteFloatPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Byte2FloatOpenCustomHashMap$MapEntry extends Object implements Byte2FloatMap$Entry, ByteFloatPair, Map$Entry<number, number> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: ByteFloatPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): ByteFloatPair;
    constructor(null_: Byte2FloatOpenCustomHashMap$MapEntry)
    constructor(null_: Byte2FloatOpenCustomHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ByteFloatPair;
    first(arg0: number): ByteFloatPair;
    firstByte(): number;
    getByteKey(): number;
    getFloatValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ByteFloatPair;
    key(arg0: number): ByteFloatPair;
    keyByte(): number;
    left(): number;
    left(arg0: number): ByteFloatPair;
    left(arg0: number): ByteFloatPair;
    leftByte(): number;
    right(): number;
    right(arg0: number): ByteFloatPair;
    right(arg0: number): ByteFloatPair;
    right(): number;
    right(arg0: number): ByteFloatPair;
    right(arg0: number): ByteFloatPair;
    rightFloat(): number;
    second(): number;
    second(arg0: number): ByteFloatPair;
    second(arg0: number): ByteFloatPair;
    secondFloat(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): ByteFloatPair;
    value(arg0: number): ByteFloatPair;
    valueFloat(): number;
}