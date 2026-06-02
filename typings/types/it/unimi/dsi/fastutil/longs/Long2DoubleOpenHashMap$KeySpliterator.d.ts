import type { Long2DoubleOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleOpenHashMap$MapSpliterator.d.ts'
import type { LongComparator } from '../../../../../it/unimi/dsi/fastutil/longs/LongComparator.d.ts'
import type { LongConsumer } from '../../../../../it/unimi/dsi/fastutil/longs/LongConsumer.d.ts'
import type { LongSpliterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { LongConsumer } from '../../../../../java/util/function/LongConsumer.d.ts'
export class Long2DoubleOpenHashMap$KeySpliterator extends Long2DoubleOpenHashMap$MapSpliterator<(param0: number) => void, Long2DoubleOpenHashMap$KeySpliterator> implements LongSpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Long2DoubleOpenHashMap$KeySpliterator)
    constructor(null_: Long2DoubleOpenHashMap$KeySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    characteristics(): number;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    getComparator(): (param0: number, param1: number) => kotlin.Int;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Long2DoubleOpenHashMap$KeySpliterator;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: number) => void): boolean;
    tryAdvance(arg0: (param0: number) => void): boolean;
}