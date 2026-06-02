import type { LongSpliterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongSpliterator.d.ts'
import type { LongSpliterators$AbstractIndexBasedSpliterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongSpliterators$AbstractIndexBasedSpliterator.d.ts'
export abstract class LongSpliterators$LateBindingSizeIndexBasedSpliterator extends LongSpliterators$AbstractIndexBasedSpliterator {
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