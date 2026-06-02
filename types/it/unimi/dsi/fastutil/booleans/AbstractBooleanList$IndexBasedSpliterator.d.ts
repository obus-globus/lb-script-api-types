import type { BooleanSpliterators$LateBindingSizeIndexBasedSpliterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanSpliterators$LateBindingSizeIndexBasedSpliterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractBooleanList$IndexBasedSpliterator extends BooleanSpliterators$LateBindingSizeIndexBasedSpliterator {
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
    get(arg0: number): boolean;
    getMaxPosFromBackingStore(): number;
    makeForSplit(arg0: number, arg1: number): AbstractBooleanList$IndexBasedSpliterator;
}