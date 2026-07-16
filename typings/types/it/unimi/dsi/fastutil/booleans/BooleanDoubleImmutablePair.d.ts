import type { BooleanDoublePair } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanDoublePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanDoubleImmutablePair extends Object implements BooleanDoublePair, Serializable {
    static lexComparator(): (param0: BooleanDoublePair, param1: BooleanDoublePair) => number;
    static of(paramarg0: boolean, paramarg1: number): BooleanDoubleImmutablePair;
    static of(paramarg0: boolean, paramarg1: number): BooleanDoublePair;
    constructor(arg0: boolean, arg1: number)
    // private left: boolean;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): boolean;
    first(arg0: boolean): BooleanDoublePair;
    firstBoolean(): boolean;
    hashCode(): number;
    key(): boolean;
    key(arg0: boolean): BooleanDoublePair;
    keyBoolean(): boolean;
    left(): boolean;
    left(arg0: boolean): BooleanDoublePair;
    leftBoolean(): boolean;
    right(): number;
    right(arg0: number): BooleanDoublePair;
    rightDouble(): number;
    second(): number;
    second(arg0: number): BooleanDoublePair;
    secondDouble(): number;
    toString(): string;
    value(): number;
    value(arg0: number): BooleanDoublePair;
    valueDouble(): number;
}