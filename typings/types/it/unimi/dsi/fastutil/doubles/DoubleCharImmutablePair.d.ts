import type { DoubleCharPair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleCharPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleCharImmutablePair extends Object implements DoubleCharPair, Serializable {
    static lexComparator(): (param0: DoubleCharPair, param1: DoubleCharPair) => number;
    static of(paramarg0: number, paramarg1: string): DoubleCharImmutablePair;
    static of(paramarg0: number, paramarg1: string): DoubleCharPair;
    constructor(arg0: number, arg1: string)
    // private left: number;
    // private right: string;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): DoubleCharPair;
    firstDouble(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): DoubleCharPair;
    keyDouble(): number;
    left(): number;
    left(arg0: number): DoubleCharPair;
    leftDouble(): number;
    right(): string;
    right(arg0: string): DoubleCharPair;
    rightChar(): string;
    second(): string;
    second(arg0: string): DoubleCharPair;
    secondChar(): string;
    toString(): string;
    value(): string;
    value(arg0: string): DoubleCharPair;
    valueChar(): string;
}