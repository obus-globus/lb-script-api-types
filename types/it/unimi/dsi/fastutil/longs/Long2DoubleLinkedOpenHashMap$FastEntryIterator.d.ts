import type { Long2DoubleLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleLinkedOpenHashMap$MapEntry.d.ts'
import type { Long2DoubleLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleLinkedOpenHashMap$MapIterator.d.ts'
import type { Long2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2DoubleLinkedOpenHashMap$FastEntryIterator extends Long2DoubleLinkedOpenHashMap$MapIterator<(param0: Long2DoubleMap$Entry) => void> implements ObjectListIterator<Long2DoubleMap$Entry> {
    constructor(null_: Long2DoubleLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Long2DoubleLinkedOpenHashMap$FastEntryIterator, arg1: number)
    // private entry: Long2DoubleLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2DoubleMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Long2DoubleLinkedOpenHashMap$MapEntry;
    previous(): Long2DoubleLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}