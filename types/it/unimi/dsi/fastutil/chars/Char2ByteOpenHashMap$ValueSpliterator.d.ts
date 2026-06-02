import type { ByteComparator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteComparator.d.ts'
import type { ByteConsumer } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteConsumer.d.ts'
import type { ByteSpliterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteSpliterator.d.ts'
import type { Char2ByteOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteOpenHashMap$MapSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Char2ByteOpenHashMap$ValueSpliterator extends Char2ByteOpenHashMap$MapSpliterator<(param0: number) => void, Char2ByteOpenHashMap$ValueSpliterator> implements ByteSpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Char2ByteOpenHashMap$ValueSpliterator)
    constructor(null_: Char2ByteOpenHashMap$ValueSpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    characteristics(): number;
    forEachRemaining(arg0: (param0: number) => void): void;
    getComparator(): (param0: number, param1: number) => kotlin.Int;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Char2ByteOpenHashMap$ValueSpliterator;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: number) => void): boolean;
}