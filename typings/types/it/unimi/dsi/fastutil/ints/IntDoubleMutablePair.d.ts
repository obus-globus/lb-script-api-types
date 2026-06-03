import type { IntDoublePair } from '../../../../../it/unimi/dsi/fastutil/ints/IntDoublePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntDoubleMutablePair extends Object implements IntDoublePair, Serializable {
    static lexComparator(): (param0: IntDoublePair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): IntDoubleMutablePair;
    static of(paramarg0: number, paramarg1: number): IntDoublePair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): IntDoublePair;
    first(arg0: number): IntDoublePair;
    firstInt(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): IntDoublePair;
    key(arg0: number): IntDoublePair;
    keyInt(): number;
    left(): number;
    left(arg0: number): IntDoublePair;
    left(arg0: number): IntDoubleMutablePair;
    left(): number;
    left(arg0: number): IntDoublePair;
    left(arg0: number): IntDoublePair;
    leftInt(): number;
    right(): number;
    right(arg0: number): IntDoublePair;
    right(arg0: number): IntDoubleMutablePair;
    right(): number;
    right(arg0: number): IntDoublePair;
    right(arg0: number): IntDoublePair;
    rightDouble(): number;
    second(): number;
    second(arg0: number): IntDoublePair;
    second(arg0: number): IntDoublePair;
    secondDouble(): number;
    toString(): string;
    value(): number;
    value(arg0: number): IntDoublePair;
    value(arg0: number): IntDoublePair;
    valueDouble(): number;
}