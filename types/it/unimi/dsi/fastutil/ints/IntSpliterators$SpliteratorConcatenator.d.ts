import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { IntConsumer } from '../../../../../it/unimi/dsi/fastutil/ints/IntConsumer.d.ts'
import type { IntSpliterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntSpliterators$SpliteratorConcatenator extends Object implements IntSpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: IntSpliterator[], arg1: number, arg2: number)
    // private a: IntSpliterator[];
    // private characteristics: number;
    // private length: number;
    // private offset: number;
    // private remainingEstimatedExceptCurrent: number;
    // private advanceNextSpliterator(): void;
    characteristics(): number;
    // private computeCharacteristics(): number;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    getComparator(): (param0: number, param1: number) => kotlin.Int;
    getComparator(): (param0: number, param1: number) => kotlin.Int;
    // private recomputeRemaining(): number;
    skip(arg0: number): number;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: number) => void): boolean;
    tryAdvance(arg0: (param0: number) => void): boolean;
    tryAdvance(arg0: (param0: number) => void): boolean;
    trySplit(): IntSpliterator;
}