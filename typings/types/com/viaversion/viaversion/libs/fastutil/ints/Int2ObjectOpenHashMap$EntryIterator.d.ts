import type { Int2ObjectMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2ObjectMap$Entry.d.ts'
import type { Int2ObjectOpenHashMap$MapEntry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2ObjectOpenHashMap$MapEntry.d.ts'
import type { Int2ObjectOpenHashMap$MapIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2ObjectOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Int2ObjectOpenHashMap$EntryIterator extends Int2ObjectOpenHashMap$MapIterator<Object> implements ObjectIterator<Int2ObjectMap$Entry<V>> {
    private constructor(null_: Int2ObjectOpenHashMap$EntryIterator)
    // private entry: Int2ObjectOpenHashMap$MapEntry;
    acceptOnIndex<V extends unknown>(arg0: (param0: Int2ObjectMap$Entry<V>) => void, arg1: number): void;
    next<V extends unknown>(): Int2ObjectOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}