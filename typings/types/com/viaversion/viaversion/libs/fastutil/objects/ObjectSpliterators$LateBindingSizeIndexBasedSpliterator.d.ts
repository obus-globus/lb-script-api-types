import type { ObjectSpliterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectSpliterator.d.ts'
import type { ObjectSpliterators$AbstractIndexBasedSpliterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectSpliterators$AbstractIndexBasedSpliterator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ObjectSpliterators$LateBindingSizeIndexBasedSpliterator<K extends Object | number | string | boolean> extends ObjectSpliterators$AbstractIndexBasedSpliterator<K> {
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
    trySplit(): ObjectSpliterator<K>;
}