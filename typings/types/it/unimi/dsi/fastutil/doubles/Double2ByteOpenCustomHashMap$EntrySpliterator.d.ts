import type { Double2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ByteMap$Entry.d.ts'
import type { Double2ByteOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ByteOpenCustomHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Double2ByteOpenCustomHashMap$EntrySpliterator extends Double2ByteOpenCustomHashMap$MapSpliterator<(param0: Double2ByteMap$Entry) => void, Double2ByteOpenCustomHashMap$EntrySpliterator> implements ObjectSpliterator<Double2ByteMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Double2ByteOpenCustomHashMap$EntrySpliterator)
    constructor(null_: Double2ByteOpenCustomHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Double2ByteMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Double2ByteOpenCustomHashMap$EntrySpliterator;
    skip(arg0: number): number;
}