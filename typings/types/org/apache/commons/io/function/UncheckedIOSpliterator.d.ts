import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Spliterator } from '../../../../../java/util/Spliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IOSpliterator } from '../../../../../org/apache/commons/io/function/IOSpliterator.d.ts'
export class UncheckedIOSpliterator<T extends unknown> extends Object implements Spliterator<T> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: IOSpliterator<T>)
    // private delegate: IOSpliterator<T>;
    characteristics(): number;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: T) => void): void;
    getComparator(): (param0: T, param1: T) => number;
    getExactSizeIfKnown(): number;
    hasCharacteristics(arg0: number): boolean;
    tryAdvance(arg0: (param0: T) => void): boolean;
    trySplit(): Spliterator<T>;
}