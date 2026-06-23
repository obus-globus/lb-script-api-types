import type { Char2ObjectOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectOpenCustomHashMap$MapSpliterator.d.ts'
import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ObjectOpenCustomHashMap$KeySpliterator extends Char2ObjectOpenCustomHashMap$MapSpliterator<Object, any> implements CharSpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Char2ObjectOpenCustomHashMap$KeySpliterator)
    constructor(null_: Char2ObjectOpenCustomHashMap$KeySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: string) => void, arg1: number): void;
    characteristics(): number;
    forEachRemaining(arg0: (param0: string) => void): void;
    getComparator(): (param0: string, param1: string) => number;
    makeForSplit<V extends Object | number | string | boolean>(arg0: number, arg1: number, arg2: boolean): Char2ObjectOpenCustomHashMap$KeySpliterator;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: string) => void): boolean;
}