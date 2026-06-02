import type { AbstractDoubleSpliterator } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDoubleSpliterator.d.ts'
import type { DoubleSpliterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleSpliterator.d.ts'
import type { DoubleConsumer } from '../../../../../java/util/function/DoubleConsumer.d.ts'
export abstract class DoubleSpliterators$AbstractIndexBasedSpliterator extends AbstractDoubleSpliterator {
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
    forEachRemaining(arg0: (param0: number) => void): void;
    get(arg0: number): number;
    getMaxPos(): number;
    makeForSplit(arg0: number, arg1: number): DoubleSpliterator;
    skip(arg0: number): number;
    // private splitPointCheck(arg0: number, arg1: number): void;
    tryAdvance(arg0: (param0: number) => void): boolean;
    trySplit(): DoubleSpliterator;
}