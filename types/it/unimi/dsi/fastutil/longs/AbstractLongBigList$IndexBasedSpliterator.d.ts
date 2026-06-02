import type { LongBigSpliterators$LateBindingSizeIndexBasedSpliterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongBigSpliterators$LateBindingSizeIndexBasedSpliterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractLongBigList$IndexBasedSpliterator extends LongBigSpliterators$LateBindingSizeIndexBasedSpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: (Object | null)[], arg1: number)
    constructor(arg0: (Object | null)[], arg1: number, arg2: number)
    // private l: (Object | null)[];
    get(arg0: number): number;
    getMaxPosFromBackingStore(): number;
    makeForSplit(arg0: number, arg1: number): AbstractLongBigList$IndexBasedSpliterator;
}