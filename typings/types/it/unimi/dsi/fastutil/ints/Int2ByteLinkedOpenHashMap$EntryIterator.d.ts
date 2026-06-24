import type { Int2ByteLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteLinkedOpenHashMap$MapEntry.d.ts'
import type { Int2ByteLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteLinkedOpenHashMap$MapIterator.d.ts'
import type { Int2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Int2ByteLinkedOpenHashMap$EntryIterator extends Int2ByteLinkedOpenHashMap$MapIterator<(param0: Int2ByteMap$Entry) => void> implements ObjectListIterator<Int2ByteMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private entry: Int2ByteLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2ByteMap$Entry) => void, arg1: number): void;
    add(arg0: Int2ByteMap$Entry): void;
    next(): Int2ByteLinkedOpenHashMap$MapEntry;
    previous(): Int2ByteLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Int2ByteMap$Entry): void;
}