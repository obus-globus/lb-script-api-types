import type { LongBigSpliterators$AbstractIndexBasedSpliterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongBigSpliterators$AbstractIndexBasedSpliterator.d.ts'
import type { LongSpliterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongSpliterator.d.ts'
export abstract class LongBigSpliterators$LateBindingSizeIndexBasedSpliterator extends LongBigSpliterators$AbstractIndexBasedSpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: number)
    constructor(arg0: number, arg1: number)
    // private maxPos: number;
    // private maxPosFixed: boolean;
    getMaxPos(): number;
    getMaxPosFromBackingStore(): number;
    trySplit(): LongSpliterator;
}