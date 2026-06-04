import type { Long2LongLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongLinkedOpenHashMap$MapEntry.d.ts'
import type { Long2LongLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongLinkedOpenHashMap$MapIterator.d.ts'
import type { Long2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2LongLinkedOpenHashMap$EntryIterator extends Long2LongLinkedOpenHashMap$MapIterator<(param0: Long2LongMap$Entry) => void> implements ObjectListIterator<Long2LongMap$Entry> {
    constructor(null_: Long2LongLinkedOpenHashMap$EntryIterator)
    constructor(null_: Long2LongLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Long2LongLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2LongMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Long2LongLinkedOpenHashMap$MapEntry;
    previous(): Long2LongLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}