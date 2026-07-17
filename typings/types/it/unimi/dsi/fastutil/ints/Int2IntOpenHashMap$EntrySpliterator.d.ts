import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Int2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntMap$Entry.d.ts'
import type { Int2IntOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntOpenHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Int2IntOpenHashMap$EntrySpliterator extends Int2IntOpenHashMap$MapSpliterator<(param0: Int2IntMap$Entry) => void, Int2IntOpenHashMap$EntrySpliterator> implements ObjectSpliterator<Int2IntMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Int2IntMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Int2IntOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}