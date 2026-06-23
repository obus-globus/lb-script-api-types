import type { Int2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceMap$Entry.d.ts'
import type { Int2ReferenceOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceOpenCustomHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ReferenceOpenCustomHashMap$EntrySpliterator extends Int2ReferenceOpenCustomHashMap$MapSpliterator<Object, any> implements ObjectSpliterator<Int2ReferenceMap$Entry<V>> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Int2ReferenceOpenCustomHashMap$EntrySpliterator)
    constructor(null_: Int2ReferenceOpenCustomHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex<V extends unknown>(arg0: (param0: Int2ReferenceMap$Entry<V>) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit<V extends unknown>(arg0: number, arg1: number, arg2: boolean): Int2ReferenceOpenCustomHashMap$EntrySpliterator;
    skip(arg0: number): number;
}