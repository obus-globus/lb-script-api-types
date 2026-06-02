import type { Double2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharMap$Entry.d.ts'
import type { Double2CharOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharOpenCustomHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Double2CharOpenCustomHashMap$EntrySpliterator extends Double2CharOpenCustomHashMap$MapSpliterator<(param0: Double2CharMap$Entry) => void, Double2CharOpenCustomHashMap$EntrySpliterator> implements ObjectSpliterator<Double2CharMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Double2CharOpenCustomHashMap$EntrySpliterator)
    constructor(null_: Double2CharOpenCustomHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Double2CharMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Double2CharOpenCustomHashMap$EntrySpliterator;
    skip(arg0: number): number;
}