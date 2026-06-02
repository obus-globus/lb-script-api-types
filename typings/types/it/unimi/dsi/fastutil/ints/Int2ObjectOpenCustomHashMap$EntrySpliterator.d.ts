import type { Int2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectMap$Entry.d.ts'
import type { Int2ObjectOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectOpenCustomHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Int2ObjectOpenCustomHashMap$EntrySpliterator extends Int2ObjectOpenCustomHashMap$MapSpliterator<Object, Object> implements ObjectSpliterator<Int2ObjectMap$Entry<V>> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Int2ObjectOpenCustomHashMap$EntrySpliterator)
    constructor(null_: Int2ObjectOpenCustomHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Int2ObjectMap$Entry<V>) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Int2ObjectOpenCustomHashMap$EntrySpliterator;
    skip(arg0: number): number;
}