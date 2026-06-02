import type { Long2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntMap$Entry.d.ts'
import type { Long2IntOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntOpenCustomHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Long2IntOpenCustomHashMap$EntrySpliterator extends Long2IntOpenCustomHashMap$MapSpliterator<(param0: Long2IntMap$Entry) => void, Long2IntOpenCustomHashMap$EntrySpliterator> implements ObjectSpliterator<Long2IntMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Long2IntOpenCustomHashMap$EntrySpliterator)
    constructor(null_: Long2IntOpenCustomHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Long2IntMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Long2IntOpenCustomHashMap$EntrySpliterator;
    skip(arg0: number): number;
}