import type { Int2DoubleLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleLinkedOpenHashMap$MapEntry.d.ts'
import type { Int2DoubleLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleLinkedOpenHashMap$MapIterator.d.ts'
import type { Int2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2DoubleLinkedOpenHashMap$FastEntryIterator extends Int2DoubleLinkedOpenHashMap$MapIterator<(param0: Int2DoubleMap$Entry) => void> implements ObjectListIterator<Int2DoubleMap$Entry> {
    constructor(null_: Int2DoubleLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Int2DoubleLinkedOpenHashMap$FastEntryIterator, arg1: number)
    // private entry: Int2DoubleLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2DoubleMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Int2DoubleLinkedOpenHashMap$MapEntry;
    previous(): Int2DoubleLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}