import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Reference2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2DoubleMap$Entry.d.ts'
import type { Reference2DoubleOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2DoubleOpenHashMap$MapSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Reference2DoubleOpenHashMap$EntrySpliterator extends Reference2DoubleOpenHashMap$MapSpliterator<Object, Object> implements ObjectSpliterator<Reference2DoubleMap$Entry<K>> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Reference2DoubleOpenHashMap$EntrySpliterator)
    constructor(null_: Reference2DoubleOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Reference2DoubleMap$Entry<K>) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Reference2DoubleOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}