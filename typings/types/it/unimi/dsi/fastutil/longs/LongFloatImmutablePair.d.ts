import type { LongFloatPair } from '../../../../../it/unimi/dsi/fastutil/longs/LongFloatPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongFloatImmutablePair extends Object implements LongFloatPair, Serializable {
    static lexComparator(): (param0: LongFloatPair, param1: LongFloatPair) => number;
    static of(paramarg0: number, paramarg1: number): LongFloatImmutablePair;
    static of(paramarg0: number, paramarg1: number): LongFloatPair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongFloatPair;
    firstLong(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongFloatPair;
    keyLong(): number;
    left(): number;
    left(arg0: number): LongFloatPair;
    leftLong(): number;
    right(): number;
    right(arg0: number): LongFloatPair;
    rightFloat(): number;
    second(): number;
    second(arg0: number): LongFloatPair;
    secondFloat(): number;
    toString(): string;
    value(): number;
    value(arg0: number): LongFloatPair;
    valueFloat(): number;
}