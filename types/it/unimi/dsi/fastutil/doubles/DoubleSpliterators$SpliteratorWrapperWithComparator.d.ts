import type { DoubleComparator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleComparator.d.ts'
import type { DoubleSpliterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleSpliterator.d.ts'
import type { DoubleSpliterators$SpliteratorWrapper } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleSpliterators$SpliteratorWrapper.d.ts'
import type { Spliterator } from '../../../../../java/util/Spliterator.d.ts'
export class DoubleSpliterators$SpliteratorWrapperWithComparator extends DoubleSpliterators$SpliteratorWrapper {
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
    trySplit(): DoubleSpliterator;
}