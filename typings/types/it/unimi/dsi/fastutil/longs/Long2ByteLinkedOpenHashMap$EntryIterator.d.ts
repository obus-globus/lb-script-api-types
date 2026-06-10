import type { Long2ByteLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteLinkedOpenHashMap$MapEntry.d.ts'
import type { Long2ByteLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteLinkedOpenHashMap$MapIterator.d.ts'
import type { Long2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Long2ByteLinkedOpenHashMap$EntryIterator extends Long2ByteLinkedOpenHashMap$MapIterator<(param0: Long2ByteMap$Entry) => void> implements ObjectListIterator<Long2ByteMap$Entry> {
    constructor(null_: Long2ByteLinkedOpenHashMap$EntryIterator)
    constructor(null_: Long2ByteLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Long2ByteLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2ByteMap$Entry) => void, arg1: number): void;
    add(arg0: Long2ByteMap$Entry): void;
    next(): Long2ByteLinkedOpenHashMap$MapEntry;
    previous(): Long2ByteLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Long2ByteMap$Entry): void;
}