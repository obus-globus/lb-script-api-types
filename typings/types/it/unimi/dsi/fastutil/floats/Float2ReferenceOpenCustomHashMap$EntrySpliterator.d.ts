import type { Float2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceMap$Entry.d.ts'
import type { Float2ReferenceOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceOpenCustomHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ReferenceOpenCustomHashMap$EntrySpliterator extends Float2ReferenceOpenCustomHashMap$MapSpliterator<Object, any> implements ObjectSpliterator<Float2ReferenceMap$Entry<V>> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Float2ReferenceOpenCustomHashMap$EntrySpliterator)
    constructor(null_: Float2ReferenceOpenCustomHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex<V extends unknown>(arg0: (param0: Float2ReferenceMap$Entry<V>) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit<V extends unknown>(arg0: number, arg1: number, arg2: boolean): Float2ReferenceOpenCustomHashMap$EntrySpliterator;
    skip(arg0: number): number;
}