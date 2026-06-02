import type { Double2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatMap$Entry.d.ts'
import type { Double2FloatOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatOpenCustomHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Double2FloatOpenCustomHashMap$EntrySpliterator extends Double2FloatOpenCustomHashMap$MapSpliterator<(param0: Double2FloatMap$Entry) => void, Double2FloatOpenCustomHashMap$EntrySpliterator> implements ObjectSpliterator<Double2FloatMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Double2FloatOpenCustomHashMap$EntrySpliterator)
    constructor(null_: Double2FloatOpenCustomHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Double2FloatMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Double2FloatOpenCustomHashMap$EntrySpliterator;
    skip(arg0: number): number;
}