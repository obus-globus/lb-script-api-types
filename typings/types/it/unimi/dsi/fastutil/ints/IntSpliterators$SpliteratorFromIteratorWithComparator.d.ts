import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { IntIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntIterator.d.ts'
import type { IntSpliterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntSpliterator.d.ts'
import type { IntSpliterators$SpliteratorFromIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntSpliterators$SpliteratorFromIterator.d.ts'
export class IntSpliterators$SpliteratorFromIteratorWithComparator extends IntSpliterators$SpliteratorFromIterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: IntIterator, arg1: number, arg2: (param0: number, param1: number) => number)
    constructor(arg0: IntIterator, arg1: number, arg2: number, arg3: (param0: number, param1: number) => number)
    readonly comparator: (param0: number, param1: number) => number;
    getComparator(): (param0: number, param1: number) => number;
    makeForSplit(arg0: number[], arg1: number): IntSpliterator;
}