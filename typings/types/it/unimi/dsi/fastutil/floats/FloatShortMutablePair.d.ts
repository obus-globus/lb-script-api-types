import type { FloatShortPair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatShortPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatShortMutablePair extends Object implements FloatShortPair, Serializable {
    static lexComparator(): (param0: FloatShortPair, param1: FloatShortPair) => number;
    static of(paramarg0: number, paramarg1: number): FloatShortMutablePair;
    static of(paramarg0: number, paramarg1: number): FloatShortPair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): FloatShortPair;
    firstFloat(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): FloatShortPair;
    keyFloat(): number;
    left(): number;
    left(arg0: number): FloatShortPair;
    left(arg0: number): FloatShortMutablePair;
    leftFloat(): number;
    right(): number;
    right(arg0: number): FloatShortPair;
    right(arg0: number): FloatShortMutablePair;
    rightShort(): number;
    second(): number;
    second(arg0: number): FloatShortPair;
    secondShort(): number;
    toString(): string;
    value(): number;
    value(arg0: number): FloatShortPair;
    valueShort(): number;
}