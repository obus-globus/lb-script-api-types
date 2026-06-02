import type { FloatFloatImmutablePair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatFloatImmutablePair.d.ts'
import type { FloatFloatSortedPair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatFloatSortedPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatFloatImmutableSortedPair extends FloatFloatImmutablePair implements FloatFloatSortedPair, Serializable {
    static of(paramarg0: number, paramarg1: number): FloatFloatImmutablePair;
    static of(paramarg0: number, paramarg1: number): FloatFloatImmutableSortedPair;
    static of(paramarg0: number, paramarg1: number): FloatFloatSortedPair;
    private constructor(arg0: number, arg1: number)
    contains(arg0: Object): boolean;
    contains(arg0: number): boolean;
    equals(arg0: Object | null): boolean;
    toString(): string;
}