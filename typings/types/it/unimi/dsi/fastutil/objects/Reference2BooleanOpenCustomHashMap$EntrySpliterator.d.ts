import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Reference2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanMap$Entry.d.ts'
import type { Reference2BooleanOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanOpenCustomHashMap$MapSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2BooleanOpenCustomHashMap$EntrySpliterator extends Reference2BooleanOpenCustomHashMap$MapSpliterator<Object, any> implements ObjectSpliterator<Reference2BooleanMap$Entry<K>> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Reference2BooleanOpenCustomHashMap$EntrySpliterator)
    constructor(null_: Reference2BooleanOpenCustomHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex<K extends unknown>(arg0: (param0: Reference2BooleanMap$Entry<K>) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit<K extends unknown>(arg0: number, arg1: number, arg2: boolean): Reference2BooleanOpenCustomHashMap$EntrySpliterator;
    skip(arg0: number): number;
}