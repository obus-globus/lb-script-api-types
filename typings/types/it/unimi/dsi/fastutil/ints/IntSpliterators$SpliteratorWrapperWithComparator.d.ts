import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { IntSpliterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntSpliterator.d.ts'
import type { IntSpliterators$SpliteratorWrapper } from '../../../../../it/unimi/dsi/fastutil/ints/IntSpliterators$SpliteratorWrapper.d.ts'
import type { Spliterator } from '../../../../../java/util/Spliterator.d.ts'
export class IntSpliterators$SpliteratorWrapperWithComparator extends IntSpliterators$SpliteratorWrapper {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: Spliterator<number>, arg1: (param0: number, param1: number) => number)
    readonly comparator: (param0: number, param1: number) => number;
    getComparator(): (param0: number, param1: number) => number;
    trySplit(): IntSpliterator;
}