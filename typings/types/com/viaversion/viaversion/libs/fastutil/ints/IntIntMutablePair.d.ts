import type { IntIntPair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/IntIntPair.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IntIntMutablePair extends Object implements IntIntPair, Serializable {
    static of(paramarg0: number, paramarg1: number): IntIntMutablePair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): IntIntPair;
    firstInt(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): IntIntPair;
    keyInt(): number;
    left(): number;
    left(arg0: number): IntIntPair;
    left(arg0: number): IntIntMutablePair;
    leftInt(): number;
    right(): number;
    right(arg0: number): IntIntPair;
    right(arg0: number): IntIntMutablePair;
    rightInt(): number;
    second(): number;
    second(arg0: number): IntIntPair;
    secondInt(): number;
    toString(): string;
    value(): number;
    value(arg0: number): IntIntPair;
    valueInt(): number;
}