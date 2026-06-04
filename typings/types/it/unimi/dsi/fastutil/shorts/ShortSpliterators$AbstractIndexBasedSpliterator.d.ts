import type { AbstractShortSpliterator } from '../../../../../it/unimi/dsi/fastutil/shorts/AbstractShortSpliterator.d.ts'
import type { ShortConsumer } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortConsumer.d.ts'
import type { ShortSpliterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export abstract class ShortSpliterators$AbstractIndexBasedSpliterator extends AbstractShortSpliterator {
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
    makeForSplit(arg0: number, arg1: number): ShortSpliterator;
    skip(arg0: number): number;
    // private splitPointCheck(arg0: number, arg1: number): void;
    tryAdvance(arg0: (param0: number) => void): boolean;
    trySplit(): ShortSpliterator;
}