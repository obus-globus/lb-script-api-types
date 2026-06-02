import type { BooleanBigSpliterators$AbstractIndexBasedSpliterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanBigSpliterators$AbstractIndexBasedSpliterator.d.ts'
import type { BooleanSpliterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanSpliterator.d.ts'
export abstract class BooleanBigSpliterators$LateBindingSizeIndexBasedSpliterator extends BooleanBigSpliterators$AbstractIndexBasedSpliterator {
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
    trySplit(): BooleanSpliterator;
}