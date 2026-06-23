import type { Double2ReferenceOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceOpenCustomHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ReferenceOpenCustomHashMap$ValueSpliterator extends Double2ReferenceOpenCustomHashMap$MapSpliterator<Object, any> implements ObjectSpliterator<V> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Double2ReferenceOpenCustomHashMap$ValueSpliterator)
    constructor(null_: Double2ReferenceOpenCustomHashMap$ValueSpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex<V extends Object | number | string | boolean>(arg0: (param0: V) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit<V extends Object | number | string | boolean>(arg0: number, arg1: number, arg2: boolean): Double2ReferenceOpenCustomHashMap$ValueSpliterator;
    skip(arg0: number): number;
}