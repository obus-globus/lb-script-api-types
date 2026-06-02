import type { Long2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongMap$Entry.d.ts'
import type { Long2LongOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongOpenHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Long2LongOpenHashMap$EntrySpliterator extends Long2LongOpenHashMap$MapSpliterator<(param0: Long2LongMap$Entry) => void, Long2LongOpenHashMap$EntrySpliterator> implements ObjectSpliterator<Long2LongMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Long2LongOpenHashMap$EntrySpliterator)
    constructor(null_: Long2LongOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Long2LongMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Long2LongOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}