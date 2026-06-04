import type { Int2ObjectLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectLinkedOpenHashMap$MapEntry.d.ts'
import type { Int2ObjectLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectLinkedOpenHashMap$MapIterator.d.ts'
import type { Int2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ObjectLinkedOpenHashMap$EntryIterator extends Int2ObjectLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Int2ObjectMap$Entry<V>> {
    constructor(null_: Int2ObjectLinkedOpenHashMap$EntryIterator)
    constructor(null_: Int2ObjectLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Int2ObjectLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2ObjectMap$Entry<V>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Int2ObjectLinkedOpenHashMap$MapEntry;
    previous(): Int2ObjectLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}