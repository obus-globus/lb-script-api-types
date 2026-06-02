import type { FloatComparator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatComparator.d.ts'
import type { FloatIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatIterator.d.ts'
import type { FloatSpliterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatSpliterator.d.ts'
import type { FloatSpliterators$SpliteratorFromIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatSpliterators$SpliteratorFromIterator.d.ts'
export class FloatSpliterators$SpliteratorFromIteratorWithComparator extends FloatSpliterators$SpliteratorFromIterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: FloatIterator, arg1: number, arg2: (param0: number, param1: number) => kotlin.Int)
    constructor(arg0: FloatIterator, arg1: number, arg2: number, arg3: (param0: number, param1: number) => kotlin.Int)
    readonly comparator: (param0: number, param1: number) => kotlin.Int;
    getComparator(): (param0: number, param1: number) => kotlin.Int;
    makeForSplit(arg0: number[], arg1: number): FloatSpliterator;
}