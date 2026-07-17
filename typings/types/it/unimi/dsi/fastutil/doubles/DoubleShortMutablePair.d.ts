import type { DoubleShortPair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleShortPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleShortMutablePair extends Object implements DoubleShortPair, Serializable {
    static of(paramarg0: number, paramarg1: number): DoubleShortMutablePair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): DoubleShortPair;
    firstDouble(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): DoubleShortPair;
    keyDouble(): number;
    left(): number;
    left(arg0: number): DoubleShortPair;
    left(arg0: number): DoubleShortMutablePair;
    leftDouble(): number;
    right(): number;
    right(arg0: number): DoubleShortPair;
    right(arg0: number): DoubleShortMutablePair;
    rightShort(): number;
    second(): number;
    second(arg0: number): DoubleShortPair;
    secondShort(): number;
    toString(): string;
    value(): number;
    value(arg0: number): DoubleShortPair;
    valueShort(): number;
}