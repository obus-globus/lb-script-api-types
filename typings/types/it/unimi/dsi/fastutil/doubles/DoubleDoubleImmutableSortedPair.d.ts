import type { DoubleDoubleImmutablePair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleDoubleImmutablePair.d.ts'
import type { DoubleDoubleSortedPair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleDoubleSortedPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleDoubleImmutableSortedPair extends DoubleDoubleImmutablePair implements DoubleDoubleSortedPair, Serializable {
    static of(paramarg0: number, paramarg1: number): DoubleDoubleImmutablePair;
    static of(paramarg0: number, paramarg1: number): DoubleDoubleImmutableSortedPair;
    private constructor(arg0: number, arg1: number)
    contains(arg0: Object): boolean;
    contains(arg0: number): boolean;
    equals(arg0: Object | null): boolean;
    toString(): string;
}