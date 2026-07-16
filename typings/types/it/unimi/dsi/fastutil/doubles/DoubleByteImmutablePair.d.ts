import type { DoubleBytePair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleBytePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleByteImmutablePair extends Object implements DoubleBytePair, Serializable {
    static lexComparator(): (param0: DoubleBytePair, param1: DoubleBytePair) => number;
    static of(paramarg0: number, paramarg1: number): DoubleByteImmutablePair;
    static of(paramarg0: number, paramarg1: number): DoubleBytePair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): DoubleBytePair;
    firstDouble(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): DoubleBytePair;
    keyDouble(): number;
    left(): number;
    left(arg0: number): DoubleBytePair;
    leftDouble(): number;
    right(): number;
    right(arg0: number): DoubleBytePair;
    rightByte(): number;
    second(): number;
    second(arg0: number): DoubleBytePair;
    secondByte(): number;
    toString(): string;
    value(): number;
    value(arg0: number): DoubleBytePair;
    valueByte(): number;
}