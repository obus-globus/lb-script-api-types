import type { FloatSpliterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatSpliterator.d.ts'
import type { FloatSpliterators$AbstractIndexBasedSpliterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatSpliterators$AbstractIndexBasedSpliterator.d.ts'
export abstract class FloatSpliterators$LateBindingSizeIndexBasedSpliterator extends FloatSpliterators$AbstractIndexBasedSpliterator {
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
    trySplit(): FloatSpliterator;
}