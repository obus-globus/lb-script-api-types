import type { CharCharImmutablePair } from '../../../../../it/unimi/dsi/fastutil/chars/CharCharImmutablePair.d.ts'
import type { CharCharSortedPair } from '../../../../../it/unimi/dsi/fastutil/chars/CharCharSortedPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharCharImmutableSortedPair extends CharCharImmutablePair implements CharCharSortedPair, Serializable {
    static of(paramarg0: string, paramarg1: string): CharCharImmutablePair;
    static of(paramarg0: string, paramarg1: string): CharCharImmutableSortedPair;
    static of(paramarg0: string, paramarg1: string): CharCharSortedPair;
    private constructor(arg0: string, arg1: string)
    contains(arg0: Object): boolean;
    contains(arg0: string): boolean;
    equals(arg0: Object | null): boolean;
    toString(): string;
}