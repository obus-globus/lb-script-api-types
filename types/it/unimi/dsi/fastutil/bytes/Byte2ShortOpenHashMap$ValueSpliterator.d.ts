import type { Byte2ShortOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortOpenHashMap$MapSpliterator.d.ts'
import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { ShortConsumer } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortConsumer.d.ts'
import type { ShortSpliterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2ShortOpenHashMap$ValueSpliterator extends Byte2ShortOpenHashMap$MapSpliterator<(param0: number) => void, Byte2ShortOpenHashMap$ValueSpliterator> implements ShortSpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Byte2ShortOpenHashMap$ValueSpliterator)
    constructor(null_: Byte2ShortOpenHashMap$ValueSpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    characteristics(): number;
    forEachRemaining(arg0: (param0: number) => void): void;
    getComparator(): (param0: number, param1: number) => kotlin.Int;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Byte2ShortOpenHashMap$ValueSpliterator;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: number) => void): boolean;
}