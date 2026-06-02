import type { Double2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatMap$Entry.d.ts'
import type { Double2FloatOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatOpenHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Double2FloatOpenHashMap$EntrySpliterator extends Double2FloatOpenHashMap$MapSpliterator<(param0: Double2FloatMap$Entry) => void, Double2FloatOpenHashMap$EntrySpliterator> implements ObjectSpliterator<Double2FloatMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Double2FloatOpenHashMap$EntrySpliterator)
    constructor(null_: Double2FloatOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Double2FloatMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Double2FloatOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}