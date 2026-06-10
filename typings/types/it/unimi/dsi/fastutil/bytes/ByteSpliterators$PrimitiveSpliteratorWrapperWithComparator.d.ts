import type { ByteComparator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteComparator.d.ts'
import type { ByteSpliterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteSpliterator.d.ts'
import type { ByteSpliterators$PrimitiveSpliteratorWrapper } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteSpliterators$PrimitiveSpliteratorWrapper.d.ts'
import type { Spliterator$OfInt } from '../../../../../java/util/Spliterator$OfInt.d.ts'
export class ByteSpliterators$PrimitiveSpliteratorWrapperWithComparator extends ByteSpliterators$PrimitiveSpliteratorWrapper {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: Spliterator$OfInt, arg1: (param0: number, param1: number) => number)
    readonly comparator: (param0: number, param1: number) => number;
    getComparator(): (param0: number, param1: number) => number;
    trySplit(): ByteSpliterator;
}