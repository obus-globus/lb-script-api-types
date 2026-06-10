import type { Object2IntMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2IntMap$Entry.d.ts'
import type { Object2IntOpenHashMap$MapEntry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2IntOpenHashMap$MapEntry.d.ts'
import type { Object2IntOpenHashMap$MapIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2IntOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Object2IntOpenHashMap$EntryIterator extends Object2IntOpenHashMap$MapIterator<Object> implements ObjectIterator<Object2IntMap$Entry<K>> {
    private constructor(null_: Object2IntOpenHashMap$EntryIterator)
    // private entry: Object2IntOpenHashMap$MapEntry;
    acceptOnIndex<K extends Object | number | string | boolean>(arg0: (param0: Object2IntMap$Entry<K>) => void, arg1: number): void;
    next<K extends Object | number | string | boolean>(): Object2IntOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}