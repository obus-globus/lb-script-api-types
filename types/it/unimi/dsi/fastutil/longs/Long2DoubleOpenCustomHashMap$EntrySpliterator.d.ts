import type { Long2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleMap$Entry.d.ts'
import type { Long2DoubleOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleOpenCustomHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Long2DoubleOpenCustomHashMap$EntrySpliterator extends Long2DoubleOpenCustomHashMap$MapSpliterator<(param0: Long2DoubleMap$Entry) => void, Long2DoubleOpenCustomHashMap$EntrySpliterator> implements ObjectSpliterator<Long2DoubleMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Long2DoubleOpenCustomHashMap$EntrySpliterator)
    constructor(null_: Long2DoubleOpenCustomHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Long2DoubleMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Long2DoubleOpenCustomHashMap$EntrySpliterator;
    skip(arg0: number): number;
}