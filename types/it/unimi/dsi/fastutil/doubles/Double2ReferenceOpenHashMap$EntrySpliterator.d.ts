import type { Double2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceMap$Entry.d.ts'
import type { Double2ReferenceOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceOpenHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Double2ReferenceOpenHashMap$EntrySpliterator extends Double2ReferenceOpenHashMap$MapSpliterator<Object, Object> implements ObjectSpliterator<Double2ReferenceMap$Entry<V>> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Double2ReferenceOpenHashMap$EntrySpliterator)
    constructor(null_: Double2ReferenceOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Double2ReferenceMap$Entry<V>) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Double2ReferenceOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}