import type { Long2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortMap$Entry.d.ts'
import type { Long2ShortOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortOpenHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Long2ShortOpenHashMap$EntrySpliterator extends Long2ShortOpenHashMap$MapSpliterator<(param0: Long2ShortMap$Entry) => void, Long2ShortOpenHashMap$EntrySpliterator> implements ObjectSpliterator<Long2ShortMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Long2ShortOpenHashMap$EntrySpliterator)
    constructor(null_: Long2ShortOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Long2ShortMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Long2ShortOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}