import type { ByteComparator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteComparator.d.ts'
import type { ByteSpliterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteSpliterator.d.ts'
import type { ByteSpliterators$SpliteratorWrapper } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteSpliterators$SpliteratorWrapper.d.ts'
import type { Spliterator } from '../../../../../java/util/Spliterator.d.ts'
export class ByteSpliterators$SpliteratorWrapperWithComparator extends ByteSpliterators$SpliteratorWrapper {
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
    trySplit(): ByteSpliterator;
}