import type { DoubleComparator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleComparator.d.ts'
import type { DoubleSpliterators$ArraySpliterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleSpliterators$ArraySpliterator.d.ts'
export class DoubleSpliterators$ArraySpliteratorWithComparator extends DoubleSpliterators$ArraySpliterator {
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
    makeForSplit(arg0: number, arg1: number): DoubleSpliterators$ArraySpliteratorWithComparator;
}