import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Reference2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectMap$Entry.d.ts'
import type { Reference2ObjectOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectOpenHashMap$MapSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ObjectOpenHashMap$EntrySpliterator extends Reference2ObjectOpenHashMap$MapSpliterator<Object, any> implements ObjectSpliterator<Reference2ObjectMap$Entry<K, V>> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Reference2ObjectOpenHashMap$EntrySpliterator)
    constructor(null_: Reference2ObjectOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(arg0: (param0: Reference2ObjectMap$Entry<K, V>) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(arg0: number, arg1: number, arg2: boolean): Reference2ObjectOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}