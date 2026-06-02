import type { ObjectSpliterators$ArraySpliterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectSpliterators$ArraySpliterator.d.ts'
import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ObjectSpliterators$ArraySpliteratorWithComparator<K extends Object | number | string | boolean> extends ObjectSpliterators$ArraySpliterator<K> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: K[], arg1: number, arg2: number, arg3: number, arg4: (param0: K) => kotlin.Boolean)
    readonly comparator: (param0: K) => kotlin.Boolean;
    getComparator(): (param0: K) => kotlin.Boolean;
    makeForSplit(arg0: number, arg1: number): ObjectSpliterators$ArraySpliteratorWithComparator<K>;
}