import type { CharCharPair } from '../../../../../it/unimi/dsi/fastutil/chars/CharCharPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharCharMutablePair extends Object implements CharCharPair, Serializable {
    static lexComparator(): (param0: CharCharPair) => kotlin.Boolean;
    static of(paramarg0: string, paramarg1: string): CharCharMutablePair;
    static of(paramarg0: string, paramarg1: string): CharCharPair;
    constructor(arg0: string, arg1: string)
    // private left: string;
    // private right: string;
    equals(arg0: Object | null): boolean;
    first(): string;
    first(arg0: string): CharCharPair;
    first(arg0: string): CharCharPair;
    firstChar(): string;
    hashCode(): number;
    key(): string;
    key(arg0: string): CharCharPair;
    key(arg0: string): CharCharPair;
    keyChar(): string;
    left(): string;
    left(arg0: string): CharCharPair;
    left(arg0: string): CharCharMutablePair;
    left(): string;
    left(arg0: string): CharCharPair;
    left(arg0: string): CharCharPair;
    leftChar(): string;
    right(): string;
    right(arg0: string): CharCharPair;
    right(arg0: string): CharCharMutablePair;
    right(): string;
    right(arg0: string): CharCharPair;
    right(arg0: string): CharCharPair;
    rightChar(): string;
    second(): string;
    second(arg0: string): CharCharPair;
    second(arg0: string): CharCharPair;
    secondChar(): string;
    toString(): string;
    value(): string;
    value(arg0: string): CharCharPair;
    value(arg0: string): CharCharPair;
    valueChar(): string;
}