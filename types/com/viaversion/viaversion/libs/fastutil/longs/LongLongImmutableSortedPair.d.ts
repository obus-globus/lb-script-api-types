import type { LongLongImmutablePair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/longs/LongLongImmutablePair.d.ts'
import type { LongLongSortedPair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/longs/LongLongSortedPair.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LongLongImmutableSortedPair extends LongLongImmutablePair implements LongLongSortedPair, Serializable {
    static of(paramarg0: number, paramarg1: number): LongLongImmutablePair;
    static of(paramarg0: number, paramarg1: number): LongLongImmutableSortedPair;
    static of(paramarg0: number, paramarg1: number): LongLongSortedPair;
    private constructor(arg0: number, arg1: number)
    contains(arg0: Object): boolean;
    contains(arg0: number): boolean;
    equals(arg0: Object | null): boolean;
    toString(): string;
}