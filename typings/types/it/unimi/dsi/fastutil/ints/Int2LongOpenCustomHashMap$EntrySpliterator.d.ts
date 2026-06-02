import type { Int2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongMap$Entry.d.ts'
import type { Int2LongOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongOpenCustomHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Int2LongOpenCustomHashMap$EntrySpliterator extends Int2LongOpenCustomHashMap$MapSpliterator<(param0: Int2LongMap$Entry) => void, Int2LongOpenCustomHashMap$EntrySpliterator> implements ObjectSpliterator<Int2LongMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Int2LongOpenCustomHashMap$EntrySpliterator)
    constructor(null_: Int2LongOpenCustomHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Int2LongMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Int2LongOpenCustomHashMap$EntrySpliterator;
    skip(arg0: number): number;
}