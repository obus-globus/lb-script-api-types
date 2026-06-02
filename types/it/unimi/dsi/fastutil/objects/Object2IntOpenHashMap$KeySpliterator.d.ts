import type { Object2IntOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntOpenHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Object2IntOpenHashMap$KeySpliterator extends Object2IntOpenHashMap$MapSpliterator<Object, Object> implements ObjectSpliterator<K> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Object2IntOpenHashMap$KeySpliterator)
    constructor(null_: Object2IntOpenHashMap$KeySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: K) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Object2IntOpenHashMap$KeySpliterator;
    skip(arg0: number): number;
}