import type { Char2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharMap$Entry.d.ts'
import type { Char2CharOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharOpenCustomHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Char2CharOpenCustomHashMap$EntrySpliterator extends Char2CharOpenCustomHashMap$MapSpliterator<(param0: Char2CharMap$Entry) => void, Char2CharOpenCustomHashMap$EntrySpliterator> implements ObjectSpliterator<Char2CharMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Char2CharOpenCustomHashMap$EntrySpliterator)
    constructor(null_: Char2CharOpenCustomHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Char2CharMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Char2CharOpenCustomHashMap$EntrySpliterator;
    skip(arg0: number): number;
}