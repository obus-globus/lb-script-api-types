import type { IntSpliterators$LateBindingSizeIndexBasedSpliterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntSpliterators$LateBindingSizeIndexBasedSpliterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractIntList$IndexBasedSpliterator extends IntSpliterators$LateBindingSizeIndexBasedSpliterator {
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
    makeForSplit(arg0: number, arg1: number): AbstractIntList$IndexBasedSpliterator;
}