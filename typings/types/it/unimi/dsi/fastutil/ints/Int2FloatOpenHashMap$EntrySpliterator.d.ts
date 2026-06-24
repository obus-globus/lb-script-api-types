import type { Int2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatMap$Entry.d.ts'
import type { Int2FloatOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatOpenHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Int2FloatOpenHashMap$EntrySpliterator extends Int2FloatOpenHashMap$MapSpliterator<(param0: Int2FloatMap$Entry) => void, Int2FloatOpenHashMap$EntrySpliterator> implements ObjectSpliterator<Int2FloatMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Int2FloatMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Int2FloatOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}