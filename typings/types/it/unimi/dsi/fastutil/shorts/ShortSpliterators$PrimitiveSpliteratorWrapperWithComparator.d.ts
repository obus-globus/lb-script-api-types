import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { ShortSpliterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortSpliterator.d.ts'
import type { ShortSpliterators$PrimitiveSpliteratorWrapper } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortSpliterators$PrimitiveSpliteratorWrapper.d.ts'
import type { Spliterator$OfInt } from '../../../../../java/util/Spliterator$OfInt.d.ts'
export class ShortSpliterators$PrimitiveSpliteratorWrapperWithComparator extends ShortSpliterators$PrimitiveSpliteratorWrapper {
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
    trySplit(): ShortSpliterator;
}