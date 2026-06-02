import type { Object2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortMap$Entry.d.ts'
import type { Object2ShortOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortOpenCustomHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Object2ShortOpenCustomHashMap$EntrySpliterator extends Object2ShortOpenCustomHashMap$MapSpliterator<Object, Object> implements ObjectSpliterator<Object2ShortMap$Entry<K>> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Object2ShortOpenCustomHashMap$EntrySpliterator)
    constructor(null_: Object2ShortOpenCustomHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Object2ShortMap$Entry<K>) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Object2ShortOpenCustomHashMap$EntrySpliterator;
    skip(arg0: number): number;
}