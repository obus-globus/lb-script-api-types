import type { BooleanComparator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanComparator.d.ts'
import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { BooleanSpliterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanSpliterator.d.ts'
import type { Byte2BooleanOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanOpenCustomHashMap$MapSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2BooleanOpenCustomHashMap$ValueSpliterator extends Byte2BooleanOpenCustomHashMap$MapSpliterator<(param0: boolean) => void, Byte2BooleanOpenCustomHashMap$ValueSpliterator> implements BooleanSpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Byte2BooleanOpenCustomHashMap$ValueSpliterator)
    constructor(null_: Byte2BooleanOpenCustomHashMap$ValueSpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: boolean) => void, arg1: number): void;
    characteristics(): number;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    getComparator(): (param0: boolean, param1: boolean) => kotlin.Int;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Byte2BooleanOpenCustomHashMap$ValueSpliterator;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: boolean) => void): boolean;
}