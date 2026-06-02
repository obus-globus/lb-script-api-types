import type { BooleanComparator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanComparator.d.ts'
import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { BooleanSpliterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanSpliterator.d.ts'
import type { Long2BooleanOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanOpenCustomHashMap$MapSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Long2BooleanOpenCustomHashMap$ValueSpliterator extends Long2BooleanOpenCustomHashMap$MapSpliterator<(param0: boolean) => void, Long2BooleanOpenCustomHashMap$ValueSpliterator> implements BooleanSpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Long2BooleanOpenCustomHashMap$ValueSpliterator)
    constructor(null_: Long2BooleanOpenCustomHashMap$ValueSpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: boolean) => void, arg1: number): void;
    characteristics(): number;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    getComparator(): (param0: boolean, param1: boolean) => kotlin.Int;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Long2BooleanOpenCustomHashMap$ValueSpliterator;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: boolean) => void): boolean;
}