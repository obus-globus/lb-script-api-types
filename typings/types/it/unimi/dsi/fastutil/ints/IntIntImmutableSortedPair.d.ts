import type { IntIntImmutablePair } from '../../../../../it/unimi/dsi/fastutil/ints/IntIntImmutablePair.d.ts'
import type { IntIntSortedPair } from '../../../../../it/unimi/dsi/fastutil/ints/IntIntSortedPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntIntImmutableSortedPair extends IntIntImmutablePair implements IntIntSortedPair, Serializable {
    static of(paramarg0: number, paramarg1: number): IntIntImmutablePair;
    static of(paramarg0: number, paramarg1: number): IntIntImmutableSortedPair;
    static of(paramarg0: number, paramarg1: number): IntIntSortedPair;
    private constructor(arg0: number, arg1: number)
    contains(arg0: Object): boolean;
    contains(arg0: number): boolean;
    equals(arg0: Object | null): boolean;
    toString(): string;
}