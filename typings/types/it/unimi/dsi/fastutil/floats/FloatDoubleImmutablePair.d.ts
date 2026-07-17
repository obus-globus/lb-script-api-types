import type { FloatDoublePair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatDoublePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatDoubleImmutablePair extends Object implements FloatDoublePair, Serializable {
    static of(paramarg0: number, paramarg1: number): FloatDoubleImmutablePair;
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
    leftFloat(): number;
    right(): number;
    right(arg0: number): FloatDoublePair;
    rightDouble(): number;
    second(): number;
    second(arg0: number): FloatDoublePair;
    secondDouble(): number;
    toString(): string;
    value(): number;
    value(arg0: number): FloatDoublePair;
    valueDouble(): number;
}