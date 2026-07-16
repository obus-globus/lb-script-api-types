import type { FloatFloatPair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatFloatPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatFloatMutablePair extends Object implements FloatFloatPair, Serializable {
    static lexComparator(): (param0: FloatFloatPair, param1: FloatFloatPair) => number;
    static of(paramarg0: number, paramarg1: number): FloatFloatMutablePair;
    static of(paramarg0: number, paramarg1: number): FloatFloatPair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): FloatFloatPair;
    firstFloat(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): FloatFloatPair;
    keyFloat(): number;
    left(): number;
    left(arg0: number): FloatFloatPair;
    left(arg0: number): FloatFloatMutablePair;
    leftFloat(): number;
    right(): number;
    right(arg0: number): FloatFloatPair;
    right(arg0: number): FloatFloatMutablePair;
    rightFloat(): number;
    second(): number;
    second(arg0: number): FloatFloatPair;
    secondFloat(): number;
    toString(): string;
    value(): number;
    value(arg0: number): FloatFloatPair;
    valueFloat(): number;
}