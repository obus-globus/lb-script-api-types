import type { Object2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanMap$Entry.d.ts'
import type { Object2BooleanOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanOpenCustomHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Object2BooleanOpenCustomHashMap$EntrySpliterator extends Object2BooleanOpenCustomHashMap$MapSpliterator<Object, Object> implements ObjectSpliterator<Object2BooleanMap$Entry<K>> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Object2BooleanOpenCustomHashMap$EntrySpliterator)
    constructor(null_: Object2BooleanOpenCustomHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Object2BooleanMap$Entry<K>) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Object2BooleanOpenCustomHashMap$EntrySpliterator;
    skip(arg0: number): number;
}