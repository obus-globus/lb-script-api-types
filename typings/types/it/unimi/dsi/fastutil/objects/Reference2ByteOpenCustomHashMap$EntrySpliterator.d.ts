import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Reference2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ByteMap$Entry.d.ts'
import type { Reference2ByteOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ByteOpenCustomHashMap$MapSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ByteOpenCustomHashMap$EntrySpliterator extends Reference2ByteOpenCustomHashMap$MapSpliterator<Object, any> implements ObjectSpliterator<Reference2ByteMap$Entry<K>> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Reference2ByteOpenCustomHashMap$EntrySpliterator)
    constructor(null_: Reference2ByteOpenCustomHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex<K extends unknown>(arg0: (param0: Reference2ByteMap$Entry<K>) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit<K extends unknown>(arg0: number, arg1: number, arg2: boolean): Reference2ByteOpenCustomHashMap$EntrySpliterator;
    skip(arg0: number): number;
}