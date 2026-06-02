import type { FloatSpliterators$AbstractIndexBasedSpliterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatSpliterators$AbstractIndexBasedSpliterator.d.ts'
export abstract class FloatSpliterators$EarlyBindingSizeIndexBasedSpliterator extends FloatSpliterators$AbstractIndexBasedSpliterator {
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