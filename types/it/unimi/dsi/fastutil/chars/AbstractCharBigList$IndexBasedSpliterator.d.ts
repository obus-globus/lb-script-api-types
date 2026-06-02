import type { CharBigSpliterators$LateBindingSizeIndexBasedSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharBigSpliterators$LateBindingSizeIndexBasedSpliterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractCharBigList$IndexBasedSpliterator extends CharBigSpliterators$LateBindingSizeIndexBasedSpliterator {
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
    get(arg0: number): string;
    getMaxPosFromBackingStore(): number;
    makeForSplit(arg0: number, arg1: number): AbstractCharBigList$IndexBasedSpliterator;
}