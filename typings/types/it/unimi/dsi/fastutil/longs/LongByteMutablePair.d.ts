import type { LongBytePair } from '../../../../../it/unimi/dsi/fastutil/longs/LongBytePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongByteMutablePair extends Object implements LongBytePair, Serializable {
    static lexComparator(): (param0: LongBytePair, param1: LongBytePair) => number;
    static of(paramarg0: number, paramarg1: number): LongByteMutablePair;
    static of(paramarg0: number, paramarg1: number): LongBytePair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongBytePair;
    firstLong(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongBytePair;
    keyLong(): number;
    left(): number;
    left(arg0: number): LongBytePair;
    left(arg0: number): LongByteMutablePair;
    leftLong(): number;
    right(): number;
    right(arg0: number): LongBytePair;
    right(arg0: number): LongByteMutablePair;
    rightByte(): number;
    second(): number;
    second(arg0: number): LongBytePair;
    secondByte(): number;
    toString(): string;
    value(): number;
    value(arg0: number): LongBytePair;
    valueByte(): number;
}