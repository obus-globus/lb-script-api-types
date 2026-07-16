import type { CollectSpliterators$FlatMapSpliterator$Factory } from '../../../../com/google/common/collect/CollectSpliterators$FlatMapSpliterator$Factory.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Spliterator } from '../../../../java/util/Spliterator.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class CollectSpliterators$FlatMapSpliterator<InElementT extends unknown, OutElementT extends unknown, OutSpliteratorT extends Spliterator<OutElementT>> extends Object implements Spliterator<OutElementT> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(prefix: OutSpliteratorT, from: Spliterator<InElementT>, function_: (param0: InElementT) => OutSpliteratorT, factory: CollectSpliterators$FlatMapSpliterator$Factory<InElementT, OutSpliteratorT>, characteristics: number, estimatedSize: number)
    // private characteristics: number;
    // private estimatedSize: number;
    // private factory: CollectSpliterators$FlatMapSpliterator$Factory<InElementT, OutSpliteratorT>;
    // private from: Spliterator<InElementT>;
    // private function: (param0: InElementT) => OutSpliteratorT;
    // private prefix: OutSpliteratorT;
    characteristics(): number;
    estimateSize(): number;
    forEachRemaining(action: (param0: OutElementT) => void): void;
    forEachRemaining(arg0: (param0: OutElementT) => void): void;
    getComparator(): (param0: OutElementT, param1: OutElementT) => number;
    getExactSizeIfKnown(): number;
    hasCharacteristics(arg0: number): boolean;
    tryAdvance(action: (param0: OutElementT) => void): boolean;
    trySplit(): OutSpliteratorT;
}