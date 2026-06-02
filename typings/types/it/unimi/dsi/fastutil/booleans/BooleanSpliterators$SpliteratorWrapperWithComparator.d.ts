import type { BooleanComparator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanComparator.d.ts'
import type { BooleanSpliterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanSpliterator.d.ts'
import type { BooleanSpliterators$SpliteratorWrapper } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanSpliterators$SpliteratorWrapper.d.ts'
import type { Spliterator } from '../../../../../java/util/Spliterator.d.ts'
export class BooleanSpliterators$SpliteratorWrapperWithComparator extends BooleanSpliterators$SpliteratorWrapper {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: Spliterator<boolean>, arg1: (param0: boolean, param1: boolean) => kotlin.Int)
    readonly comparator: (param0: boolean, param1: boolean) => kotlin.Int;
    getComparator(): (param0: boolean, param1: boolean) => kotlin.Int;
    trySplit(): BooleanSpliterator;
}