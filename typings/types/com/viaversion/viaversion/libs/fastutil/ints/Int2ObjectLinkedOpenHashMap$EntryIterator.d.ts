import type { Int2ObjectLinkedOpenHashMap$MapEntry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2ObjectLinkedOpenHashMap$MapEntry.d.ts'
import type { Int2ObjectLinkedOpenHashMap$MapIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2ObjectLinkedOpenHashMap$MapIterator.d.ts'
import type { Int2ObjectMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2ObjectMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Int2ObjectLinkedOpenHashMap$EntryIterator extends Int2ObjectLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Int2ObjectMap$Entry<V>> {
    constructor(null_: Int2ObjectLinkedOpenHashMap$EntryIterator)
    constructor(null_: Int2ObjectLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Int2ObjectLinkedOpenHashMap$MapEntry;
    acceptOnIndex<V extends unknown>(arg0: (param0: Int2ObjectMap$Entry<V>) => void, arg1: number): void;
    add<V extends unknown>(arg0: Int2ObjectMap$Entry<V>): void;
    next<V extends unknown>(): Int2ObjectLinkedOpenHashMap$MapEntry;
    previous<V extends unknown>(): Int2ObjectLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<V extends unknown>(arg0: Int2ObjectMap$Entry<V>): void;
}