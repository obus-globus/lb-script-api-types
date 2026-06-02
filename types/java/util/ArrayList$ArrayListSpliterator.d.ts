import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Spliterator } from '../../java/util/Spliterator.d.ts'
import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ArrayList$ArrayListSpliterator extends Object implements Spliterator<E> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: ArrayList$ArrayListSpliterator, arg1: number, arg2: number, arg3: number)
    // private expectedModCount: number;
    // private fence: number;
    // private index: number;
    characteristics(): number;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: E) => void): void;
    forEachRemaining(arg0: (param0: T) => void): void;
    getComparator(): (param0: T) => kotlin.Boolean;
    getExactSizeIfKnown(): number;
    // private getFence(): number;
    hasCharacteristics(arg0: number): boolean;
    tryAdvance(arg0: (param0: E) => void): boolean;
    trySplit(): ArrayList$ArrayListSpliterator;
}