import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Reference2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2LongMap$Entry.d.ts'
import type { Reference2LongOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2LongOpenHashMap$MapSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Reference2LongOpenHashMap$EntrySpliterator extends Reference2LongOpenHashMap$MapSpliterator<Object, Object> implements ObjectSpliterator<Reference2LongMap$Entry<K>> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Reference2LongOpenHashMap$EntrySpliterator)
    constructor(null_: Reference2LongOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Reference2LongMap$Entry<K>) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Reference2LongOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}