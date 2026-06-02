import type { Int2LongLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongLinkedOpenHashMap$MapEntry.d.ts'
import type { Int2LongLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongLinkedOpenHashMap$MapIterator.d.ts'
import type { Int2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2LongLinkedOpenHashMap$FastEntryIterator extends Int2LongLinkedOpenHashMap$MapIterator<(param0: Int2LongMap$Entry) => void> implements ObjectListIterator<Int2LongMap$Entry> {
    constructor(null_: Int2LongLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Int2LongLinkedOpenHashMap$FastEntryIterator, arg1: number)
    // private entry: Int2LongLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2LongMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Int2LongLinkedOpenHashMap$MapEntry;
    previous(): Int2LongLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}