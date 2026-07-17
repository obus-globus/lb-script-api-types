import type { ByteBytePair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteBytePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteByteImmutablePair extends Object implements ByteBytePair, Serializable {
    static of(paramarg0: number, paramarg1: number): ByteByteImmutablePair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ByteBytePair;
    firstByte(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ByteBytePair;
    keyByte(): number;
    left(): number;
    left(arg0: number): ByteBytePair;
    leftByte(): number;
    right(): number;
    right(arg0: number): ByteBytePair;
    rightByte(): number;
    second(): number;
    second(arg0: number): ByteBytePair;
    secondByte(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ByteBytePair;
    valueByte(): number;
}