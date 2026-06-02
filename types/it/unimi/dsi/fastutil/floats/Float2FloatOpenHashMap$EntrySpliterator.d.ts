import type { Float2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatMap$Entry.d.ts'
import type { Float2FloatOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatOpenHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Float2FloatOpenHashMap$EntrySpliterator extends Float2FloatOpenHashMap$MapSpliterator<(param0: Float2FloatMap$Entry) => void, Float2FloatOpenHashMap$EntrySpliterator> implements ObjectSpliterator<Float2FloatMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Float2FloatOpenHashMap$EntrySpliterator)
    constructor(null_: Float2FloatOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Float2FloatMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Float2FloatOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}