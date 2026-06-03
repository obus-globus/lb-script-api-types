import type { DoubleComparator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleComparator.d.ts'
import type { DoubleConsumer } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleConsumer.d.ts'
import type { DoubleSpliterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleSpliterator.d.ts'
import type { Object2DoubleOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleOpenCustomHashMap$MapSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { DoubleConsumer as DoubleConsumer_2 } from '../../../../../java/util/function/DoubleConsumer.d.ts'
export class Object2DoubleOpenCustomHashMap$ValueSpliterator extends Object2DoubleOpenCustomHashMap$MapSpliterator<Object, Object> implements DoubleSpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Object2DoubleOpenCustomHashMap$ValueSpliterator)
    constructor(null_: Object2DoubleOpenCustomHashMap$ValueSpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    characteristics(): number;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    getComparator(): (param0: number, param1: number) => kotlin.Int;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Object2DoubleOpenCustomHashMap$ValueSpliterator;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: number) => void): boolean;
    tryAdvance(arg0: (param0: number) => void): boolean;
}