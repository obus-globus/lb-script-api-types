import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Reference2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanMap$Entry.d.ts'
import type { Reference2BooleanOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanOpenHashMap$MapSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Reference2BooleanOpenHashMap$EntrySpliterator extends Reference2BooleanOpenHashMap$MapSpliterator<Object, Object> implements ObjectSpliterator<Reference2BooleanMap$Entry<K>> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Reference2BooleanOpenHashMap$EntrySpliterator)
    constructor(null_: Reference2BooleanOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Reference2BooleanMap$Entry<K>) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Reference2BooleanOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}