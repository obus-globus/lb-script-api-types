import type { ShortShortImmutablePair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortShortImmutablePair.d.ts'
import type { ShortShortSortedPair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortShortSortedPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortShortImmutableSortedPair extends ShortShortImmutablePair implements ShortShortSortedPair, Serializable {
    static of(paramarg0: number, paramarg1: number): ShortShortImmutablePair;
    static of(paramarg0: number, paramarg1: number): ShortShortImmutableSortedPair;
    private constructor(arg0: number, arg1: number)
    contains(arg0: Object): boolean;
    contains(arg0: number): boolean;
    equals(arg0: Object | null): boolean;
    toString(): string;
}