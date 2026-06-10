import type { LongComparator } from '../../../../../it/unimi/dsi/fastutil/longs/LongComparator.d.ts'
import type { LongSpliterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongSpliterator.d.ts'
import type { LongSpliterators$PrimitiveSpliteratorWrapper } from '../../../../../it/unimi/dsi/fastutil/longs/LongSpliterators$PrimitiveSpliteratorWrapper.d.ts'
import type { Spliterator$OfLong } from '../../../../../java/util/Spliterator$OfLong.d.ts'
export class LongSpliterators$PrimitiveSpliteratorWrapperWithComparator extends LongSpliterators$PrimitiveSpliteratorWrapper {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: Spliterator$OfLong, arg1: (param0: number, param1: number) => number)
    readonly comparator: (param0: number, param1: number) => number;
    getComparator(): (param0: number, param1: number) => number;
    trySplit(): LongSpliterator;
}