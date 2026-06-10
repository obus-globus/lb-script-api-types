import type { Int2ShortLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortLinkedOpenHashMap$MapEntry.d.ts'
import type { Int2ShortLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortLinkedOpenHashMap$MapIterator.d.ts'
import type { Int2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Int2ShortLinkedOpenHashMap$EntryIterator extends Int2ShortLinkedOpenHashMap$MapIterator<(param0: Int2ShortMap$Entry) => void> implements ObjectListIterator<Int2ShortMap$Entry> {
    constructor(null_: Int2ShortLinkedOpenHashMap$EntryIterator)
    constructor(null_: Int2ShortLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Int2ShortLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2ShortMap$Entry) => void, arg1: number): void;
    add(arg0: Int2ShortMap$Entry): void;
    next(): Int2ShortLinkedOpenHashMap$MapEntry;
    previous(): Int2ShortLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Int2ShortMap$Entry): void;
}