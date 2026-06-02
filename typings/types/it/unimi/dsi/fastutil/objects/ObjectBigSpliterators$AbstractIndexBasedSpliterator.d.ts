import type { AbstractObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObjectSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ObjectBigSpliterators$AbstractIndexBasedSpliterator<K extends Object | number | string | boolean> extends AbstractObjectSpliterator<K> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: number)
    // private pos: number;
    characteristics(): number;
    computeSplitPoint(): number;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: K) => void): void;
    get(arg0: number): K;
    getMaxPos(): number;
    makeForSplit(arg0: number, arg1: number): ObjectSpliterator<K>;
    skip(arg0: number): number;
    // private splitPointCheck(arg0: number, arg1: number): void;
    tryAdvance(arg0: (param0: K) => void): boolean;
    trySplit(): ObjectSpliterator<K>;
}