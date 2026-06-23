import type { Float2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectMap$Entry.d.ts'
import type { Float2ObjectOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectOpenHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ObjectOpenHashMap$EntrySpliterator extends Float2ObjectOpenHashMap$MapSpliterator<Object, any> implements ObjectSpliterator<Float2ObjectMap$Entry<V>> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Float2ObjectOpenHashMap$EntrySpliterator)
    constructor(null_: Float2ObjectOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex<V extends Object | number | string | boolean>(arg0: (param0: Float2ObjectMap$Entry<V>) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit<V extends Object | number | string | boolean>(arg0: number, arg1: number, arg2: boolean): Float2ObjectOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}