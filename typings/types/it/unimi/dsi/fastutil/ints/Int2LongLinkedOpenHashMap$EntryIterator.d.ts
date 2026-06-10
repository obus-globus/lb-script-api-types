import type { Int2LongLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongLinkedOpenHashMap$MapEntry.d.ts'
import type { Int2LongLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongLinkedOpenHashMap$MapIterator.d.ts'
import type { Int2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Int2LongLinkedOpenHashMap$EntryIterator extends Int2LongLinkedOpenHashMap$MapIterator<(param0: Int2LongMap$Entry) => void> implements ObjectListIterator<Int2LongMap$Entry> {
    constructor(null_: Int2LongLinkedOpenHashMap$EntryIterator)
    constructor(null_: Int2LongLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Int2LongLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2LongMap$Entry) => void, arg1: number): void;
    add(arg0: Int2LongMap$Entry): void;
    next(): Int2LongLinkedOpenHashMap$MapEntry;
    previous(): Int2LongLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Int2LongMap$Entry): void;
}