import type { AbstractByteSpliterator } from '../../../../../it/unimi/dsi/fastutil/bytes/AbstractByteSpliterator.d.ts'
import type { ByteConsumer } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteConsumer.d.ts'
import type { ByteSpliterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteSpliterator.d.ts'
export abstract class ByteSpliterators$AbstractIndexBasedSpliterator extends AbstractByteSpliterator {
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
    makeForSplit(arg0: number, arg1: number): ByteSpliterator;
    skip(arg0: number): number;
    // private splitPointCheck(arg0: number, arg1: number): void;
    tryAdvance(arg0: (param0: number) => void): boolean;
    trySplit(): ByteSpliterator;
}