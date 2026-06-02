import type { ByteBytePair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteBytePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteByteImmutablePair extends Object implements ByteBytePair, Serializable {
    static lexComparator(): (param0: ByteBytePair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): ByteByteImmutablePair;
    static of(paramarg0: number, paramarg1: number): ByteBytePair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ByteBytePair;
    first(arg0: number): ByteBytePair;
    firstByte(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ByteBytePair;
    key(arg0: number): ByteBytePair;
    keyByte(): number;
    left(): number;
    left(arg0: number): ByteBytePair;
    left(arg0: number): ByteBytePair;
    leftByte(): number;
    right(): number;
    right(arg0: number): ByteBytePair;
    right(arg0: number): ByteBytePair;
    rightByte(): number;
    second(): number;
    second(arg0: number): ByteBytePair;
    second(arg0: number): ByteBytePair;
    secondByte(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ByteBytePair;
    value(arg0: number): ByteBytePair;
    valueByte(): number;
}