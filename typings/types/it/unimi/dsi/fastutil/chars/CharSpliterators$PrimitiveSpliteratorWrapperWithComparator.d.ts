import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { CharSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharSpliterator.d.ts'
import type { CharSpliterators$PrimitiveSpliteratorWrapper } from '../../../../../it/unimi/dsi/fastutil/chars/CharSpliterators$PrimitiveSpliteratorWrapper.d.ts'
import type { Spliterator$OfInt } from '../../../../../java/util/Spliterator$OfInt.d.ts'
export class CharSpliterators$PrimitiveSpliteratorWrapperWithComparator extends CharSpliterators$PrimitiveSpliteratorWrapper {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: Spliterator$OfInt, arg1: (param0: string, param1: string) => kotlin.Int)
    readonly comparator: (param0: string, param1: string) => kotlin.Int;
    getComparator(): (param0: string, param1: string) => kotlin.Int;
    trySplit(): CharSpliterator;
}