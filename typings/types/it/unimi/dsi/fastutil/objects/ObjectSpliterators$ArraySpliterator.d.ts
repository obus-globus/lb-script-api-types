import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectSpliterators$ArraySpliterator<K extends unknown> extends Object implements ObjectSpliterator<K> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: K[], arg1: number, arg2: number, arg3: number)
    // private array: K[];
    // private characteristics: number;
    // private curr: number;
    // private length: number;
    // private offset: number;
    characteristics(): number;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: K) => void): void;
    makeForSplit(arg0: number, arg1: number): ObjectSpliterators$ArraySpliterator<K>;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: K) => void): boolean;
    trySplit(): ObjectSpliterator<K>;
}