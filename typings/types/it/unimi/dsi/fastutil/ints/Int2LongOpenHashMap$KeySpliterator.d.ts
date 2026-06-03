import type { Int2LongOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongOpenHashMap$MapSpliterator.d.ts'
import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { IntConsumer } from '../../../../../it/unimi/dsi/fastutil/ints/IntConsumer.d.ts'
import type { IntSpliterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer as IntConsumer_2 } from '../../../../../java/util/function/IntConsumer.d.ts'
export class Int2LongOpenHashMap$KeySpliterator extends Int2LongOpenHashMap$MapSpliterator<(param0: number) => void, Int2LongOpenHashMap$KeySpliterator> implements IntSpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Int2LongOpenHashMap$KeySpliterator)
    constructor(null_: Int2LongOpenHashMap$KeySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    characteristics(): number;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    getComparator(): (param0: number, param1: number) => kotlin.Int;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Int2LongOpenHashMap$KeySpliterator;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: number) => void): boolean;
    tryAdvance(arg0: (param0: number) => void): boolean;
}