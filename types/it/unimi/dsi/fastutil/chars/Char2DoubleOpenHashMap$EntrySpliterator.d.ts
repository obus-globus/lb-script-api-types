import type { Char2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleMap$Entry.d.ts'
import type { Char2DoubleOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleOpenHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Char2DoubleOpenHashMap$EntrySpliterator extends Char2DoubleOpenHashMap$MapSpliterator<(param0: Char2DoubleMap$Entry) => void, Char2DoubleOpenHashMap$EntrySpliterator> implements ObjectSpliterator<Char2DoubleMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Char2DoubleOpenHashMap$EntrySpliterator)
    constructor(null_: Char2DoubleOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Char2DoubleMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Char2DoubleOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}