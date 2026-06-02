import type { Float2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleMap$Entry.d.ts'
import type { Float2DoubleOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleOpenCustomHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Float2DoubleOpenCustomHashMap$EntrySpliterator extends Float2DoubleOpenCustomHashMap$MapSpliterator<(param0: Float2DoubleMap$Entry) => void, Float2DoubleOpenCustomHashMap$EntrySpliterator> implements ObjectSpliterator<Float2DoubleMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Float2DoubleOpenCustomHashMap$EntrySpliterator)
    constructor(null_: Float2DoubleOpenCustomHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Float2DoubleMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Float2DoubleOpenCustomHashMap$EntrySpliterator;
    skip(arg0: number): number;
}