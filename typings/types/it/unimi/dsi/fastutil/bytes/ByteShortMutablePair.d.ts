import type { ByteShortPair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteShortPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteShortMutablePair extends Object implements ByteShortPair, Serializable {
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: number, paramarg1: number): ByteShortMutablePair;
    static of(paramarg0: number, paramarg1: number): ByteShortPair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ByteShortPair;
    firstByte(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ByteShortPair;
    keyByte(): number;
    left(): number;
    left(arg0: number): ByteShortPair;
    left(arg0: number): ByteShortMutablePair;
    leftByte(): number;
    right(): number;
    right(arg0: number): ByteShortPair;
    right(arg0: number): ByteShortMutablePair;
    rightShort(): number;
    second(): number;
    second(arg0: number): ByteShortPair;
    secondShort(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ByteShortPair;
    valueShort(): number;
}