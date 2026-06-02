import type { LongIntPair } from '../../../../../it/unimi/dsi/fastutil/longs/LongIntPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongIntMutablePair extends Object implements LongIntPair, Serializable {
    static lexComparator(): (param0: LongIntPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): LongIntMutablePair;
    static of(paramarg0: number, paramarg1: number): LongIntPair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongIntPair;
    first(arg0: number): LongIntPair;
    firstLong(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongIntPair;
    key(arg0: number): LongIntPair;
    keyLong(): number;
    left(arg0: number): LongIntMutablePair;
    left(): number;
    left(arg0: number): LongIntPair;
    left(arg0: number): LongIntPair;
    leftLong(): number;
    right(arg0: number): LongIntMutablePair;
    right(): number;
    right(arg0: number): LongIntPair;
    right(arg0: number): LongIntPair;
    rightInt(): number;
    second(): number;
    second(arg0: number): LongIntPair;
    second(arg0: number): LongIntPair;
    secondInt(): number;
    toString(): string;
    value(): number;
    value(arg0: number): LongIntPair;
    value(arg0: number): LongIntPair;
    valueInt(): number;
}