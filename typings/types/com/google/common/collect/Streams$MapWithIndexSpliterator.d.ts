import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Spliterator } from '../../../../java/util/Spliterator.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Streams$MapWithIndexSpliterator<F extends Spliterator<Object>, R extends Object | number | string | boolean, S extends Streams$MapWithIndexSpliterator<F, R, S>> extends Object implements Spliterator<R> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(fromSpliterator: F, index: number)
    // private fromSpliterator: F;
    // private index: number;
    characteristics(): number;
    createSplit(from: F, i: number): S;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: T) => void): void;
    getComparator(): (param0: T) => kotlin.Boolean;
    getExactSizeIfKnown(): number;
    hasCharacteristics(arg0: number): boolean;
    trySplit(): S;
}