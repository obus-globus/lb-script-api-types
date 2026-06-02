import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectSpliterators$SpliteratorFromIterator<K extends Object | number | string | boolean> extends Object implements ObjectSpliterator<K> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: ObjectIterator<K>, arg1: number)
    constructor(arg0: ObjectIterator<K>, arg1: number, arg2: number)
    // private characteristics: number;
    // private delegate: ObjectSpliterator<K>;
    // private iter: ObjectIterator<K>;
    // private knownSize: boolean;
    // private nextBatchSize: number;
    // private size: number;
    characteristics(): number;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: K) => void): void;
    makeForSplit(arg0: K[], arg1: number): ObjectSpliterator<K>;
    skip(arg0: number): number;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: K) => void): boolean;
    trySplit(): ObjectSpliterator<K>;
}