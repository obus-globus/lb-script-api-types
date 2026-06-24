import type { Int2DoubleLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleLinkedOpenHashMap$MapEntry.d.ts'
import type { Int2DoubleLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleLinkedOpenHashMap$MapIterator.d.ts'
import type { Int2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Int2DoubleLinkedOpenHashMap$EntryIterator extends Int2DoubleLinkedOpenHashMap$MapIterator<(param0: Int2DoubleMap$Entry) => void> implements ObjectListIterator<Int2DoubleMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private entry: Int2DoubleLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2DoubleMap$Entry) => void, arg1: number): void;
    add(arg0: Int2DoubleMap$Entry): void;
    next(): Int2DoubleLinkedOpenHashMap$MapEntry;
    previous(): Int2DoubleLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Int2DoubleMap$Entry): void;
}