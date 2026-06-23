import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { ObjectSpliterators$SpliteratorFromIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterators$SpliteratorFromIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectSpliterators$SpliteratorFromIteratorWithComparator<K extends unknown> extends ObjectSpliterators$SpliteratorFromIterator<K> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: ObjectIterator<K>, arg1: number, arg2: (param0: Object) => boolean)
    constructor(arg0: ObjectIterator<K>, arg1: number, arg2: number, arg3: (param0: Object) => boolean)
    readonly comparator: (param0: Object) => boolean;
    getComparator(): (param0: Object) => boolean;
    makeForSplit(arg0: K[], arg1: number): ObjectSpliterator<K>;
}