import type { ObjectSpliterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectSpliterator.d.ts'
import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ObjectSpliterators$SingletonSpliterator<K extends unknown> extends Object implements ObjectSpliterator<K> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: K)
    constructor(arg0: K, arg1: (param0: K, param1: K) => number)
    readonly comparator: (param0: K, param1: K) => number;
    // private consumed: boolean;
    // private element: K;
    characteristics(): number;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: K) => void): void;
    getComparator(): (param0: K, param1: K) => number;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: K) => void): boolean;
    trySplit(): ObjectSpliterator<K>;
}