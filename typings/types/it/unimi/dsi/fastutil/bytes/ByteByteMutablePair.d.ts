import type { ByteBytePair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteBytePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteByteMutablePair extends Object implements ByteBytePair, Serializable {
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: number, paramarg1: number): ByteByteMutablePair;
    static of(paramarg0: number, paramarg1: number): ByteBytePair;
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
    left(arg0: number): ByteByteMutablePair;
    leftByte(): number;
    right(): number;
    right(arg0: number): ByteBytePair;
    right(arg0: number): ByteByteMutablePair;
    rightByte(): number;
    second(): number;
    second(arg0: number): ByteBytePair;
    secondByte(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ByteBytePair;
    valueByte(): number;
}