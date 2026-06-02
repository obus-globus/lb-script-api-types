import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharIterator.d.ts'
import type { CharSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharSpliterators$SpliteratorFromIterator extends Object implements CharSpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: CharIterator, arg1: number)
    constructor(arg0: CharIterator, arg1: number, arg2: number)
    // private characteristics: number;
    // private delegate: CharSpliterator;
    // private iter: CharIterator;
    // private knownSize: boolean;
    // private nextBatchSize: number;
    // private size: number;
    characteristics(): number;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: string) => void): void;
    forEachRemaining(arg0: (param0: string) => void): void;
    getComparator(): (param0: string, param1: string) => kotlin.Int;
    makeForSplit(arg0: string[], arg1: number): CharSpliterator;
    skip(arg0: number): number;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: string) => void): boolean;
    tryAdvance(arg0: (param0: string) => void): boolean;
    trySplit(): CharSpliterator;
}