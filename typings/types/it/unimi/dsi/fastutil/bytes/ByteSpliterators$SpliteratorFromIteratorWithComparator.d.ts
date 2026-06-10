import type { ByteComparator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteComparator.d.ts'
import type { ByteIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteIterator.d.ts'
import type { ByteSpliterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteSpliterator.d.ts'
import type { ByteSpliterators$SpliteratorFromIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteSpliterators$SpliteratorFromIterator.d.ts'
export class ByteSpliterators$SpliteratorFromIteratorWithComparator extends ByteSpliterators$SpliteratorFromIterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: ByteIterator, arg1: number, arg2: (param0: number, param1: number) => number)
    constructor(arg0: ByteIterator, arg1: number, arg2: number, arg3: (param0: number, param1: number) => number)
    readonly comparator: (param0: number, param1: number) => number;
    getComparator(): (param0: number, param1: number) => number;
    makeForSplit(arg0: number[], arg1: number): ByteSpliterator;
}