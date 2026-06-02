import type { Int2IntLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntLinkedOpenHashMap$MapEntry.d.ts'
import type { Int2IntLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntLinkedOpenHashMap$MapIterator.d.ts'
import type { Int2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2IntLinkedOpenHashMap$FastEntryIterator extends Int2IntLinkedOpenHashMap$MapIterator<(param0: Int2IntMap$Entry) => void> implements ObjectListIterator<Int2IntMap$Entry> {
    constructor(null_: Int2IntLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Int2IntLinkedOpenHashMap$FastEntryIterator, arg1: number)
    // private entry: Int2IntLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2IntMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Int2IntLinkedOpenHashMap$MapEntry;
    previous(): Int2IntLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}