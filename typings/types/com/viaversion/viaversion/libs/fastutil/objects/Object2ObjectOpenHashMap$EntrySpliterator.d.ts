import type { Object2ObjectMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2ObjectMap$Entry.d.ts'
import type { Object2ObjectOpenHashMap$MapSpliterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2ObjectOpenHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Object2ObjectOpenHashMap$EntrySpliterator extends Object2ObjectOpenHashMap$MapSpliterator<Object, any> implements ObjectSpliterator<Object2ObjectMap$Entry<K, V>> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Object2ObjectOpenHashMap$EntrySpliterator)
    constructor(null_: Object2ObjectOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(arg0: (param0: Object2ObjectMap$Entry<K, V>) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(arg0: number, arg1: number, arg2: boolean): Object2ObjectOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}