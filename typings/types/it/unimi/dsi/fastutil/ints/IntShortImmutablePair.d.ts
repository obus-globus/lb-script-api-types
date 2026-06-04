import type { IntShortPair } from '../../../../../it/unimi/dsi/fastutil/ints/IntShortPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntShortImmutablePair extends Object implements IntShortPair, Serializable {
    static lexComparator(): (param0: IntShortPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): IntShortImmutablePair;
    static of(paramarg0: number, paramarg1: number): IntShortPair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): IntShortPair;
    firstInt(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): IntShortPair;
    keyInt(): number;
    left(): number;
    left(arg0: number): IntShortPair;
    leftInt(): number;
    right(): number;
    right(arg0: number): IntShortPair;
    rightShort(): number;
    second(): number;
    second(arg0: number): IntShortPair;
    secondShort(): number;
    toString(): string;
    value(): number;
    value(arg0: number): IntShortPair;
    valueShort(): number;
}