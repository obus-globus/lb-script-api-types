import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { ObjectSpliterators$SpliteratorWrapper } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterators$SpliteratorWrapper.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Spliterator } from '../../../../../java/util/Spliterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectSpliterators$SpliteratorWrapperWithComparator<K extends unknown> extends ObjectSpliterators$SpliteratorWrapper<K> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: Spliterator<K>, arg1: (param0: K, param1: K) => number)
    readonly comparator: (param0: K, param1: K) => number;
    getComparator(): (param0: K, param1: K) => number;
    trySplit(): ObjectSpliterator<K>;
}