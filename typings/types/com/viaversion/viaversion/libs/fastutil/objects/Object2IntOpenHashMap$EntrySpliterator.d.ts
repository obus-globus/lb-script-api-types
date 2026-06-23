import type { Object2IntMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2IntMap$Entry.d.ts'
import type { Object2IntOpenHashMap$MapSpliterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2IntOpenHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Object2IntOpenHashMap$EntrySpliterator extends Object2IntOpenHashMap$MapSpliterator<Object, any> implements ObjectSpliterator<Object2IntMap$Entry<K>> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Object2IntOpenHashMap$EntrySpliterator)
    constructor(null_: Object2IntOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex<K extends Object | number | string | boolean>(arg0: (param0: Object2IntMap$Entry<K>) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit<K extends Object | number | string | boolean>(arg0: number, arg1: number, arg2: boolean): Object2IntOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}