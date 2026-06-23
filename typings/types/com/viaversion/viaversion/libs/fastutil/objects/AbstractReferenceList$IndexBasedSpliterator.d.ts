import type { ObjectSpliterators$LateBindingSizeIndexBasedSpliterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectSpliterators$LateBindingSizeIndexBasedSpliterator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AbstractReferenceList$IndexBasedSpliterator<K extends unknown> extends ObjectSpliterators$LateBindingSizeIndexBasedSpliterator<K> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: K[], arg1: number)
    constructor(arg0: K[], arg1: number, arg2: number)
    // private l: K[];
    get(arg0: number): K;
    getMaxPosFromBackingStore(): number;
    makeForSplit(arg0: number, arg1: number): AbstractReferenceList$IndexBasedSpliterator<K>;
}