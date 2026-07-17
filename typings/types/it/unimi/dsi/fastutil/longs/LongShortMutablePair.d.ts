import type { LongShortPair } from '../../../../../it/unimi/dsi/fastutil/longs/LongShortPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongShortMutablePair extends Object implements LongShortPair, Serializable {
    static of(paramarg0: number, paramarg1: number): LongShortMutablePair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongShortPair;
    firstLong(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongShortPair;
    keyLong(): number;
    left(): number;
    left(arg0: number): LongShortPair;
    left(arg0: number): LongShortMutablePair;
    leftLong(): number;
    right(): number;
    right(arg0: number): LongShortPair;
    right(arg0: number): LongShortMutablePair;
    rightShort(): number;
    second(): number;
    second(arg0: number): LongShortPair;
    secondShort(): number;
    toString(): string;
    value(): number;
    value(arg0: number): LongShortPair;
    valueShort(): number;
}