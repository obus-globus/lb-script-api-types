import type { Double2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanMap$Entry.d.ts'
import type { Double2BooleanOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanOpenHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Double2BooleanOpenHashMap$EntrySpliterator extends Double2BooleanOpenHashMap$MapSpliterator<(param0: Double2BooleanMap$Entry) => void, Double2BooleanOpenHashMap$EntrySpliterator> implements ObjectSpliterator<Double2BooleanMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Double2BooleanOpenHashMap$EntrySpliterator)
    constructor(null_: Double2BooleanOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Double2BooleanMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Double2BooleanOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}