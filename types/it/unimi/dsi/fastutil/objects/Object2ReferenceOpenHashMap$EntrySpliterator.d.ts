import type { Object2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceMap$Entry.d.ts'
import type { Object2ReferenceOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceOpenHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Object2ReferenceOpenHashMap$EntrySpliterator extends Object2ReferenceOpenHashMap$MapSpliterator<Object, Object> implements ObjectSpliterator<Object2ReferenceMap$Entry<K, V>> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Object2ReferenceOpenHashMap$EntrySpliterator)
    constructor(null_: Object2ReferenceOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Object2ReferenceMap$Entry<K, V>) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Object2ReferenceOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}