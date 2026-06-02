import type { Char2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortMap$Entry.d.ts'
import type { Char2ShortOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortOpenHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Char2ShortOpenHashMap$EntrySpliterator extends Char2ShortOpenHashMap$MapSpliterator<(param0: Char2ShortMap$Entry) => void, Char2ShortOpenHashMap$EntrySpliterator> implements ObjectSpliterator<Char2ShortMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Char2ShortOpenHashMap$EntrySpliterator)
    constructor(null_: Char2ShortOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Char2ShortMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Char2ShortOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}