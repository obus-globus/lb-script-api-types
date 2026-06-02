import type { Int2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortMap$Entry.d.ts'
import type { Int2ShortOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortOpenHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Int2ShortOpenHashMap$EntrySpliterator extends Int2ShortOpenHashMap$MapSpliterator<(param0: Int2ShortMap$Entry) => void, Int2ShortOpenHashMap$EntrySpliterator> implements ObjectSpliterator<Int2ShortMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Int2ShortOpenHashMap$EntrySpliterator)
    constructor(null_: Int2ShortOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Int2ShortMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Int2ShortOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}