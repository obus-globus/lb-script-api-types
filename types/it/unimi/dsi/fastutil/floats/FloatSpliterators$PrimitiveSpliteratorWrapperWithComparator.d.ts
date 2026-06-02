import type { FloatComparator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatComparator.d.ts'
import type { FloatSpliterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatSpliterator.d.ts'
import type { FloatSpliterators$PrimitiveSpliteratorWrapper } from '../../../../../it/unimi/dsi/fastutil/floats/FloatSpliterators$PrimitiveSpliteratorWrapper.d.ts'
import type { Spliterator$OfDouble } from '../../../../../java/util/Spliterator$OfDouble.d.ts'
export class FloatSpliterators$PrimitiveSpliteratorWrapperWithComparator extends FloatSpliterators$PrimitiveSpliteratorWrapper {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: Spliterator$OfDouble, arg1: (param0: number, param1: number) => kotlin.Int)
    readonly comparator: (param0: number, param1: number) => kotlin.Int;
    getComparator(): (param0: number, param1: number) => kotlin.Int;
    trySplit(): FloatSpliterator;
}