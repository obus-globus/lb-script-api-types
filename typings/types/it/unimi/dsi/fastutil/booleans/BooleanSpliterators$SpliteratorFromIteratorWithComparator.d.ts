import type { BooleanComparator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanComparator.d.ts'
import type { BooleanIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanIterator.d.ts'
import type { BooleanSpliterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanSpliterator.d.ts'
import type { BooleanSpliterators$SpliteratorFromIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanSpliterators$SpliteratorFromIterator.d.ts'
export class BooleanSpliterators$SpliteratorFromIteratorWithComparator extends BooleanSpliterators$SpliteratorFromIterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: BooleanIterator, arg1: number, arg2: (param0: boolean, param1: boolean) => number)
    constructor(arg0: BooleanIterator, arg1: number, arg2: number, arg3: (param0: boolean, param1: boolean) => number)
    readonly comparator: (param0: boolean, param1: boolean) => number;
    getComparator(): (param0: boolean, param1: boolean) => number;
    makeForSplit(arg0: boolean[], arg1: number): BooleanSpliterator;
}