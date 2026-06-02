import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { IntSpliterators$ArraySpliterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntSpliterators$ArraySpliterator.d.ts'
export class IntSpliterators$ArraySpliteratorWithComparator extends IntSpliterators$ArraySpliterator {
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
    makeForSplit(arg0: number, arg1: number): IntSpliterators$ArraySpliteratorWithComparator;
}