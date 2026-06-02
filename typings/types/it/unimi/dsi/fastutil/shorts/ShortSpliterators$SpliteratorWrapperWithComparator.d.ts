import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { ShortSpliterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortSpliterator.d.ts'
import type { ShortSpliterators$SpliteratorWrapper } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortSpliterators$SpliteratorWrapper.d.ts'
import type { Spliterator } from '../../../../../java/util/Spliterator.d.ts'
export class ShortSpliterators$SpliteratorWrapperWithComparator extends ShortSpliterators$SpliteratorWrapper {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: Spliterator<number>, arg1: (param0: number, param1: number) => kotlin.Int)
    readonly comparator: (param0: number, param1: number) => kotlin.Int;
    getComparator(): (param0: number, param1: number) => kotlin.Int;
    trySplit(): ShortSpliterator;
}