import type { Object2ObjectOpenHashMap$MapSpliterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2ObjectOpenHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Object2ObjectOpenHashMap$ValueSpliterator extends Object2ObjectOpenHashMap$MapSpliterator<Object, any> implements ObjectSpliterator<V> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Object2ObjectOpenHashMap$ValueSpliterator)
    constructor(null_: Object2ObjectOpenHashMap$ValueSpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex<V extends unknown>(arg0: (param0: V) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit<K extends unknown, V extends unknown>(arg0: number, arg1: number, arg2: boolean): Object2ObjectOpenHashMap$ValueSpliterator;
    skip(arg0: number): number;
}