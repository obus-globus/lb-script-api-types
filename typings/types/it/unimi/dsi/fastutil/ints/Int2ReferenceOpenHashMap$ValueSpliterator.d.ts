import type { Int2ReferenceOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceOpenHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Int2ReferenceOpenHashMap$ValueSpliterator extends Int2ReferenceOpenHashMap$MapSpliterator<Object, Object> implements ObjectSpliterator<V> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Int2ReferenceOpenHashMap$ValueSpliterator)
    constructor(null_: Int2ReferenceOpenHashMap$ValueSpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: V) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Int2ReferenceOpenHashMap$ValueSpliterator;
    skip(arg0: number): number;
}