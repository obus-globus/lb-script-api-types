import type { Int2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatMap$Entry.d.ts'
import type { Int2FloatOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatOpenCustomHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Int2FloatOpenCustomHashMap$EntrySpliterator extends Int2FloatOpenCustomHashMap$MapSpliterator<(param0: Int2FloatMap$Entry) => void, Int2FloatOpenCustomHashMap$EntrySpliterator> implements ObjectSpliterator<Int2FloatMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Int2FloatOpenCustomHashMap$EntrySpliterator)
    constructor(null_: Int2FloatOpenCustomHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Int2FloatMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Int2FloatOpenCustomHashMap$EntrySpliterator;
    skip(arg0: number): number;
}