import type { ByteIntPair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteIntPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteIntMutablePair extends Object implements ByteIntPair, Serializable {
    static lexComparator(): (param0: ByteIntPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): ByteIntMutablePair;
    static of(paramarg0: number, paramarg1: number): ByteIntPair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ByteIntPair;
    first(arg0: number): ByteIntPair;
    firstByte(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ByteIntPair;
    key(arg0: number): ByteIntPair;
    keyByte(): number;
    left(arg0: number): ByteIntMutablePair;
    left(): number;
    left(arg0: number): ByteIntPair;
    left(arg0: number): ByteIntPair;
    leftByte(): number;
    right(arg0: number): ByteIntMutablePair;
    right(): number;
    right(arg0: number): ByteIntPair;
    right(arg0: number): ByteIntPair;
    rightInt(): number;
    second(): number;
    second(arg0: number): ByteIntPair;
    second(arg0: number): ByteIntPair;
    secondInt(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ByteIntPair;
    value(arg0: number): ByteIntPair;
    valueInt(): number;
}