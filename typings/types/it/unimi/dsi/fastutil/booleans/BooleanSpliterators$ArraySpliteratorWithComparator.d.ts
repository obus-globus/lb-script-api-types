import type { BooleanComparator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanComparator.d.ts'
import type { BooleanSpliterators$ArraySpliterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanSpliterators$ArraySpliterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanSpliterators$ArraySpliteratorWithComparator extends BooleanSpliterators$ArraySpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: (Object | null)[], arg1: number, arg2: number, arg3: number, arg4: (param0: boolean, param1: boolean) => kotlin.Int)
    readonly comparator: (param0: boolean, param1: boolean) => kotlin.Int;
    getComparator(): (param0: boolean, param1: boolean) => kotlin.Int;
    makeForSplit(arg0: number, arg1: number): BooleanSpliterators$ArraySpliteratorWithComparator;
}