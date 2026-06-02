import type { FloatBigSpliterators$AbstractIndexBasedSpliterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatBigSpliterators$AbstractIndexBasedSpliterator.d.ts'
export abstract class FloatBigSpliterators$EarlyBindingSizeIndexBasedSpliterator extends FloatBigSpliterators$AbstractIndexBasedSpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: number, arg1: number)
    // private maxPos: number;
    getMaxPos(): number;
}