import type { FloatDoublePair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatDoublePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatDoubleMutablePair extends Object implements FloatDoublePair, Serializable {
    static lexComparator(): (param0: FloatDoublePair, param1: FloatDoublePair) => number;
    static of(paramarg0: number, paramarg1: number): FloatDoubleMutablePair;
    static of(paramarg0: number, paramarg1: number): FloatDoublePair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): FloatDoublePair;
    firstFloat(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): FloatDoublePair;
    keyFloat(): number;
    left(): number;
    left(arg0: number): FloatDoublePair;
    left(arg0: number): FloatDoubleMutablePair;
    leftFloat(): number;
    right(): number;
    right(arg0: number): FloatDoublePair;
    right(arg0: number): FloatDoubleMutablePair;
    rightDouble(): number;
    second(): number;
    second(arg0: number): FloatDoublePair;
    secondDouble(): number;
    toString(): string;
    value(): number;
    value(arg0: number): FloatDoublePair;
    valueDouble(): number;
}