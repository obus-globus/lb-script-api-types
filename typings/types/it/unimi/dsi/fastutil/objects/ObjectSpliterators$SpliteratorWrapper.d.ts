import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Spliterator } from '../../../../../java/util/Spliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectSpliterators$SpliteratorWrapper<K extends Object | number | string | boolean> extends Object implements ObjectSpliterator<K> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: Spliterator<K>)
    // private i: Spliterator<K>;
    characteristics(): number;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: K) => void): void;
    getComparator(): (param0: K) => kotlin.Boolean;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: K) => void): boolean;
    trySplit(): ObjectSpliterator<K>;
}