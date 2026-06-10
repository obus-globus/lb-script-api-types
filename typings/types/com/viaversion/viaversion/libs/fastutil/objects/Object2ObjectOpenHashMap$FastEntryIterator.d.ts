import type { Object2ObjectMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2ObjectMap$Entry.d.ts'
import type { Object2ObjectOpenHashMap$MapEntry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2ObjectOpenHashMap$MapEntry.d.ts'
import type { Object2ObjectOpenHashMap$MapIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2ObjectOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Object2ObjectOpenHashMap$FastEntryIterator extends Object2ObjectOpenHashMap$MapIterator<Object> implements ObjectIterator<Object2ObjectMap$Entry<K, V>> {
    private constructor(null_: Object2ObjectOpenHashMap$FastEntryIterator)
    // private entry: Object2ObjectOpenHashMap$MapEntry;
    acceptOnIndex<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(arg0: (param0: Object2ObjectMap$Entry<K, V>) => void, arg1: number): void;
    next<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(): Object2ObjectOpenHashMap$MapEntry;
    skip(arg0: number): number;
}