import type { IntSpliterators$AbstractIndexBasedSpliterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntSpliterators$AbstractIndexBasedSpliterator.d.ts'
export abstract class IntSpliterators$EarlyBindingSizeIndexBasedSpliterator extends IntSpliterators$AbstractIndexBasedSpliterator {
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