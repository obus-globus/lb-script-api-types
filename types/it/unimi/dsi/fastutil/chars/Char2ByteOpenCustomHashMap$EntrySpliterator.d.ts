import type { Char2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteMap$Entry.d.ts'
import type { Char2ByteOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteOpenCustomHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Char2ByteOpenCustomHashMap$EntrySpliterator extends Char2ByteOpenCustomHashMap$MapSpliterator<(param0: Char2ByteMap$Entry) => void, Char2ByteOpenCustomHashMap$EntrySpliterator> implements ObjectSpliterator<Char2ByteMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Char2ByteOpenCustomHashMap$EntrySpliterator)
    constructor(null_: Char2ByteOpenCustomHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Char2ByteMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Char2ByteOpenCustomHashMap$EntrySpliterator;
    skip(arg0: number): number;
}