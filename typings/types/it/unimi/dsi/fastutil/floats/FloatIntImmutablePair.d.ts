import type { FloatIntPair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatIntPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatIntImmutablePair extends Object implements FloatIntPair, Serializable {
    static lexComparator(): (param0: FloatIntPair, param1: FloatIntPair) => number;
    static of(paramarg0: number, paramarg1: number): FloatIntImmutablePair;
    static of(paramarg0: number, paramarg1: number): FloatIntPair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): FloatIntPair;
    firstFloat(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): FloatIntPair;
    keyFloat(): number;
    left(): number;
    left(arg0: number): FloatIntPair;
    leftFloat(): number;
    right(): number;
    right(arg0: number): FloatIntPair;
    rightInt(): number;
    second(): number;
    second(arg0: number): FloatIntPair;
    secondInt(): number;
    toString(): string;
    value(): number;
    value(arg0: number): FloatIntPair;
    valueInt(): number;
}