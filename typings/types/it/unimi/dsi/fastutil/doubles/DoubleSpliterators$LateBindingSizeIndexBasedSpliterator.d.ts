import type { DoubleSpliterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleSpliterator.d.ts'
import type { DoubleSpliterators$AbstractIndexBasedSpliterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleSpliterators$AbstractIndexBasedSpliterator.d.ts'
export abstract class DoubleSpliterators$LateBindingSizeIndexBasedSpliterator extends DoubleSpliterators$AbstractIndexBasedSpliterator {
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
    trySplit(): DoubleSpliterator;
}