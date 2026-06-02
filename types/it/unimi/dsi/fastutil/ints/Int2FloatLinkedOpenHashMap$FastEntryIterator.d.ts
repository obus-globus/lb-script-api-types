import type { Int2FloatLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatLinkedOpenHashMap$MapEntry.d.ts'
import type { Int2FloatLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatLinkedOpenHashMap$MapIterator.d.ts'
import type { Int2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2FloatLinkedOpenHashMap$FastEntryIterator extends Int2FloatLinkedOpenHashMap$MapIterator<(param0: Int2FloatMap$Entry) => void> implements ObjectListIterator<Int2FloatMap$Entry> {
    constructor(null_: Int2FloatLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Int2FloatLinkedOpenHashMap$FastEntryIterator, arg1: number)
    // private entry: Int2FloatLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2FloatMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Int2FloatLinkedOpenHashMap$MapEntry;
    previous(): Int2FloatLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}