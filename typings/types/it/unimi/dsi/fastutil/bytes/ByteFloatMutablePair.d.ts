import type { ByteFloatPair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteFloatPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteFloatMutablePair extends Object implements ByteFloatPair, Serializable {
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: number, paramarg1: number): ByteFloatMutablePair;
    static of(paramarg0: number, paramarg1: number): ByteFloatPair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ByteFloatPair;
    firstByte(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ByteFloatPair;
    keyByte(): number;
    left(): number;
    left(arg0: number): ByteFloatPair;
    left(arg0: number): ByteFloatMutablePair;
    leftByte(): number;
    right(): number;
    right(arg0: number): ByteFloatPair;
    right(arg0: number): ByteFloatMutablePair;
    rightFloat(): number;
    second(): number;
    second(arg0: number): ByteFloatPair;
    secondFloat(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ByteFloatPair;
    valueFloat(): number;
}