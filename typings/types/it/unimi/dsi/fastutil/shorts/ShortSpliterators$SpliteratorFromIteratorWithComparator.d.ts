import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { ShortIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortIterator.d.ts'
import type { ShortSpliterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortSpliterator.d.ts'
import type { ShortSpliterators$SpliteratorFromIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortSpliterators$SpliteratorFromIterator.d.ts'
export class ShortSpliterators$SpliteratorFromIteratorWithComparator extends ShortSpliterators$SpliteratorFromIterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: ShortIterator, arg1: number, arg2: (param0: number, param1: number) => number)
    constructor(arg0: ShortIterator, arg1: number, arg2: number, arg3: (param0: number, param1: number) => number)
    readonly comparator: (param0: number, param1: number) => number;
    getComparator(): (param0: number, param1: number) => number;
    makeForSplit(arg0: number[], arg1: number): ShortSpliterator;
}