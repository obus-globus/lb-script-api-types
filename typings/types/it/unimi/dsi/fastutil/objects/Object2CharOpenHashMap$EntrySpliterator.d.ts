import type { Object2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharMap$Entry.d.ts'
import type { Object2CharOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharOpenHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2CharOpenHashMap$EntrySpliterator extends Object2CharOpenHashMap$MapSpliterator<Object, any> implements ObjectSpliterator<Object2CharMap$Entry<K>> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Object2CharOpenHashMap$EntrySpliterator)
    constructor(null_: Object2CharOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex<K extends unknown>(arg0: (param0: Object2CharMap$Entry<K>) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit<K extends unknown>(arg0: number, arg1: number, arg2: boolean): Object2CharOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}