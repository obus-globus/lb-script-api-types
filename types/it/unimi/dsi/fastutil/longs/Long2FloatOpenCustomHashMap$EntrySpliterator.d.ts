import type { Long2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatMap$Entry.d.ts'
import type { Long2FloatOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatOpenCustomHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Long2FloatOpenCustomHashMap$EntrySpliterator extends Long2FloatOpenCustomHashMap$MapSpliterator<(param0: Long2FloatMap$Entry) => void, Long2FloatOpenCustomHashMap$EntrySpliterator> implements ObjectSpliterator<Long2FloatMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Long2FloatOpenCustomHashMap$EntrySpliterator)
    constructor(null_: Long2FloatOpenCustomHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Long2FloatMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Long2FloatOpenCustomHashMap$EntrySpliterator;
    skip(arg0: number): number;
}