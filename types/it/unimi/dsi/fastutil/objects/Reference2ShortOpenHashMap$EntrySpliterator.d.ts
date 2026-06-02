import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Reference2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ShortMap$Entry.d.ts'
import type { Reference2ShortOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ShortOpenHashMap$MapSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Reference2ShortOpenHashMap$EntrySpliterator extends Reference2ShortOpenHashMap$MapSpliterator<Object, Object> implements ObjectSpliterator<Reference2ShortMap$Entry<K>> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Reference2ShortOpenHashMap$EntrySpliterator)
    constructor(null_: Reference2ShortOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Reference2ShortMap$Entry<K>) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Reference2ShortOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}