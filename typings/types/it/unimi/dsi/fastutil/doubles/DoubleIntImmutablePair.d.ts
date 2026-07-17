import type { DoubleIntPair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleIntPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleIntImmutablePair extends Object implements DoubleIntPair, Serializable {
    static of(paramarg0: number, paramarg1: number): DoubleIntImmutablePair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): DoubleIntPair;
    firstDouble(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): DoubleIntPair;
    keyDouble(): number;
    left(): number;
    left(arg0: number): DoubleIntPair;
    leftDouble(): number;
    right(): number;
    right(arg0: number): DoubleIntPair;
    rightInt(): number;
    second(): number;
    second(arg0: number): DoubleIntPair;
    secondInt(): number;
    toString(): string;
    value(): number;
    value(arg0: number): DoubleIntPair;
    valueInt(): number;
}