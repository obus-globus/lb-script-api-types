import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { IntSpliterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntSpliterator.d.ts'
import type { IntSpliterators$PrimitiveSpliteratorWrapper } from '../../../../../it/unimi/dsi/fastutil/ints/IntSpliterators$PrimitiveSpliteratorWrapper.d.ts'
import type { Spliterator$OfInt } from '../../../../../java/util/Spliterator$OfInt.d.ts'
export class IntSpliterators$PrimitiveSpliteratorWrapperWithComparator extends IntSpliterators$PrimitiveSpliteratorWrapper {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: Spliterator$OfInt, arg1: (param0: number, param1: number) => number)
    readonly comparator: (param0: number, param1: number) => number;
    getComparator(): (param0: number, param1: number) => number;
    trySplit(): IntSpliterator;
}