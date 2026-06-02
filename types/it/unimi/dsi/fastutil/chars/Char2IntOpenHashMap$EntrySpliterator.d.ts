import type { Char2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntMap$Entry.d.ts'
import type { Char2IntOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntOpenHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Char2IntOpenHashMap$EntrySpliterator extends Char2IntOpenHashMap$MapSpliterator<(param0: Char2IntMap$Entry) => void, Char2IntOpenHashMap$EntrySpliterator> implements ObjectSpliterator<Char2IntMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Char2IntOpenHashMap$EntrySpliterator)
    constructor(null_: Char2IntOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Char2IntMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Char2IntOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}