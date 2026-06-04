import type { DoubleFloatPair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleFloatPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleFloatMutablePair extends Object implements DoubleFloatPair, Serializable {
    static lexComparator(): (param0: DoubleFloatPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): DoubleFloatMutablePair;
    static of(paramarg0: number, paramarg1: number): DoubleFloatPair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): DoubleFloatPair;
    firstDouble(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): DoubleFloatPair;
    keyDouble(): number;
    left(): number;
    left(arg0: number): DoubleFloatPair;
    left(arg0: number): DoubleFloatMutablePair;
    leftDouble(): number;
    right(): number;
    right(arg0: number): DoubleFloatPair;
    right(arg0: number): DoubleFloatMutablePair;
    rightFloat(): number;
    second(): number;
    second(arg0: number): DoubleFloatPair;
    secondFloat(): number;
    toString(): string;
    value(): number;
    value(arg0: number): DoubleFloatPair;
    valueFloat(): number;
}