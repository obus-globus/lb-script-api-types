import type { LongComparator } from '../../../../../it/unimi/dsi/fastutil/longs/LongComparator.d.ts'
import type { LongIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongIterator.d.ts'
import type { LongSpliterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongSpliterator.d.ts'
import type { LongSpliterators$SpliteratorFromIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongSpliterators$SpliteratorFromIterator.d.ts'
export class LongSpliterators$SpliteratorFromIteratorWithComparator extends LongSpliterators$SpliteratorFromIterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: LongIterator, arg1: number, arg2: (param0: number, param1: number) => kotlin.Int)
    constructor(arg0: LongIterator, arg1: number, arg2: number, arg3: (param0: number, param1: number) => kotlin.Int)
    readonly comparator: (param0: number, param1: number) => kotlin.Int;
    getComparator(): (param0: number, param1: number) => kotlin.Int;
    makeForSplit(arg0: number[], arg1: number): LongSpliterator;
}