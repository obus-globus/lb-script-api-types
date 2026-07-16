import type { BooleanCharPair } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanCharPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanCharImmutablePair extends Object implements BooleanCharPair, Serializable {
    static lexComparator(): (param0: BooleanCharPair, param1: BooleanCharPair) => number;
    static of(paramarg0: boolean, paramarg1: string): BooleanCharImmutablePair;
    static of(paramarg0: boolean, paramarg1: string): BooleanCharPair;
    constructor(arg0: boolean, arg1: string)
    // private left: boolean;
    // private right: string;
    equals(arg0: Object | null): boolean;
    first(): boolean;
    first(arg0: boolean): BooleanCharPair;
    firstBoolean(): boolean;
    hashCode(): number;
    key(): boolean;
    key(arg0: boolean): BooleanCharPair;
    keyBoolean(): boolean;
    left(): boolean;
    left(arg0: boolean): BooleanCharPair;
    leftBoolean(): boolean;
    right(): string;
    right(arg0: string): BooleanCharPair;
    rightChar(): string;
    second(): string;
    second(arg0: string): BooleanCharPair;
    secondChar(): string;
    toString(): string;
    value(): string;
    value(arg0: string): BooleanCharPair;
    valueChar(): string;
}