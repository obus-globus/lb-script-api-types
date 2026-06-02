import type { ShortSpliterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortSpliterator.d.ts'
import type { ShortSpliterators$AbstractIndexBasedSpliterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortSpliterators$AbstractIndexBasedSpliterator.d.ts'
export abstract class ShortSpliterators$LateBindingSizeIndexBasedSpliterator extends ShortSpliterators$AbstractIndexBasedSpliterator {
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
    trySplit(): ShortSpliterator;
}