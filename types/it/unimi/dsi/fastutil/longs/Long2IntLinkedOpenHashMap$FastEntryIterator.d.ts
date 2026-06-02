import type { Long2IntLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntLinkedOpenHashMap$MapEntry.d.ts'
import type { Long2IntLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntLinkedOpenHashMap$MapIterator.d.ts'
import type { Long2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2IntLinkedOpenHashMap$FastEntryIterator extends Long2IntLinkedOpenHashMap$MapIterator<(param0: Long2IntMap$Entry) => void> implements ObjectListIterator<Long2IntMap$Entry> {
    constructor(null_: Long2IntLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Long2IntLinkedOpenHashMap$FastEntryIterator, arg1: number)
    // private entry: Long2IntLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2IntMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Long2IntLinkedOpenHashMap$MapEntry;
    previous(): Long2IntLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}