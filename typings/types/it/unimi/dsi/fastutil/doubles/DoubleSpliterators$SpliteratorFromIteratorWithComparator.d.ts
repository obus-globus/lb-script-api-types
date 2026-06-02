import type { DoubleComparator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleComparator.d.ts'
import type { DoubleIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleIterator.d.ts'
import type { DoubleSpliterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleSpliterator.d.ts'
import type { DoubleSpliterators$SpliteratorFromIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleSpliterators$SpliteratorFromIterator.d.ts'
export class DoubleSpliterators$SpliteratorFromIteratorWithComparator extends DoubleSpliterators$SpliteratorFromIterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: DoubleIterator, arg1: number, arg2: (param0: number, param1: number) => kotlin.Int)
    constructor(arg0: DoubleIterator, arg1: number, arg2: number, arg3: (param0: number, param1: number) => kotlin.Int)
    readonly comparator: (param0: number, param1: number) => kotlin.Int;
    getComparator(): (param0: number, param1: number) => kotlin.Int;
    makeForSplit(arg0: number[], arg1: number): DoubleSpliterator;
}