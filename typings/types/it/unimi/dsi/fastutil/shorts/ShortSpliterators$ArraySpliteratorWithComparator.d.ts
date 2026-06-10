import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { ShortSpliterators$ArraySpliterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortSpliterators$ArraySpliterator.d.ts'
export class ShortSpliterators$ArraySpliteratorWithComparator extends ShortSpliterators$ArraySpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: number[], arg1: number, arg2: number, arg3: number, arg4: (param0: number, param1: number) => number)
    readonly comparator: (param0: number, param1: number) => number;
    getComparator(): (param0: number, param1: number) => number;
    makeForSplit(arg0: number, arg1: number): ShortSpliterators$ArraySpliteratorWithComparator;
}