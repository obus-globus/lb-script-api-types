import type { IntFloatPair } from '../../../../../it/unimi/dsi/fastutil/ints/IntFloatPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntFloatImmutablePair extends Object implements IntFloatPair, Serializable {
    static lexComparator(): (param0: IntFloatPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): IntFloatImmutablePair;
    static of(paramarg0: number, paramarg1: number): IntFloatPair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): IntFloatPair;
    firstInt(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): IntFloatPair;
    keyInt(): number;
    left(): number;
    left(arg0: number): IntFloatPair;
    leftInt(): number;
    right(): number;
    right(arg0: number): IntFloatPair;
    rightFloat(): number;
    second(): number;
    second(arg0: number): IntFloatPair;
    secondFloat(): number;
    toString(): string;
    value(): number;
    value(arg0: number): IntFloatPair;
    valueFloat(): number;
}