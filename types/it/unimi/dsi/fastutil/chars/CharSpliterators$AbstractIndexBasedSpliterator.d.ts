import type { AbstractCharSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractCharSpliterator.d.ts'
import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharSpliterator.d.ts'
export abstract class CharSpliterators$AbstractIndexBasedSpliterator extends AbstractCharSpliterator {
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
    forEachRemaining(arg0: (param0: string) => void): void;
    get(arg0: number): string;
    getMaxPos(): number;
    makeForSplit(arg0: number, arg1: number): CharSpliterator;
    skip(arg0: number): number;
    // private splitPointCheck(arg0: number, arg1: number): void;
    tryAdvance(arg0: (param0: string) => void): boolean;
    trySplit(): CharSpliterator;
}