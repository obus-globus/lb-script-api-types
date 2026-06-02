import type { LongComparator } from '../../../../../it/unimi/dsi/fastutil/longs/LongComparator.d.ts'
import type { LongSpliterators$ArraySpliterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongSpliterators$ArraySpliterator.d.ts'
export class LongSpliterators$ArraySpliteratorWithComparator extends LongSpliterators$ArraySpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: number[], arg1: number, arg2: number, arg3: number, arg4: (param0: number, param1: number) => kotlin.Int)
    readonly comparator: (param0: number, param1: number) => kotlin.Int;
    getComparator(): (param0: number, param1: number) => kotlin.Int;
    makeForSplit(arg0: number, arg1: number): LongSpliterators$ArraySpliteratorWithComparator;
}