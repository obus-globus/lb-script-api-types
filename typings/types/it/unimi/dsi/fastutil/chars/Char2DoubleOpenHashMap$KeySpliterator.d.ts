import type { Char2DoubleOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleOpenHashMap$MapSpliterator.d.ts'
import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Char2DoubleOpenHashMap$KeySpliterator extends Char2DoubleOpenHashMap$MapSpliterator<(param0: string) => void, Char2DoubleOpenHashMap$KeySpliterator> implements CharSpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Char2DoubleOpenHashMap$KeySpliterator)
    constructor(null_: Char2DoubleOpenHashMap$KeySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: string) => void, arg1: number): void;
    characteristics(): number;
    forEachRemaining(arg0: (param0: string) => void): void;
    getComparator(): (param0: string, param1: string) => number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Char2DoubleOpenHashMap$KeySpliterator;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: string) => void): boolean;
}