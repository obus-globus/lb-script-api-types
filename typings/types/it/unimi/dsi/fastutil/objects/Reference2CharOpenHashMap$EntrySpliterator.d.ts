import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Reference2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharMap$Entry.d.ts'
import type { Reference2CharOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharOpenHashMap$MapSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2CharOpenHashMap$EntrySpliterator extends Reference2CharOpenHashMap$MapSpliterator<Object, any> implements ObjectSpliterator<Reference2CharMap$Entry<K>> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Reference2CharOpenHashMap$EntrySpliterator)
    constructor(null_: Reference2CharOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex<K extends Object | number | string | boolean>(arg0: (param0: Reference2CharMap$Entry<K>) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit<K extends Object | number | string | boolean>(arg0: number, arg1: number, arg2: boolean): Reference2CharOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}