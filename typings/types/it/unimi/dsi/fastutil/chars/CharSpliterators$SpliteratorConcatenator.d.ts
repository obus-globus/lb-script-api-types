import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharSpliterators$SpliteratorConcatenator extends Object implements CharSpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: CharSpliterator[], arg1: number, arg2: number)
    // private a: CharSpliterator[];
    // private characteristics: number;
    // private length: number;
    // private offset: number;
    // private remainingEstimatedExceptCurrent: number;
    // private advanceNextSpliterator(): void;
    characteristics(): number;
    // private computeCharacteristics(): number;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: string) => void): void;
    getComparator(): (param0: string, param1: string) => number;
    // private recomputeRemaining(): number;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: string) => void): boolean;
    trySplit(): CharSpliterator;
}