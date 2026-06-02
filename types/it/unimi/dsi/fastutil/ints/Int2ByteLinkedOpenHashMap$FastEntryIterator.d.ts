import type { Int2ByteLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteLinkedOpenHashMap$MapEntry.d.ts'
import type { Int2ByteLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteLinkedOpenHashMap$MapIterator.d.ts'
import type { Int2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ByteLinkedOpenHashMap$FastEntryIterator extends Int2ByteLinkedOpenHashMap$MapIterator<(param0: Int2ByteMap$Entry) => void> implements ObjectListIterator<Int2ByteMap$Entry> {
    constructor(null_: Int2ByteLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Int2ByteLinkedOpenHashMap$FastEntryIterator, arg1: number)
    // private entry: Int2ByteLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2ByteMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Int2ByteLinkedOpenHashMap$MapEntry;
    previous(): Int2ByteLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}