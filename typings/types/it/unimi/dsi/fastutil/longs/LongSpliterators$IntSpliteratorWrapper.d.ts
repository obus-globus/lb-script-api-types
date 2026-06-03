import type { IntSpliterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntSpliterator.d.ts'
import type { LongComparator } from '../../../../../it/unimi/dsi/fastutil/longs/LongComparator.d.ts'
import type { LongConsumer } from '../../../../../it/unimi/dsi/fastutil/longs/LongConsumer.d.ts'
import type { LongSpliterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { LongConsumer as LongConsumer_2 } from '../../../../../java/util/function/LongConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongSpliterators$IntSpliteratorWrapper extends Object implements LongSpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: IntSpliterator)
    // private spliterator: IntSpliterator;
    characteristics(): number;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    getComparator(): (param0: number, param1: number) => kotlin.Int;
    skip(arg0: number): number;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: number) => void): boolean;
    tryAdvance(arg0: (param0: number) => void): boolean;
    tryAdvance(arg0: (param0: number) => void): boolean;
    tryAdvance(arg0: (param0: number) => void): boolean;
    tryAdvance(arg0: (param0: number) => void): boolean;
    trySplit(): LongSpliterator;
}