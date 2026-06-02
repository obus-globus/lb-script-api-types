import type { Float2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntMap$Entry.d.ts'
import type { Float2IntOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntOpenCustomHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Float2IntOpenCustomHashMap$EntrySpliterator extends Float2IntOpenCustomHashMap$MapSpliterator<(param0: Float2IntMap$Entry) => void, Float2IntOpenCustomHashMap$EntrySpliterator> implements ObjectSpliterator<Float2IntMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Float2IntOpenCustomHashMap$EntrySpliterator)
    constructor(null_: Float2IntOpenCustomHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Float2IntMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Float2IntOpenCustomHashMap$EntrySpliterator;
    skip(arg0: number): number;
}