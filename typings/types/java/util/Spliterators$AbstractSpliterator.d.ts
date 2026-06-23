import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Spliterator } from '../../java/util/Spliterator.d.ts'
import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class Spliterators$AbstractSpliterator<T extends unknown> extends Object implements Spliterator<T> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: number, arg1: number)
    // private batch: number;
    // private characteristics: number;
    // private est: number;
    characteristics(): number;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: T) => void): void;
    getComparator(): (param0: Object) => boolean;
    getExactSizeIfKnown(): number;
    hasCharacteristics(arg0: number): boolean;
    trySplit(): Spliterator<T>;
}